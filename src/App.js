import React from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
//import Add from './components/Add'
import AddUser from './components/AddUser'
import Add2 from './components/Add2'



function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/AddUser" component={AddUser} />
        <Route path="/Add2" component={Add2} />
      </Switch>
    </BrowserRouter>
  );
}

export default App
