import Image from "next/image";
import LazyImage from "./components/lazy-image/LazyImage";

export default function Home() {
	return (
		<main className="container m-auto p-5">
			<LazyImage
				src="/img/1.jpg"
				placeholderSrc="/img/1-small.jpg"
				alt="Imagen de fondo"
			/>
			<Image
				src="/img/1.jpg"
				alt="My Image"
				width={1496}
				height={1000}
				placeholder="blur"
				blurDataURL="/img/1-small.jpg"
			/>
		</main>
	);
}
