import React from "react";
import { Link } from "react-router-dom";

function StudentListItem({ value, item }) {
  return (
    <li key={value} value={value}>
      <Link to={`StudentPage/${item}`}>{item}</Link>
    </li>
  );
}

export default StudentListItem;
