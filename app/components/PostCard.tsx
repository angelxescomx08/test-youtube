"use client";

import React, { use } from "react";
import { Post } from "../interfaces/posts";

export const PostCard = (post: Post) => {
	// const posts = use(
	// 	fetch("http://localhost:3000/api/posts")
	// 		.then((res) => res.json())
	// 		.then((data) => data as Post[])
	// 		.catch((err) => []),
	// );

	return (
		<div
			key={post.id}
			className="bg-slate-900 rounded-lg p-5 m-2 shadow-lg w-96 text-white"
			onClick={() => {
				console.log(post);
			}}
		>
			<h2 className="text-white text-2xl">{post.title}</h2>
			<p className="text-white mt-2">{post.content}</p>
			<p className="text-white mt-2 italic">{post.date}</p>
			{/* {posts.map((post) => post.id)} */}
		</div>
	);
};
