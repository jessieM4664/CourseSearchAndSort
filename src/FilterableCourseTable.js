import React, { Component } from "react";
import InfoBar from "./InfoBar";
import CourseDisplay from "./CourseDisplay";

export default class FilterableCourseTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      emphasis: "Writing",
      emphasis1: "Speaking",
      credits: 0,
      writingCourses : [
        {id: 1, description: "Writing1",semester:'' , prefix:'ENG', number: '368/371', grade: '  '},
        {id: 2, description: "Writing2",semester:'' , prefix:'', number: '  ', grade: '  '},
        {id: 3, description: "Writing3",semester:'' , prefix:'', number: '  ', grade: '  '}
      ],
      speakingCourses : [
        {id: 1, description: "Speaking1",semester:'' , prefix:'SPK', number: '208/230', grade: '  '},
        {id: 2, description: "Speaking2",semester:'' , prefix:'', number: '  ', grade: '  '},
        {id: 3, description: "Speaking3",semester:'' , prefix:'', number: '  ', grade: '  '}
      ]
    };
    

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCreditChange = this.handleCreditChange.bind(this);
  }


  handleNameChange(studentName) {
    this.setState({
      name: studentName
    });
  }
  
  handleCreditChange(trCredit) {
    this.setState({
      credits: trCredit
    })
  }

  saveData = (collection, item) => {
      if (item.id === "") {
          item.id = this.idCounter++;
          this.setState(state => state[collection] 
              = state[collection].concat(item));
      } else {
          this.setState(state => state[collection] 
              = state[collection].map(stored => 
                    stored.id === item.id ? item: stored))
                    
      } 
  }

  deleteData = (collection, item) => {
    this.setState(state => state[collection] 
        = state[collection].filter(stored => stored.id !== item.id));
}


  render() {
    return (
      <div>
        <InfoBar
          studentName={this.state.name}
          transferCredit={this.state.credits}
          onNameChange={this.handleNameChange}
          onCreditChange={this.handleCreditChange}
        />
        <CourseDisplay  
                    name={this.state.name}
                    emphasis={this.state.emphasis}
                    credit={this.state.credits}
                    courses={ this.state.writingCourses }
                    saveCallback={ c => this.saveData("writingCourses", c) }
                    deleteCallback={ c => this.deleteData("writingCourses", c) } 
        />
        <CourseDisplay  
                    name={this.state.name}
                    emphasis={this.state.emphasis1}
                    credit={this.state.credits}
                    courses={ this.state.speakingCourses }
                    saveCallback={ c => this.saveData("speakingCourses", c) }
                    deleteCallback={ c => this.deleteData("speakingCourses", c) } 
        />

      </div>
    );
  }
}