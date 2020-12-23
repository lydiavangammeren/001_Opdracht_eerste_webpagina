import React from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalBarSeries,
  ChartLabel,
} from "react-vis";

function Studentpage({ data }) {
  const studentdata = data;
  const nameInUrl = window.location.pathname.split("/")[2];
  console.log(nameInUrl);
  const studentevaluation = studentdata.filter(
    (item) => item.name === nameInUrl
  );

  const funNumbers = studentevaluation.map(
    (assignment) => assignment.funfactor
  );
  const difficultyNumbers = studentevaluation.map(
    (assignment) => assignment.difficulty
  );

  const funFactorData = funNumbers.map((y, index) => {
    return { x: index, y };
  });

  const difficultyData = difficultyNumbers.map((y, index) => {
    return { x: index, y };
  });
  return (
    <div>
      <h2>{`${nameInUrl}'s evaluation of the assignments`}</h2>
      <div className="Chart">
        <XYPlot height={400} width={1350}>
          <HorizontalGridLines />
          <VerticalBarSeries
            className="funfactor"
            color="#c99da3"
            data={funFactorData}
          />
          <VerticalBarSeries className="difficulty" data={difficultyData} />
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
      </div>

      <h2 className="funcheckbox">funfactor</h2>
      <h2 className="difficultycheckbox">difficulty</h2>
    </div>
  );
}

export default Studentpage;
