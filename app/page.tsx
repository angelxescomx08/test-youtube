import { Suspense } from "react";
import { PostCard } from "./components/PostCard";
import { Post } from "./interfaces/posts";

export default async function Home() {
	const posts = await fetch("http://localhost:3000/api/posts")
		.then((res) => res.json())
		.then((data) => data as Post[])
		.catch((err) => []);

	if (posts.length === 0) {
		return (
			<div>
				<h1 className="text-center text-2xl">No posts found</h1>
			</div>
		);
	}

	return (
		<main className="container m-auto p-5">
			<div className="flex flex-wrap gap-4">
				{posts.map((post) => (
					<PostCard key={post.id} {...post} />
				))}
			</div>
		</main>
	);
}
