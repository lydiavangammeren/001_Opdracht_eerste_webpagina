import React from "react";
import Chart from "./Chart";
import studentdata from "../utils/studentdata";
import StudentList from "./StudentList";
import AssignmentList from "./AssignmentList";
import Studentpage from "./Studentpage"
import "../../node_modules/react-vis/dist/style.css";

class DashBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      students: studentdata,
    };
  }

  render() {
    return (
      <div>
        <h2>Average funfactor and difficulty per assignment</h2>
        <Chart items={this.state.students}></Chart>
        <StudentList items={this.state.students}></StudentList>
        <AssignmentList items={this.state.students}></AssignmentList>
        {/* <Studentpage items={this.state.students} /> */}
      </div>
    );
  }
}

export default DashBoard;
