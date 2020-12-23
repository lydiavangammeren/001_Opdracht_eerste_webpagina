import React from "react";

function StudentListItem({ value, item, number }) {
  return (
    <li key={value} value={value}>
      {item} = assignment number {number}
    </li>
  );
}

export default StudentListItem;
