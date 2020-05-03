import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import Header from './Header/Header.js'
import {NavBar, ToolBar} from './Components'
import {Home,Search,Trending,Music,Gaming,Video} from './Pages'


function App(){
  return (
    <div className="Main-Container">
      <BrowserRouter>
        <Switch>
          <Route path = "/video" component = {Video}/>
          <Route path = "/" component = {ToolBar}/>
        </Switch>
        <Route exact path = "/" component = {Home}/>
        <Route path = "/" component = {Header}/>
        <Route exact path = "/trending" component = {Trending}/>
        <Route exact path = "/trending/Music" component = {Music}/>
        <Route exact path = "/trending/Gaming" component = {Gaming}/>
        <Route path = "/search" component = {Search}/>
        <Route path = "/" component = {NavBar}/>
      </BrowserRouter>  
    </div>
  )
}

export default App;
