import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
//import Add from './components/Add'
import Edit from './components/Edit'
import AddUser from './components/AddUser'
//import usersData from './assets/users.json'


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/AddUser" component={AddUser} />
        <Route path="/edit" component={Edit} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
