import React, {Component} from "react"

class AddTask extends Component{
    state = {
        message: "",
        id:null
    }
    submitted = (e) =>{
        e.preventDefault()
        if(this.state.message != ""){ //Prevent submitting and empty tasks
            this.props.addTask(this.state)
            this.setState({
                message: "",
                id:null
            })
        }
    }

    updateTasks = (e) =>{
        this.setState({
            message:e.target.value,
            id: Math.random()
        })
    }
    
    render(){
        return(
            <form id = "submit-row" onSubmit = {this.submitted}>
                <input id = "new-task" type = "text" onChange = {this.updateTasks} value = {this.state.message} autocomplete="off"></input>
                <button id = "submit-button">Submit</button>
            </form>
        )
    }
}


export default AddTask