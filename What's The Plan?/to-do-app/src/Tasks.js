import React from "react"

function Tasks(props){
    const TaskListData = props.taskList    
    let taskList = TaskListData.map(task => {
        return(
            <div className = "task-row" key = {task.id}>
                <h2>{task.message}</h2>            
                <svg className = "close-button" onClick = {()=> {props.deleteTask(task.id)}} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse opacity="0.8" rx="4.99718" ry="4.86174" transform="matrix(0.990379 0.138379 -0.146366 0.989231 5.6607 6.49911)" fill="#1A1A1A"/>
                    <line y1="-0.15" x2="7.88788" y2="-0.15" transform="matrix(0.717158 -0.696911 0.717158 0.696911 2.86068 9.22873)" stroke="#C4C4C4" strokeWidth="0.3"/>
                    <line y1="-0.15" x2="7.88788" y2="-0.15" transform="matrix(0.717158 0.696911 -0.717158 0.696911 2.86068 3.77814)" stroke="#C4C4C4" strokeWidth="0.3"/>
                </svg>
            </div>
        )
    })
    
    return(
        <div id = "task-set">
            {taskList.reverse()}
        </div>
    )
}

export default Tasks