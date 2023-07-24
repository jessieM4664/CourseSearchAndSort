import React, { Component } from "react";

export default class CourseRow extends Component {
  

  render() {
    let topic = this.props.course;

    return (
      <tr>
        <td>{topic.id}</td>
        <td>{topic.description}</td>
        <td>{topic.semester}</td>
        <td>{topic.prefix}</td>
        <td>{topic.number}</td>
        <td>{topic.grade}</td>
        
        <td>
          <button className="btn btn-sm btn-warning m-1"
            onClick={ () =>this.props.editCallback(this.props.course)}> Edit
          </button>
          
        </td>
      </tr>
    );
  }
}