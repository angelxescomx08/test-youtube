"use client";

import { Post } from "@/app/interfaces/posts";
import { use } from "react";

export function Prueba() {
	const posts = use(
		fetch("http://localhost:3000/api/posts")
			.then((res) => res.json())
			.then((data) => data as Post[]),
	);

	return <div className="text-white">{posts.map((post) => post.id)}</div>;
}
