import React from "react";
import StudentListItem from "./StudentListItem";
import studentdata from "../utils/studentdata";

export class StudentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: studentdata,
    };
  }
  onChange = (e) => {
    console.log(e.target.value);
  };
  render() {
    const items = this.state.students;
    console.log(items);
    const names = items.map((item) => item.name);
    const uniquenames = [...new Set(names)];
    const listOfStudents = uniquenames
      ? uniquenames.map((uniquename) => (
          <StudentListItem
            value={uniquename}
            item={uniquename}
          ></StudentListItem>
        ))
      : "";

    return (
      <div>
        <select onChange={this.onChange}>{listOfStudents}</select>
      </div>
    );
  }
}
