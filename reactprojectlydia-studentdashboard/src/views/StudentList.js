import React from "react";
import StudentListItem from "./StudentListItem";
import studentdata from "../utils/studentdata";

class StudentList extends React.Component {
  
  onChange = (e) => {
    console.log(e.target.value);
  };
  render() {
    const items = studentdata;
    const names = items.map((item) => item.name);
    const uniquenames = [...new Set(names)];
    const listOfStudents = uniquenames
      ? uniquenames.map((uniquename) => (
          <StudentListItem
            key={uniquename}
            value={uniquename}
            item={uniquename}
          ></StudentListItem>
        ))
      : "";

    return (
      <div>
        <ul id="studentlist" onChange={this.onChange}>{listOfStudents}</ul>
      </div>
    );
  }
}

export default StudentList
