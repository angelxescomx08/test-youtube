"use client";

import React from "react";
import { Post } from "../interfaces/posts";

export const PostCard = (post: Post) => {
	return (
		<div
			key={post.id}
			className="bg-slate-900 rounded-lg p-5 m-2 shadow-lg w-96"
			onClick={() => {
				console.log(post);
			}}
		>
			<h2 className="text-white text-2xl">{post.title}</h2>
			<p className="text-white mt-2">{post.content}</p>
			<p className="text-white mt-2 italic">{post.date}</p>
		</div>
	);
};
