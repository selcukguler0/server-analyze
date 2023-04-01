import { ChartOptions } from "chart.js";

export const memoryOptions = {
	responsive: true,
	plugins: {
		legend: {
			position: "top" as const,
			labels: {
				color: "white",
			},
		},
		title: {
			display: true,
			text: "Memory",
			color: "white",
		},
	},
	scales: {
		y: {
			ticks: { color: "rgb(209 213 219)", beginAtZero: true },
		},
		x: {
			ticks: { display: false },
		},
	},
	animations: {
		tension: {
			duration: 1000,
			easing: "linear",
			from: 1,
			to: 0,
			loop: true,
		},
	},
} as ChartOptions<"line">;

const labels = ["t1", "t2", "t3", "t4", "t5", "t6"];

// This function is used to generate random data for the chart, but it is also fixing hydration issues
function randomData() {
	if (typeof window !== "undefined") {
		return Array.from({ length: 6 }, () => Math.floor(Math.random() * 2000));
	} else {
		// Return a default value for server rendering
		return [1, 2, 3, 4, 5, 6];
	}
}

export const memoryData = {
	labels,
	datasets: [
		{
			fill: true,
			label: "(Mib) Memory",
			data: randomData(),
			borderColor: "rgb(53, 162, 235)",
			backgroundColor: "rgba(53, 162, 235, 0.5)",
		},
	],
};
