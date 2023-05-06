import React, { Component } from "react";
import Chart from "react-apexcharts";
import * as theme from "../../js/DARK.js";

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
									color: theme.textParagraphFill,
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
				},
				xaxis: {
					categories: ["00", "", "", "", "", "", "", "", "", "", ""],
				},
			},
			series: [
				{
					name: "series-1",
					data: [
						30, 40, 45, 50, 49, 60, 70, 91, 0, 90, 22, 30, 40, 45, 50, 49, 60,
						70, 91, 0, 90, 22,
					],
				},
			],
		};
	}

	render() {
		return (
			<div className="app">
				<div className="row">
					<div className="mixed-chart">
						<Chart
							options={this.state.options}
							series={this.state.series}
							type="bar"
							width="342"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default CardGraph;
