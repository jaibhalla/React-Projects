import React from 'react'
import {NavLink} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {storeQuery,noQuery,submitQuery} from '../Actions'

function SearchBar({headerProps}){
    const queryHandler = useSelector(reducer=>reducer.queryHandler)
    const dispatch = useDispatch()
    const handleChange = (e)=>{
        if(e.target.value)
            dispatch(storeQuery(e.target.value))
        else
            dispatch(noQuery())
    } 
    const handleSubmit = (e)=>{
        if(queryHandler === "Go to Home")
            setTimeout(()=>{headerProps.history.push('/')},0)
        else 
            dispatch(submitQuery(queryHandler))
    }
    return(
        <div className = "SearchBar-Container">
            <form onSubmit = {handleSubmit}>
                <input type = "text" placeholder = "Search" onChange = {handleChange}></input>
                <NavLink to = "/search" onClick = {handleSubmit}>
                    <button>
                        <img src = {require("../images/Search.svg")} alt = ''/>
                    </button>
                </NavLink>
            </form>
        </div>
    )
}

export default SearchBar 