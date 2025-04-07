"use client";

import StopwatchWithLeak from "./components/RefComponents";

export default function Home() {
	return (
		<main className="container m-auto p-5">
			<div className="flex items-center gap-4">
				<StopwatchWithLeak />
			</div>
		</main>
	);
}
