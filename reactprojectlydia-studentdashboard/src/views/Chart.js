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
  constructor() {
    super();

    this.state = { checked: false, difficultyChecked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    if (value == "funfactor") {
      this.setState({
        checked: !this.state.checked,
      });
    } else if (value == "difficulty") {
      this.setState({ difficultyChecked: !this.state.difficultyChecked });
    }
  }

  render() {
    // variables die ik voor zowel fun als difficulty nodig heb:
    const { items } = this.props;
    const assignments = items.map((item) => item.assignment);
    const uniqueassignments = [...new Set(assignments)];
    // functies om fun naar het juiste formaat te krijgen
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
    // console.log(funNumbersPerAssignment);
    const funSum = funNumbersPerAssignment.map((funNumbers) =>
      funNumbers.reduce((a, b) => a + b)
    );
    const funAverage = funSum.map(
      (number) => number / funNumbersPerAssignment[0].length || 0
    );
    // console.log(funSum);
    // console.log(funAverage);
    const funFactorData = funAverage.map((y, index) => {
      return { x: index, y };
    });
    // console.log(funFactorData);

    // functies om difficulty naar het juiste formaat te krijgen.
    // later nog refactoren zodat ik 1 cluster aan functies voor fun en difficulty heb?

    const difficultyNumbersPerAssignment = uniqueassignments.map(
      (uniqueassignment) => {
        const difficulty = [];
        items.forEach((item) => {
          if (item.assignment === uniqueassignment) {
            difficulty.push(parseInt(item.difficulty));
          }
        });
        return difficulty;
      }
    );
    // console.log(difficultyNumbersPerAssignment);
    const difficultySum = difficultyNumbersPerAssignment.map(
      (difficultyNumbers) => difficultyNumbers.reduce((a, b) => a + b)
    );
    const difficultyAverage = difficultySum.map(
      (number) => number / difficultyNumbersPerAssignment[0].length || 0
    );
    // console.log(difficultySum);
    // console.log(difficultyAverage);
    const difficultyData = difficultyAverage.map((y, index) => {
      return { x: index, y };
    });

    const emptyBars = [
      funFactorData.map((item) => (item = { x: item.x, y: 0 })),
    ];
    console.log(emptyBars);
    const funBars = this.state.checked ? (
      <VerticalBarSeries
        className="funfactor"
        color="#c99da3"
        data={funFactorData}
      />
    ) : (
      <VerticalBarSeries data={emptyBars} />
    );

    const difficultyBars = this.state.difficultyChecked ? (
      <VerticalBarSeries className="difficulty" data={difficultyData} />
    ) : (
      <VerticalBarSeries data={emptyBars} />
    );
    return (
      <div className="Chart">
        <XYPlot height={400} width={1350}>
          <HorizontalGridLines />
          {funBars}
          {difficultyBars}
          <XAxis />
          <YAxis className="funfactor" />
          <YAxis className="difficulty" />
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

        <form>
          <label>
            <input
              onChange={this.handleChange}
              id="fun"
              type="checkbox"
              name="data"
              value="funfactor"
            />{" "}
            Funfactor per assignment
          </label>
          <label>
            <input
              onChange={this.handleChange}
              id="difficulty"
              type="checkbox"
              name="data"
              value="difficulty"
            />{" "}
            Difficulty per assignment
          </label>
        </form>
      </div>
    );
  }
}

export default Chart;
