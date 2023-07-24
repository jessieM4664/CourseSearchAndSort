import React, { Component } from "react";
import CourseRow from "./CourseRow";

export  class CourseTable extends Component {
  
  render() {
    const name = this.props.name;
    const credit = this.props.credit;
    const courses = this.props.courses;
      const emphasis = this.props.emphasis;
    
    const rows = [];
    courses.forEach((c) => {

      if (c.id === 1) {
        rows.push(
          <CourseRow
            course={c}
            key={c.id} 
            editCallback= { this.props.editCallback }
          />
        );
      }
      if (c.id === 2 && credit < 71) {
        rows.push(
          <CourseRow
            course={c}
            key={c.id}
            editCallback= { this.props.editCallback }
          />
        );
      }
      if (c.id === 3 && credit < 41) {
        rows.push(
          <CourseRow
            course={c}
            key={c.id}
            editCallback= { this.props.editCallback }
          />
        );
      }
        
    });
   
    return (
      <table className="table table-sm table-striped table-bordered">
        <thead>
          <tr>
            <th colSpan="7" className="bg-primary text-white text-center h4 p-2">
              {emphasis} Emphasis for {name}
            </th>
          </tr> 
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Semester</th>
            <th>Prefix</th>
            <th>Number</th>
            <th>Grade</th>
            <th>Editing</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}