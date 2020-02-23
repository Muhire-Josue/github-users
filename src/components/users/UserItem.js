import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom';


const UserItem = props => {
    const { login, avatar_url, type } = props.user;
    return (
        <div>
            <div>
                <br />
                <div className='cards'>
                    <Router>
                        <div className="centralize"></div>
                        <div className="col-lg-4 col-md-12">
                            <div className="card">
                                <div className="view">
                                    <img src={avatar_url} className="card-img-top" alt="" />
                                    <Link to='##'>
                                        <div className="mask rgba-white-slight"></div>
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <p className='card-text'><b>Username:</b> {login}</p>
                                    <p className='card-text'><b>Type:</b> {type}</p>
                                    <a href={`/user/${login}`} className="btn btn-dark">View More</a>


                                </div>

                            </div>

                        </div>
                    </Router>
                </div>
            </div>
        </div>
    )
}
export default UserItem;