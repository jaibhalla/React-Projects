import React from 'react'
import {TopLeft,SearchBar} from './index'
import '../css/header.css'

function Header(props){
    return(
        <div className = "Header-Main-Container">
            <TopLeft/>
            <SearchBar headerProps = {props}/>
        </div>
        )
}

export default Header