import React, { Fragment } from 'react';

const Signup = () => {
    return (
        <Fragment>
            <center>

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
                        <p>already have an account?<a href='/login'>Login</a></p>
                </form>
            </div>
            </center>
        </Fragment>
    )
}
export default Signup;
