import React from "react";
import { Router, Route, Link, withRouter } from "react-router-dom";

function StudentListItem({ value, item }) {
  return (
  <option value={value}> <Link to={`/${item}`}></Link> {item}</option>)
  
  
}

export default StudentListItem;
