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
					<div
						key={post.id}
						className="bg-slate-900 rounded-lg p-5 m-2 shadow-lg w-96"
					>
						<h2 className="text-white text-2xl">{post.title}</h2>
						<p className="text-white mt-2">{post.content}</p>
						<p className="text-white mt-2 italic">{post.date}</p>
					</div>
				))}
			</div>
		</main>
	);
}
