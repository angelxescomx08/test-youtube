"use client";

import { Counter } from "./components/Counter";

export default function Home() {
	return (
		<main className="container m-auto p-5">
			<div className="flex items-center gap-4">
				<Counter />
			</div>
		</main>
	);
}
