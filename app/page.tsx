import Image from "next/image";
import LazyImage from "./components/lazy-image/LazyImage";

export default function Home() {
	return (
		<main className="container m-auto p-5">
			<Image
				src="/img/1.jpg"
				alt="Logo"
				width={1000}
				height={1000}
				// placeholder="blur"
				// blurDataURL="/img/1-small.jpg"
			/>
			{/* <LazyImage
				src="/img/1.jpg"
				placeholderSrc="/img/1-small.jpg"
				alt="Logo"
			/> */}
		</main>
	);
}
