import React from "react";

const AssignmentListItem = ({ value, item, number }) => {
  return (
    <li key={value} value={value}>
      {item} = assignment number {number}
    </li>
  );
}

export default AssignmentListItem;
