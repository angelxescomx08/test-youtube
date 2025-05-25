"use client";

import ReactLenis, { LenisRef } from "lenis/react";
import { cancelFrame, frame } from "motion";
import { useScroll, motion, useTransform } from "motion/react";
import React, { useEffect, useRef } from "react";

export const ScrollAnimation = () => {
	const lenisRef = useRef<LenisRef>(null);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function update(data: { timestamp: number }) {
			const time = data.timestamp;
			lenisRef.current?.lenis?.raf(time);
		}

		frame.update(update, true);

		return () => cancelFrame(update);
	}, []);

	const { scrollYProgress } = useScroll({
		target: ref,
	});

	const maskSize = useTransform(
		scrollYProgress,
		[0, 0.4, 0.7, 1],
		["4000%", "1000%", "300%", "50%"],
	);
	const scale = useTransform(scrollYProgress, [0, 0.4], [1.4, 1]);
	const textOpacity = useTransform(scrollYProgress, [0.6, 1], [0, 1]);

	useEffect(() => {
		scrollYProgress.on("change", (v) => {
			console.log("scrollYProgress:", v.toFixed(3));
		});
	}, [scrollYProgress]);

	return (
		<ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
			<div
				className="relative h-[200vh] w-full bg-black overflow-hidden"
				ref={ref}
			>
				<motion.div
					className="w-full h-screen fixed inset-0 z-0"
					style={{
						background: "url('/img/1.jpg') center/cover no-repeat",
						scale: scale,
						maskImage: "url('/img/ANGEL SOFTWARE DEV.svg')",
						maskPosition: "center",
						maskRepeat: "no-repeat",
						maskSize: maskSize,
					}}
				></motion.div>

				<motion.div
					className="w-full h-screen fixed inset-0 z-10 pointer-events-none"
					style={{
						backgroundColor: "white",
						scale: scale,
						opacity: textOpacity,
						maskImage: "url('/img/ANGEL SOFTWARE DEV.svg')",
						maskPosition: "center",
						maskRepeat: "no-repeat",
						maskSize: maskSize,
					}}
				></motion.div>
			</div>
		</ReactLenis>
	);
};
