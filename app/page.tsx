import {
	SignedIn,
	SignedOut,
	SignInButton,
	SignUpButton,
	UserButton,
} from "@clerk/nextjs";
import { Button } from "@mui/material";

export default function Home() {
	return (
		<main className="container m-auto p-5">
			<div className="flex flex-wrap gap-4">
				<SignedOut>
					<SignInButton>
						<Button className="button">Sign in</Button>
					</SignInButton>
					<SignUpButton>
						<Button className="button">Sign up</Button>
					</SignUpButton>
				</SignedOut>
				<SignedIn>
					<UserButton />
				</SignedIn>
			</div>
		</main>
	);
}
