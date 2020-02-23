import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                        <a href='/home' className="navbar-brand"><h2>
                            <i className='fab fa-github' />{'   '}
                            Github Users
                        </h2>
                        </a>
            </nav>
        </div>
    )
}
export default Navbar;
