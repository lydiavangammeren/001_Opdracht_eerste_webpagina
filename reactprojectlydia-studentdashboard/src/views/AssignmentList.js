import React from "react";
import AssignmentListItem from "./AssignmentListItem";
import studentdata from "../utils/studentdata";

class AssignmentList extends React.Component {
  
  onChange = (e) => {
    console.log(e.target.value);
  };
  render() {
    const items = studentdata;
    const assignments = items.map((item) => item.assignment);
    const uniqueAssignments = [...new Set(assignments)];
    const listOfAssignments = uniqueAssignments
      ? uniqueAssignments.map((uniqueassignment,index) => (
          <AssignmentListItem
            key={uniqueassignment}
            value={uniqueassignment}
            item={uniqueassignment}
            number={index}
          ></AssignmentListItem>
        ))
      : "";

    return (
      <div>
        <ul onChange={this.onChange}>{listOfAssignments}</ul>
      </div>
    );
  }
}

export default AssignmentList
