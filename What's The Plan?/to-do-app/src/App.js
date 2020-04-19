import React, {Component} from 'react';
import Tasks from "./Tasks"
import AddTask from "./AddTask"

class App extends Component{
  state = {
    taskList:[
    ]
  }
  addTask = (task) =>{
    const newTasklist = [...this.state.taskList, task]
    this.setState({
      taskList:newTasklist
    })

  }

  deleteTask = (id) =>{
    const newTasklist = this.state.taskList.filter(task =>{
      return task.id !== id
    })
    this.setState({
      taskList:newTasklist
    })
  }

  render(){
    return(
      <div id = "main-container">
        <h1 id = "Title">What's the Plan?</h1>
        <AddTask addTask = {this.addTask}/>
        <Tasks taskList = {this.state.taskList}  deleteTask = {this.deleteTask}/>
      </div>
    )
  }
}
export default App;
