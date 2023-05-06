import React, { Component } from "react";
import Chart from "react-apexcharts";

const dataDown = [
	5, 4, 10, 50, 0, 60, 5, 91, 0, 5, 0, 30, 10, 45, 50, 0, 60, 5, 0, 0, 0, 10, 5,
	12,
];

const dataUp = [
	30, 40, 45, 10, 49, 0, 70, 91, 0, 90, 22, 30, 40, 45, 50, 49, 60, 70, 91, 0,
	90, 10, 11, 12,
];

class CardGraph extends Component<{}, { options: object; series: any }> {
	constructor(props: any) {
		super(props);

		this.state = {
			options: {
				yaxis: {
					show: false,
				},
				dataLabels: {
					enabled: false,
				},
				grid: {
					show: false,
				},
				fill: {
					colors: undefined,
					opacity: 1,
				},
				tooltip: {
					enabled: false,
				},
				legend: {
					show: false,
				},
				plotOptions: {
					bar: {
						columnWidth: "70%",
						horizontal: false,
						colors: {
							ranges: [
								{
									from: 0,
									to: 100,
									color: props.theme.textParagraphFill,
								},
							],
							backgroundBarColors: [],
							backgroundBarOpacity: 1,
							backgroundBarRadius: 0,
						},
					},
					colors: {
						ranges: [
							{
								from: 0,
								to: 0,
								color: undefined,
							},
						],
						backgroundBarColors: [],
						backgroundBarOpacity: 1,
						backgroundBarRadius: 0,
					},
				},
				chart: {
					id: "basic-bar",
					animations: {
						enabled: false,
					},
					toolbar: {
						show: false,
					},
				},
				xaxis: {
					categories: [
						"00",
						"",
						"",
						"",
						"",
						"06",
						"",
						"",
						"",
						"",
						"",
						"12",
						"",
						"",
						"",
						"",
						"",
						"18",
						"",
						"",
						"",
						"",
						"",
						"00",
					],
					axisTicks: {
						show: false,
					},
					axisBorder: {
						show: false,
					},

					labels: {
						show: true,
						style: {
							colors: props.theme.textParagraphFill,
						},
						rotate: 0,
					},
				},
			},
			series: [
				{
					name: "series-1",
					data: props.state === "up" ? dataUp : dataDown,
				},
			],
		};
	}

	render() {
		return (
			<Chart
				options={this.state.options}
				series={this.state.series}
				type="bar"
				width="342"
			/>
		);
	}
}

export default CardGraph;
