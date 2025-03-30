import { TextField } from "@mui/material";
import React from "react";
import { memo } from "react";

type Props = {
	onSearch: (user: string) => void;
};

const Search = ({ onSearch }: Props) => {
	console.log("Se ha renderizado el search");
	return (
		<TextField
			className="bg-white"
			variant="filled"
			label="Buscar"
			onChange={(e) => {
				onSearch(e.target.value);
			}}
		/>
	);
};

export default memo(Search);
