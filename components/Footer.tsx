import React from "react";

export default function Footer() {
	return (
		<footer className="flex justify-center w-full mx-auto max-w-screen-lg">
			<div className="text-gray-300 p-2">
				Pterodactyl© 2016 - {new Date().getFullYear()}
			</div>
		</footer>
	);
}
