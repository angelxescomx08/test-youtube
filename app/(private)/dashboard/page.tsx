"use client";

import { useAuth, useUser } from "@clerk/nextjs";

export default function DashboardPage() {
	const auth = useAuth();
	const { user } = useUser();

	console.log(user);

	return (
		<div>
			<h1>
				{user?.firstName} {user?.lastName}
			</h1>
		</div>
	);
}
