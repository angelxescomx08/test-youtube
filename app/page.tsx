"use client";

import { UsersList } from "./components/UsersList";

export default function Home() {
	return (
		<main className="container m-auto p-5">
			<div className="flex items-center gap-4">
				<UsersList />
			</div>
		</main>
	);
}
