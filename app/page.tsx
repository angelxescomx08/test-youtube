"use client";

import { Button } from "@mui/material";
import { useState } from "react";

function calculateState() {
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	return arr.reduce((prev, current) => prev + current, 0);
}

export default function Home() {
	const [count, setCount] = useState(calculateState);
	const [user, setUser] = useState({
		name: "Angel",
		age: 20,
	});

	return (
		<main className="container m-auto p-5">
			<div className="flex items-center gap-4">
				<Button
					className="button"
					onClick={() => {
						setCount((prev) => prev - 5);
						setCount((prev) => prev - 5);
					}}
				>
					-10
				</Button>
				<p className="text-white">{count}</p>
				<Button
					className="button"
					onClick={() => {
						setCount((prev) => prev + 5);
						setCount((prev) => prev + 5);
					}}
				>
					+10
				</Button>
			</div>
			{/* <div className="flex flex-col gap-4 w-40">
				<input
					type="text"
					placeholder="name"
					value={user.name}
					onChange={(e) => {
						setUser((prev) => ({
							...prev,
							name: e.target.value,
						}));
					}}
				/>
				<input
					type="text"
					placeholder="age"
					value={user.age}
					onChange={(e) => {
						setUser((prev) => ({
							...prev,
							age: Number(e.target.value),
						}));
					}}
				/>
			</div>

			<p className="text-white font-semibold">name: {user.name}</p>
			<p className="text-white font-semibold">age: {user.age}</p>

			<Button
				className="button mt-4"
				onClick={() => {
					setUser((prev) => ({
						...prev,
						name: "Jose",
					}));
				}}
			>
				Change name
			</Button> */}
		</main>
	);
}
