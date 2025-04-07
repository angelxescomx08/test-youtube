import React, { useState, useEffect, useRef } from "react";

const ResizeExample = () => {
	const [size, setSize] = useState({ width: 0, height: 0 });
	const elementRef = useRef<HTMLDivElement | null>(null);

	const updateSize = () => {
		if (elementRef.current) {
			const { width, height } = elementRef.current.getBoundingClientRect();
			setSize({ width, height });
		}
	};

	useEffect(() => {
		updateSize();

		window.addEventListener("resize", updateSize);

		return () => {
			window.removeEventListener("resize", updateSize);
		};
	}, []);

	return (
		<div>
			<div
				ref={elementRef}
				style={{ width: "100%", height: "200px", backgroundColor: "lightblue" }}
			>
				<h2 className="text-black font-semibold text-xl w-full">
					Redimensiona la ventana para ver el tamaño del contenedor
				</h2>
			</div>

			<div>
				<p className="text-white font-semibold text-xl">
					Anchura: {size.width}px
				</p>
				<p className="text-white font-semibold text-xl">
					Altura: {size.height}px
				</p>
			</div>
		</div>
	);
};

export default ResizeExample;
