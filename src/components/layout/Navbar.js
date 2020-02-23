import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <Router>
                    <div className="container">
                        <Link to='/' className="navbar-brand"><h2>
                            <i className='fab fa-github' />{'   '}
                            Github Users
                        </h2>
                        </Link>
                    </div>
                </Router>
            </nav>
        </div>
    )
}
export default Navbar;
