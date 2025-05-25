"use client";

import {
	cancelFrame,
	frame,
	motion,
	useScroll,
	useTransform,
} from "framer-motion";
import ReactLenis, { LenisRef } from "lenis/react";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Parallax() {
	const lenisRef = useRef<LenisRef>(null);
	const ref = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: ref,
	});

	const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
	const middleY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
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
			{/* Sección Parallax */}
			<div ref={ref} className="relative h-[200vh] overflow-hidden">
				{/* Fondo */}
				<motion.div
					style={{ y: backgroundY }}
					className="absolute inset-0 w-full h-[200vh] z-0"
				>
					<Image
						src="/img/parallax/bkgd_0.png"
						alt="Background"
						className="w-full h-full object-cover"
						fill
					/>
				</motion.div>
				{/* Capa media */}
				<motion.div
					style={{ y: middleY }}
					className="absolute inset-0 w-full h-[200vh] z-10"
				>
					<Image
						src="/img/parallax/bkgd_3.png"
						alt="Middle Layer"
						className="w-full h-full object-cover"
						fill
					/>
				</motion.div>
				Primer plano
				<motion.div
					style={{ y: foregroundY }}
					className="absolute inset-0 w-full h-[200vh] z-20"
				>
					<Image
						src="/img/parallax/bkgd_1.png"
						alt="Foreground"
						className="w-full h-full object-cover"
						fill
					/>
				</motion.div>
				{/* Contenido encima del parallax */}
				<div className="relative z-30 mt-[100vh] text-white text-center px-4">
					<h1 className="text-5xl font-bold mb-4">Efecto Parallax</h1>
					<p className="text-lg">Desplázate para ver el efecto</p>
				</div>
			</div>
		</ReactLenis>
	);
}
