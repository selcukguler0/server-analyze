import { HiSearch } from "react-icons/hi";
import { ImParagraphJustify } from "react-icons/im";
import { IoMdSettings } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";

import { useRouter } from "next/router";
import Link from "next/link";

export default function Header() {
	const router = useRouter();
	console.log(router.pathname);
	
	return (
		<>
			<header className="bg-slate-900 p-3 flex justify-around items-center">
				<h1 className="text-white">Pterodactyl</h1>
				<div className="flex items-center">
					<HiSearch className="text-white mr-5" />
					<ImParagraphJustify className="text-white mr-5" />
					<IoMdSettings className="text-white mr-5" />
					<div className="text-white mr-5">a</div>
					<IoExitOutline className="text-white" />
				</div>
			</header>
			{/* navbar */}
			<nav className="bg-slate-800 p-3 flex items-center  justify-center">
				<div>
					<button
						data-collapse-toggle="navbar-default"
						type="button"
						className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						aria-controls="navbar-default"
						aria-expanded="false">
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-6 h-6"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fill-rule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clip-rule="evenodd"></path>
						</svg>
					</button>
					<div className="hidden w-full md:block md:w-auto" id="navbar-default">
						<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0">
							<li>
								<Link
									href="/console"
									className={
										"block hover:text-white " +
										(router.pathname === "/console"
											? "text-white border-b border-sky-400"
											: "text-gray-400")
									}
									aria-current="page">
									Console
								</Link>
							</li>
							<li>
								<Link
									href="/files"
									className={
										"block hover:text-white " +
										(router.pathname === "/files"
											? "text-white border-b border-sky-400"
											: "text-gray-400")
									}
									aria-current="page">
									Files
								</Link>
							</li>
							<li>
								<Link
									href="/databases"
									className={
										"block hover:text-white " +
										(router.pathname === "/databases"
											? "text-white border-b border-sky-400"
											: "text-gray-400")
									}
									aria-current="page">
									Databases
								</Link>
							</li>
							<li>
								<Link
									href="/schedules"
									className={
										"block hover:text-white " +
										(router.pathname === "/schedules"
											? "text-white border-b border-sky-400"
											: "text-gray-400")
									}
									aria-current="page">
									Schedules
								</Link>
							</li>
							<li>
								<Link
									href="/users"
									className={
										"block hover:text-white " +
										(router.pathname === "/users"
											? "text-white border-b border-sky-400"
											: "text-gray-400")
									}
									aria-current="page">
									Users
								</Link>
							</li>
							<li>
								<Link
									href="/backups"
									className={
										"block hover:text-white " +
										(router.pathname === "/backups"
											? "text-white border-b border-sky-400"
											: "text-gray-400")
									}
									aria-current="page">
									Backups
								</Link>
							</li>
							<li>
								<Link
									href="/network"
									className={
										"block hover:text-white " +
										(router.pathname === "/network"
											? "text-white border-b border-sky-400"
											: "text-gray-400")
									}
									aria-current="page">
									Network
								</Link>
							</li>
							<li>
								<Link
									href="/startup"
									className={
										"block hover:text-white " +
										(router.pathname === "/startup"
											? "text-white border-b border-sky-400"
											: "text-gray-400")
									}
									aria-current="page">
									Startup
								</Link>
							</li>
							<li>
								<Link
									href="/settings"
									className={
										"block hover:text-white " +
										(router.pathname === "/settings"
											? "text-white border-b border-sky-400"
											: "text-gray-400")
									}
									aria-current="page">
									Settings
								</Link>
							</li>
							<li>
								<Link
									href="/activity"
									className={
										"block hover:text-white " +
										(router.pathname === "/activity"
											? "text-white border-b border-sky-400"
											: "text-gray-400")
									}
									aria-current="page">
									Activity
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div></div>
			</nav>
		</>
	);
}
