import React from 'react'
function Home(){
    return(
        <div className = "Body-Container">
            <div className = "Home-Main-Containter">
                <img src = {require("../images/Youtube-Logo.png")} alt = ""/>
                <h1>I like <span>Youtube</span>. So I made it</h1>
                <h2>This is my first <span>React</span> Project</h2>
            </div>

        </div>
    )
}

export default Home 