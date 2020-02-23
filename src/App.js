import React, { Component,Fragment } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Landing from './components/pages/Landing';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';

class App extends Component {
  state = {
    users: [],
    user: {},
    alert: null
  }
  async componentDidMount() {
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);
    this.setState({ users: res.data });
  }
  render() {
    return (
      <div>
        <Navbar />
        <Router>
          <Switch>
          <Route exact path='/' render={props => (
                <Fragment>
                    <Users users={this.state.users} />
                </Fragment>
              )} />
            <Route exact path='/home' component={Landing} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
          </Switch>
        </Router>
      </div>
    )
  }
}
export default App;
