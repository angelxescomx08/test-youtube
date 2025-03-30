import { useCallback, useState } from "react";
import Search from "./Search";
import { Button } from "@mui/material";
import { shuffleArray } from "../utils/suffle";

const allUsers = [
	"Earl Gutierrez",
	"Dean Drake",
	"Clyde Taylor",
	"Allen Carroll",
	"Gabriel Carpenter",
	"John Leonard",
];

export const UsersList = () => {
	const [users, setUsers] = useState(allUsers);

	const handleUsers = useCallback((text: string) => {
		const filteredUsers = allUsers.filter((user) =>
			user.toLowerCase().includes(text.toLowerCase()),
		);
		setUsers(filteredUsers);
	}, []);

	return (
		<div>
			<div className="flex items-center gap-4">
				<Button
					onClick={() => setUsers(shuffleArray(allUsers))}
					className="button"
				>
					Barajear
				</Button>
				<Search onSearch={handleUsers} />
			</div>
			<ul className="text-white mt-4">
				{users.map((user, index) => (
					<li key={index}>{user}</li>
				))}
			</ul>
		</div>
	);
};
