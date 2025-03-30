import { Button, TextField } from "@mui/material";
import { memo, useState } from "react";

const users = [
	"Ellen Turner",
	"Jim Steele",
	"Hattie Higgins",
	"Willie Walker",
	"Warren Zimmerman",
	"Ruth Kennedy",
	"Lee Gray",
	"Amy Shaw",
	"Lucas Wong",
	"Randy Barnes",
	"Lucille Dunn",
	"Ian Foster",
	"Lester Wise",
	"Mable Matthews",
	"Lawrence Warren",
];

const UsersList = ({ search, filter }: { search: string; filter: string }) => {
	console.log("Se renderizó la lista de usuarios");
	return (
		<div>
			<p className="text-white font-semibold">search: {search}</p>
			<p className="text-white font-semibold mb-5">filter: {filter}</p>
			<ul>
				{users
					.filter((user) => user.toLowerCase().includes(search.toLowerCase()))
					.map((user, index) => (
						<li key={index} className="text-white">
							{user}
						</li>
					))}
			</ul>
		</div>
	);
};

const UsersListMemo = memo(UsersList, (prevProps, nextProps) => {
	return prevProps.search === nextProps.search;
});

export const Counter = () => {
	const [count, setCount] = useState(0);
	const [search, setSearch] = useState("");
	const [filter, setFilter] = useState("");

	console.log("Se renderizó el contador");
	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center gap-4">
				<Button className="button" onClick={() => setCount(count - 1)}>
					-1
				</Button>
				<p className="text-white font-medium text-xl">{count}</p>
				<Button className="button" onClick={() => setCount(count + 1)}>
					+1
				</Button>
			</div>
			<hr />
			<TextField
				className="bg-white"
				placeholder="search..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<TextField
				className="bg-white"
				placeholder="filter..."
				value={filter}
				onChange={(e) => setFilter(e.target.value)}
			/>

			<UsersListMemo search={search} filter={filter} />
		</div>
	);
};
