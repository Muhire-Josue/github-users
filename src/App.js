import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Landing from './components/pages/Landing';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Navbar from './components/layouts/Navbar';

const App = () =>{
  return (
    <div>
      <Navbar/>
      <Router>
        <Switch>
        <Route exact path='/home' component={Landing}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={Signup}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
