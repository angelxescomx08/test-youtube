"use client";
import { ReactLenis } from "lenis/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollTextBgClip() {
	const ref = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end end"],
	});

	// Escala de 200% a 100%
	const maskSize = useTransform(scrollYProgress, [0, 1], ["1000%", "100%"]);

	return (
		<ReactLenis root>
			<div ref={ref} className="relative h-[200vh] w-full bg-black">
				<motion.div
					className="w-full h-screen fixed inset-0"
					style={{
						background: "url('/img/1.jpg') center/cover no-repeat",
						WebkitMaskImage: "url('/img/ANGEL-SOFTWARE-DEV.png')",
						WebkitMaskRepeat: "no-repeat",
						WebkitMaskPosition: "center",
						WebkitMaskSize: maskSize,
						maskImage: "url('/img/ANGEL-SOFTWARE-DEV.png')",
						maskRepeat: "no-repeat",
						maskPosition: "center",
						maskSize: maskSize,
					}}
				/>
			</div>
		</ReactLenis>
	);
}
