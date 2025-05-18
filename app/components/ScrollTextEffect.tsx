"use client";

import { LenisRef, ReactLenis } from "lenis/react";
import {
	motion,
	useScroll,
	useTransform,
	frame,
	cancelFrame,
} from "framer-motion";
import { useEffect, useRef } from "react";

export default function ScrollTextBgClip() {
	const ref = useRef<HTMLDivElement>(null);
	const lenisRef = useRef<LenisRef>(null);

	useEffect(() => {
		function update(data: { timestamp: number }) {
			lenisRef.current?.lenis?.raf(data.timestamp);
		}
		frame.update(update, true);
		return () => cancelFrame(update);
	}, []);

	const { scrollYProgress } = useScroll({
		target: ref,
	});

	// Dividimos el salto de 4000% a 50% en 3 tramos:
	// 4000% → 1000% → 300% → 50%
	const maskSize = useTransform(
		scrollYProgress,
		[0, 0.4, 0.7, 1],
		["4000%", "1000%", "300%", "50%"],
	);
	const scale = useTransform(scrollYProgress, [0, 0.3], [1.2, 1]);
	const textWhiteOpacity = useTransform(scrollYProgress, [0.6, 1], [0, 1]);

	return (
		<ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
			<div
				ref={ref}
				className="relative h-[200vh] w-full bg-black overflow-hidden"
			>
				{/* Imagen de fondo con máscara */}
				<motion.div
					className="w-full h-screen fixed inset-0 z-0"
					style={{
						background: "url('/img/1.jpg') center/cover no-repeat",
						scale,
						WebkitMaskImage: "url('/img/ANGEL SOFTWARE DEV.svg')",
						WebkitMaskRepeat: "no-repeat",
						WebkitMaskPosition: "center",
						WebkitMaskSize: maskSize,
						maskImage: "url('/img/ANGEL SOFTWARE DEV.svg')",
						maskRepeat: "no-repeat",
						maskPosition: "center",
						maskSize: maskSize,
					}}
				/>

				{/* Capa blanca animada para que las letras se "blanqueen" */}
				<motion.div
					className="w-full h-screen fixed inset-0 z-10 pointer-events-none"
					style={{
						backgroundColor: "white",
						opacity: textWhiteOpacity,
						WebkitMaskImage: "url('/img/ANGEL SOFTWARE DEV.svg')",
						WebkitMaskRepeat: "no-repeat",
						WebkitMaskPosition: "center",
						WebkitMaskSize: maskSize,
						maskImage: "url('/img/ANGEL SOFTWARE DEV.svg')",
						maskRepeat: "no-repeat",
						maskPosition: "center",
						maskSize: maskSize,
					}}
				/>
			</div>
		</ReactLenis>
	);
}
