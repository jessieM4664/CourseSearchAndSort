import React from  "react"
import './App.css';
import FilterableCourseTable from "./FilterableCourseTable";

class  App extends React.Component {
  render () {
    return (
      <div className="App">
        <FilterableCourseTable />
      </div>
    );
  }
}

export default App;
