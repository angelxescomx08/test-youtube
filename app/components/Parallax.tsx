"use client";

import ReactLenis, { LenisRef } from "lenis/react";
import {
	useScroll,
	useTransform,
	motion,
	frame,
	cancelFrame,
} from "motion/react";
import Image from "next/image";
import { useEffect, useRef } from "react";

export const Parallax = () => {
	const ref = useRef<HTMLDivElement>(null);
	const lenisRef = useRef<LenisRef>(null);

	const { scrollYProgress } = useScroll({
		target: ref,
	});

	const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
	const middlegroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
	const foregroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

	useEffect(() => {
		function update(data: { timestamp: number }) {
			const time = data.timestamp;
			lenisRef.current?.lenis?.raf(time);
		}

		frame.update(update, true);

		return () => cancelFrame(update);
	}, []);

	return (
		<ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
			<div ref={ref} className="relative h-[200vh] overflow-hidden">
				<motion.div
					className="absolute w-full h-[200vh] inset-0 z-0"
					style={{
						y: backgroundY,
					}}
				>
					<Image
						src={"/img/parallax/bkgd_0.png"}
						alt="Background"
						className="w-full h-full object-cover"
						fill
					/>
				</motion.div>

				<motion.div
					className="absolute w-full h-[200vh] inset-0 z-10"
					style={{
						y: middlegroundY,
					}}
				>
					<Image
						src={"/img/parallax/bkgd_1.png"}
						alt="Middleground"
						className="w-full h-full object-cover"
						fill
					/>
				</motion.div>

				<motion.div
					className="absolute w-full h-[200vh] inset-0 z-20"
					style={{
						y: foregroundY,
					}}
				>
					<Image
						src={"/img/parallax/bkgd_2.png"}
						alt="Foreground"
						className="w-full h-full object-cover"
						fill
					/>
				</motion.div>
			</div>
		</ReactLenis>
	);
};
