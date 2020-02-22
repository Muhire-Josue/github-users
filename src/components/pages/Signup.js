import React, { Fragment } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Signup = () => {
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
                                <Link to="/login" className='nav-link'><span className='colorize'>Login</span></Link>
                            </li>
                        </ul>
                    </div>
                </Router>
            </nav>
            <div className='container'>
                <form className='input-form'>
                <div className="form-group">
                        <label htmlFor="exampleInput">Username</label>
                        <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="Enter username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInput">Email address</label>
                        <input type="email" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInput">Password</label>
                        <input type="password" className="form-control" id="exampleInput" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInput">Location</label>
                        <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="Enter Location" />
                    </div>
                    <button type="submit" className="btn btn-dark">Submit</button>
                </form>
            </div>
        </Fragment>
    )
}
export default Signup;
