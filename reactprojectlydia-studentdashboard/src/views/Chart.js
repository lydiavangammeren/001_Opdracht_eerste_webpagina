import React, { Component } from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalBarSeries,
  ChartLabel,
} from "react-vis";

class Chart extends Component {
  render() {
    const { items } = this.props;
    const assignments = items.map((item) => item.assignment);
    const uniqueassignments = [...new Set(assignments)];
    const funNumbersPerAssignment = uniqueassignments.map(
      (uniqueassignment) => {
        const funFactor = [];
        items.forEach((item) => {
          if (item.assignment === uniqueassignment) {
            funFactor.push(parseInt(item.funfactor));
          }
        });
        return funFactor;
      }
    );
    console.log(funNumbersPerAssignment);
    const funSum = funNumbersPerAssignment.map((funNumbers) =>
      funNumbers.reduce((a, b) => a + b)
    );
    const funAverage = funSum.map(
      (number) => number / funNumbersPerAssignment[0].length || 0
    );
    console.log(funSum);
    console.log(funAverage);
    const xyFunFactorAverage = funAverage.map((y, index) => {
      return { x: index, y };
    });
    console.log(xyFunFactorAverage);

    const data = xyFunFactorAverage;
    //  const data = [{x: 0, y: 4}]
    return (
      <div className="Chart">
        <XYPlot height={300} width={300}>
          <HorizontalGridLines />
          <VerticalBarSeries data={data} />
          <XAxis />
          <YAxis />
          <ChartLabel
            text="Assignments"
            className="alt-x-label"
            includeMargin={false}
            xPercent={0.025}
            yPercent={1.01}
          />

          <ChartLabel
            text="Funfactor & difficulty"
            className="alt-y-label"
            includeMargin={false}
            xPercent={0.06}
            yPercent={0.06}
            style={{
              transform: "rotate(-90)",
              textAnchor: "end",
            }}
          />
        </XYPlot>
      </div>
    );
  }
}

export default Chart;
