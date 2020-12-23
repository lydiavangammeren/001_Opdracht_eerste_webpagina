import React from "react";
import AssignmentListItem from "./AssignmentListItem";

class AssignmentList extends React.Component {
  render() {
    const { items } = this.props;
    const assignments = items.map((item) => item.assignment);
    const uniqueAssignments = [...new Set(assignments)];
    const listOfAssignments = uniqueAssignments
      ? uniqueAssignments.map((uniqueAssignment, index) => (
          <AssignmentListItem
            key={uniqueAssignment}
            value={uniqueAssignment}
            item={uniqueAssignment}
            number={index}
          ></AssignmentListItem>
        ))
      : "";

    return (
      <div>
        <ul>{listOfAssignments}</ul>
      </div>
    );
  }
}

export default AssignmentList;
