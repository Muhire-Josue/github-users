import React, { Fragment } from 'react';
const Login = () => {
    return (
        <Fragment>
            <div className='container'>
                <form className='input-form' action='/'>
                    <div className="form-group">
                        <label htmlFor="exampleInput">Email address</label>
                        <input type="email" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInput">Password</label>
                        <input type="password" className="form-control" id="exampleInput" placeholder="Password" />
                    </div>
                    <input type="submit" value='Login' className="btn btn-dark wider" />
                    <p>don't have an account?<a href='/signup'>create one here</a></p>
                </form>
            </div>
        </Fragment>
    )
}
export default Login;
