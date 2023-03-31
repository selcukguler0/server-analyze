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
};

const labels = ["t1", "t2", "t3", "t4", "t5", "t6"];

export const memoryData = {
	labels,
	datasets: [
		{
			fill: true,
			label: "Mib",
			data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 2000)),
			borderColor: "rgb(53, 162, 235)",
			backgroundColor: "rgba(53, 162, 235, 0.5)",
		},
	],
};
