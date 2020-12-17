import React from "react";
import StudentListItem from "./StudentListItem";
import studentdata from "../utils/studentdata";

class StudentList extends React.Component {
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
        <ul onChange={this.onChange}>{listOfStudents}</ul>
      </div>
    );
  }
}

export default StudentList
