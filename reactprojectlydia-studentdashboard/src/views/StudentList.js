import React from "react";
import StudentListItem from "./StudentListItem";


class StudentList extends React.Component {
  render() {
    const {items} = this.props;
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
        <ul id="studentlist">{listOfStudents}</ul>
      </div>
    );
  }
}

export default StudentList;
