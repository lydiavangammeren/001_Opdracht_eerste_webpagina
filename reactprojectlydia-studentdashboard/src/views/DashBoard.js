import React from "react";
import Chart from "./Chart";
import StudentList from "./StudentList";
import AssignmentList from "./AssignmentList";
import "../../node_modules/react-vis/dist/style.css";

function DashBoard({ data }) {
  const studentData = data;
  return (
    <div>
      <h2>Average funfactor and difficulty per assignment</h2>
      <Chart items={studentData}></Chart>
      <StudentList items={studentData}></StudentList>
      <AssignmentList items={studentData}></AssignmentList>
    </div>
  );
}

export default DashBoard;
