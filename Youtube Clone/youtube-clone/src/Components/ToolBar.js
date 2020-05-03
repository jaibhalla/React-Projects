import React from 'react'
import '../css/ToolBar.css'
import {NavLink} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {submitQuery} from '../Actions' 

function ToolBar(props) {
    const path = props.location.pathname
    const dispatch = useDispatch()
    return(
        <div className = "ToolBar-Container">
            <div className = {path ==='/'?"ToolBar-Button-grey":"ToolBar-Button-white"}>
                <NavLink to = "/">
                    <svg width="22" height="25" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.5 13V8.5H9.5V13H13.25V7H15.5L8 0.25L0.5 7H2.75V13H6.5Z" fill= {path === "/"? "#ff0000":"#5F5F5F"}/>
                    </svg>
                        <span className = {path === "/"?"button-red":"button-grey"}>Home</span>
                </NavLink>        
            </div>
            <div className = {path ==='/trending'?"ToolBar-Button-grey":"ToolBar-Button-white"}>
                <NavLink to = "/trending" onClick = {() => dispatch(submitQuery("Trending"))} >
                    <svg width="16" height="25" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.125 0.502502C7.125 0.502502 7.68 2.49 7.68 4.1025C7.68 5.6475 6.6675 6.9 5.1225 6.9C3.57 6.9 2.4 5.6475 2.4 4.1025L2.4225 3.8325C0.9075 5.6325 0 7.965 0 10.5C0 13.815 2.685 16.5 6 16.5C9.315 16.5 12 13.815 12 10.5C12 6.4575 10.0575 2.85 7.125 0.502502ZM5.7825 14.25C4.4475 14.25 3.3675 13.2 3.3675 11.895C3.3675 10.68 4.155 9.825 5.475 9.555C6.8025 9.285 8.175 8.6475 8.94 7.62C9.2325 8.5875 9.3825 9.6075 9.3825 10.65C9.3825 12.6375 7.77 14.25 5.7825 14.25Z" fill= {path === "/trending"? "#ff0000":"#5F5F5F"}/>
                    </svg>
                    <span className = {path === "/trending"?"button-red":"button-grey"}>Trending</span>
                </NavLink>
            </div> 
        </div>
    )
}

export default ToolBar