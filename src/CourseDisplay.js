import React, { Component } from "react";
import { CourseEditor } from "./CourseEditor";
import { CourseTable } from "./CourseTable";

export default class CourseDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showEditor: false,
            selectedCourse: null
        }
    }

    startEditing = (course) => {
        this.setState({ showEditor: true, selectedCourse: course })
    }

    cancelEditing = () => {
        this.setState({ showEditor: false, selectedCourse: null })
    }

    saveCourse = (course) => {
        this.props.saveCallback(course);
        this.setState({ showEditor: false, selectedCourse: null })        
    }

    render() {
        if (this.state.showEditor) {
            return <CourseEditor 
                key={ this.state.selectedCourse.id || -1 }
                course={ this.state.selectedCourse } 
                saveCallback={ this.saveCourse }
                cancelCallback={ this.cancelEditing } />
        } else {
            return <div className="m-2">
                <CourseTable 
                    name={this.props.name}
                    emphasis={this.props.emphasis}
                    courses={this.props.courses }
                    credit = {this.props.credit }
                    editCallback={this.startEditing }
                    deleteCallback={this.props.deleteCallback } />                                 
            </div>
        }
    }
}
