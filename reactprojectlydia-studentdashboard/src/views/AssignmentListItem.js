import React from "react";
import { Link } from "react-router-dom";

function StudentListItem({ value, item, number }) {
  return (
    <li key={value} value={value}>
      {item} = assignment number {number}
    </li>
  );
}

export default StudentListItem;
