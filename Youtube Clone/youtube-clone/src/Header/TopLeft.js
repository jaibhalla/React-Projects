import React from 'react'
import '../css/TopLeft.css'
import {useSelector,useDispatch} from 'react-redux'
import {openNavBar,closeNavBar} from '../Actions'
import {NavLink} from 'react-router-dom'

function TopLeft(){
    const navbarOpen = useSelector(reducer => reducer.navbarOpen)
    const dispatch = useDispatch()
    return(
       <div className = "TopLeft-Container">
            <div className = "Menu-Button" onClick = {navbarOpen?()=> {dispatch(closeNavBar())}:()=> {dispatch(openNavBar())}}>
                <div className = "Menu-Button-Lines"></div>
                <div className = "Menu-Button-Lines"></div>
                <div className = "Menu-Button-Lines"></div>
            </div>
            <NavLink to = "/">
                <img src = {require("../images/Youtube-Logo.png")} className = "Youtube-Logo" onClick = {()=>{dispatch(closeNavBar())}} alt = ""/>
            </NavLink>
       </div> 
    )
}

export default TopLeft

