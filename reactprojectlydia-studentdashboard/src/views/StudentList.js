import React from "react";
import StudentListItem from "./StudentListItem";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

class StudentList extends React.Component {
  render() {
    const { items, handleClick } = this.props;
    const names = items.map((item) => item.name);
    const uniquenames = [...new Set(names)];
    const listOfStudents = uniquenames
      ? uniquenames.map((uniquename) => (
          <StudentListItem
            key={uniquename}
            clickItem={handleClick}
            item={uniquename}
          ></StudentListItem>
        ))
      : "";

    const defaultOption = listOfStudents[0];

    return (
      <div>
        <Dropdown
          options={listOfStudents}
          onChange={this._onSelect}
          value={defaultOption}
          placeholder="Select a student"
        />
      </div>
    );
  }
}

export default StudentList;
