import React from "react";
// import { Link } from "react-router-dom";

function StudentListItem({ clickItem, item }) {
  return (
    <li className="list-item" onClick={clickItem} value={item}>
      {item}
    </li>
  );
}

export default StudentListItem;
