export const networkOptions = {
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
			text: "Network",
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

export const networkData = {
	labels,
	datasets: [
		{
			fill: true,
			label: "Up",
			data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 600)),
			borderColor: "rgb(53, 162, 235)",
			backgroundColor: "rgba(53, 162, 235, 0.5)",
		},
		{
			fill: true,
			label: "Down",
			data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 600)),
			borderColor: "rgb(234,182,118)",
			backgroundColor: "rgb(226,135,67)",
		},
	],
};
