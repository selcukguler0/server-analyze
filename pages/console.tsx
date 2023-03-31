import Head from "next/head";
import { useState } from "react";
import { AiOutlineWifi } from "react-icons/ai";
import { AiFillClockCircle } from "react-icons/ai";
import { BsFillCpuFill } from "react-icons/bs";
import { FaMemory } from "react-icons/fa";
import { ImFloppyDisk } from "react-icons/im";
import { VscCloudUpload } from "react-icons/vsc";
import { VscCloudDownload } from "react-icons/vsc";

// Chart
import { cpuLoadData, cpuLoadOptions } from "@/chartData/CpuLoad";
import { memoryData, memoryOptions } from "@/chartData/Memory";
import { networkData, networkOptions } from "@/chartData/Network";

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend
);

export default function Home() {
	const [cpuLoad] = useState(Math.floor(Math.random() * 150));
	const [memory] = useState(Math.floor(Math.random() * 1000));
	const [networkUp] = useState(Math.floor(Math.random() * 300));
	const [networkDown] = useState(Math.floor(Math.random() * 300));
	const [disk] = useState(Math.floor(Math.random() * 6000));

	return (
		<>
			<Head>
				<title>Pterodactyl</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="flex flex-col min-h-screen">
				{/* header */}
				<main className="flex flex-col justify-around items-center mt-3">
					{/* body header */}
					<div className="flex justify-between items-center w-full mx-auto max-w-screen-lg">
						<p className="w-2/3 text-white m-2 font-medium text-xl">sa</p>
						<div className="w-1/3 flex">
							<button className="bg-sky-600 p-2 px-5 m-1 text-white rounded grow">
								Start
							</button>
							<button className="bg-neutral-600 p-2 px-5 m-1 text-white rounded grow">
								Restart
							</button>
							<button className="bg-rose-600 p-2 px-5 m-1 text-white rounded grow">
								Stop
							</button>
						</div>
					</div>
					{/* body content */}
					<div className="flex justify-center w-full mx-auto max-w-screen-lg">
						<div className="w-2/3 bg-black rounded flex flex-col m-2">
							<table className="flex-1">
								<tbody>
									<tr className="flex p-2 hover:bg-gray-600">
										<td className="text-amber-300 pl-2">selcuk@root:</td>{" "}
										<td className="text-white pl-2">
											Server markes as offline...
										</td>
									</tr>
									<tr className="flex p-2 hover:bg-gray-600">
										<td className="text-amber-300 pl-2">[Pterodactyl]:</td>{" "}
										<td className="text-white pl-2">
											Tring to connect server...
										</td>
									</tr>
									<tr className="flex p-2 hover:bg-gray-600">
										<td className="text-amber-300 pl-2">[Pterodactyl]:</td>{" "}
										<td className="text-white pl-2">
											Tring to connect server...
										</td>
									</tr>
								</tbody>
							</table>
							<input
								className="w-full bg-slate-800 p-2 text-white rounded"
								placeholder="Type a command..."
								type="text"
							/>
						</div>
						<div className="w-1/3">
							<div className="bg-slate-600 p-3 px-5 m-2 text-white rounded flex items-center">
								<div className="bg-slate-700 p-2 mr-2 rounded">
									<AiOutlineWifi className="mx-auto" />
								</div>
								<div>
									<div className="text-gray-300 text-xs">Adress</div>
									<div className="text-white">wing:1300</div>
								</div>
							</div>

							<div className="bg-slate-600 p-3 px-5 m-2 text-white rounded flex items-center">
								<div className="bg-yellow-400 p-2 mr-2 rounded">
									<AiFillClockCircle className="mx-auto" />
								</div>
								<div>
									<div className="text-gray-300 text-xs">Uptime</div>
									<div className="text-white">1d 0h 3m 11s</div>
								</div>
							</div>

							<div className="bg-slate-600 p-3 px-5 m-2 text-white rounded flex items-center">
								<div className="bg-rose-700 p-2 mr-2 rounded">
									<BsFillCpuFill className="mx-auto" />
								</div>
								<div>
									<div className="text-gray-300 text-xs">CPU Load</div>
									<div className="text-white">
										{cpuLoad} %{" "}
										<span className="text-gray-300 text-xs">/100</span>
									</div>
								</div>
							</div>

							<div className="bg-slate-600 p-3 px-5 m-2 text-white rounded flex items-center">
								<div className="bg-slate-700 p-2 mr-2 rounded">
									<FaMemory className="mx-auto" />
								</div>
								<div>
									<div className="text-gray-300 text-xs">Memory</div>
									<div className="text-white">
										{memory} Mib{" "}
										<span className="text-gray-300 text-xs">/1.95 GiB</span>
									</div>
								</div>
							</div>

							<div className="bg-slate-600 p-3 px-5 m-2 text-white rounded flex items-center">
								<div className="bg-slate-700 p-2 mr-2 rounded">
									<ImFloppyDisk className="mx-auto" />
								</div>
								<div>
									<div className="text-gray-300 text-xs">Disk</div>
									<div className="text-white">
										{disk} Mib{" "}
										<span className="text-gray-300 text-xs">/16 GiB</span>
									</div>
								</div>
							</div>

							<div className="bg-slate-600 p-3 px-5 m-2 text-white rounded flex items-center">
								<div className="bg-slate-700 p-2 mr-2 rounded">
									<VscCloudUpload className="mx-auto" />
								</div>
								<div>
									<div className="text-gray-300 text-xs">Network (Inbound)</div>
									<div className="text-white">{networkUp} Mib</div>
								</div>
							</div>

							<div className="bg-slate-600 p-3 px-5 m-2 text-white rounded flex items-center">
								<div className="bg-slate-700 p-2 mr-2 rounded">
									<VscCloudDownload className="mx-auto" />
								</div>
								<div>
									<div className="text-gray-300 text-xs">
										Network (Outbound)
									</div>
									<div className="text-white">{networkDown} Mib</div>
								</div>
							</div>
						</div>
					</div>
					{/* graphs */}
					<div className="flex w-full mx-auto max-w-screen-lg">
						<div className="flex-1 bg-slate-600 text-white rounded m-2">
							<Line options={cpuLoadOptions} data={cpuLoadData} />
						</div>
						<div className="flex-1 bg-slate-600 text-white rounded m-2">
							<Line options={memoryOptions} data={memoryData} />
						</div>
						<div className="flex-1 bg-slate-600 text-white rounded m-2">
							<Line options={networkOptions} data={networkData} />
						</div>
					</div>
				</main>
			</div>
		</>
	);
}