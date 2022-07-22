
import React, { Component  } from "react";
import ReactApexChart from "react-apexcharts";
class Treemap extends Component {
  constructor(props) {
    // props.data.sort((a, b) => {
    //   return b.va - a.y;
    // });
    console.log(props.data);
    super(props);

    this.state = {
      series: [
        {
          name: "Heatmap",
          data: props.data,
        },
      ],
      options: {
        legend: {
          show: false,
        },
        title: {
          text: "Дотоодын хөрөнгийн зах зээлийн үнэлгээний зураглал",
        },
        dataLabels: {
          enabled: true,
          style: {
            fontSize: "12px",
          },
        },
        plotOptions: {
          treemap: {
            enableShades: true,
            shadeIntensity: 0.5,
            reverseNegativeShade: true,
          },
        },
      },
    };
  }
  render() {
    return (
      <div className="w-full mx-auto">
        {this.state.data && (
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="treemap"
            height={900}
          />
        )}
      </div>
    );
  }
}

export default Treemap;