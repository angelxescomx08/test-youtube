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
		offset: ["start start", "end end"],
	});

	// Animaciones
	const maskSize = useTransform(scrollYProgress, [0, 1], ["5000%", "50%"]);
	const scale = useTransform(scrollYProgress, [0, 0.3], [1.2, 1]);
	const textWhiteOpacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

	return (
		<ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
			<div ref={ref} className="relative h-[200vh] w-full bg-black">
				{/* Imagen de fondo con máscara */}
				<motion.div
					className="w-full h-screen fixed inset-0 z-0"
					style={{
						background: "url('/img/1.jpg') center/cover no-repeat",
						scale,
						WebkitMaskImage: "url('/img/ANGEL SOFTWARE DEV.png')",
						WebkitMaskRepeat: "no-repeat",
						WebkitMaskPosition: "center",
						WebkitMaskSize: maskSize,
						maskImage: "url('/img/ANGEL SOFTWARE DEV.png')",
						maskRepeat: "no-repeat",
						maskPosition: "center",
						maskSize: maskSize,
						willChange: "transform, maskSize, opacity",
					}}
				/>

				{/* Capa blanca animada para que las letras se "blanqueen" */}
				<motion.div
					className="w-full h-screen fixed inset-0 z-10 pointer-events-none"
					style={{
						backgroundColor: "white",
						opacity: textWhiteOpacity,
						WebkitMaskImage: "url('/img/ANGEL SOFTWARE DEV.png')",
						WebkitMaskRepeat: "no-repeat",
						WebkitMaskPosition: "center",
						WebkitMaskSize: maskSize,
						maskImage: "url('/img/ANGEL SOFTWARE DEV.png')",
						maskRepeat: "no-repeat",
						maskPosition: "center",
						maskSize: maskSize,
						willChange: "transform, maskSize, opacity",
					}}
				/>
			</div>
		</ReactLenis>
	);
}
