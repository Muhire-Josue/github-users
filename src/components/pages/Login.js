import React, { Fragment } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Login = () => {
    return (
        <Fragment>
            <nav className="navbar navbar-dark bg-dark">
                <Router>
                    <div className="container">
                        <Link to='/' className="navbar-brand" href="#"><h2>
                            <i className='fab fa-github' />
                            Github Users
                        </h2>
                        </Link>
                        <ul className='navbar-nav mr-auto'>
                            <li className='nav-item'>
                                <Link to="/signup" className='nav-link'><span className='colorize'>Signup</span></Link>
                            </li>
                        </ul>
                    </div>
                </Router>
            </nav>
            <div className='container'>
                <form className='input-form'>
                    <div className="form-group">
                        <label htmlFor="exampleInput">Email address</label>
                        <input type="email" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInput">Password</label>
                        <input type="password" className="form-control" id="exampleInput" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-dark">Submit</button>
                </form>
            </div>
        </Fragment>
    )
}
export default Login;
