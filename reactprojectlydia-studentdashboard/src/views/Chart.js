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
    // console.log(uniqueassignments)
    const funPerAssignment = uniqueassignments.map((uniqueassignment) => {
      const funFactor = [];
      items.map((item) => {
        if (item.assignment === uniqueassignment) {
          funFactor.push(item.funfactor);
        }
      });
      return funFactor;
    });
    console.log(funPerAssignment);

    const data = [
      { x: 0, y: 8 },
      { x: 1, y: 5 },
      { x: 2, y: 4 },
      { x: 3, y: 9 },
      { x: 4, y: 1 },
      { x: 5, y: 7 },
      { x: 6, y: 6 },
      { x: 7, y: 3 },
      { x: 8, y: 2 },
      { x: 9, y: 2 },
    ];
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
