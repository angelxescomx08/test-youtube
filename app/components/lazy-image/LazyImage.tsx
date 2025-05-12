"use client";

import { useEffect, useRef, useState } from "react";
import "./LazyImage.css";

type LazyImageProps = {
	src: string;
	placeholderSrc: string;
	alt?: string;
};

export default function LazyImage({
	src,
	placeholderSrc,
	alt,
}: LazyImageProps) {
	const [isLoaded, setIsLoaded] = useState(false);
	const imgRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		const img = imgRef.current;
		if (!img) return;

		const handleLoad = () => setIsLoaded(true);

		if (img.complete) {
			handleLoad();
		} else {
			img.addEventListener("load", handleLoad);
			return () => img.removeEventListener("load", handleLoad);
		}
	}, []);

	return (
		<div
			className={`blurred-img ${isLoaded ? "loaded" : ""}`}
			style={{ backgroundImage: `url(${placeholderSrc})` }}
		>
			<img ref={imgRef} src={src} alt={alt} loading="lazy" />
		</div>
	);
}
