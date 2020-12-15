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
    const funPerAssignment = uniqueassignments.map((uniqueassignment) => {
      const funFactor = [];
      items.forEach((item) => {
        if (item.assignment === uniqueassignment) {
          funFactor.push(item.funfactor);
        }
      });
      return funFactor;
    });
    console.log(funPerAssignment);
    const funNumbersFirstAssignment = funPerAssignment[0];
    console.log(funNumbersFirstAssignment);
    const xyobjectsforfunNumbersFirstAssignment = funNumbersFirstAssignment.map((y, index) => {
      return { x: index, y };
    });
    console.log(xyobjectsforfunNumbersFirstAssignment);

    const data = xyobjectsforfunNumbersFirstAssignment;
    // const data = [{x: 0, y: 4}]
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
