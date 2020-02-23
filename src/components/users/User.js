import React, { Component, Fragment } from 'react'

class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
    }
    render() {
        const {
            name,
            company,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = this.props.user;
        return (
            <div className="container">
                <div className="card testimonial-card customized">
                    <div className="card-up indigo lighten-1"></div>
                    <div className="avatar mx-auto white">
                        <img src={avatar_url} className="rounded-circle"
                            alt="" />
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">{name}
                        </h4>
                        Hireable:{' '}
                        {hireable ? (
                            <i className='fas fa-check text-success' />
                        ) : (
                                <i className='fas fa-times-circle text-danger' />
                            )}
                        <hr />
                        <p><b>Location:</b> {location}</p>
                        {bio && (
                            <Fragment>
                                <h3>Bio</h3>
                                <p>{bio}</p>
                            </Fragment>
                        )}
                        <ul>
                            <li>
                                {login && (
                                    <Fragment>
                                        <strong>Username: </strong> {login}
                                    </Fragment>
                                )}
                            </li>

                            <li>
                                {company && (
                                    <Fragment>
                                        <strong>Company: </strong> {company}
                                    </Fragment>
                                )}
                            </li>

                            <li>
                                {blog && (
                                    <Fragment>
                                        <strong>Website: </strong> {blog}
                                    </Fragment>
                                )}
                            </li>
                        </ul>
                        <button type="button" className="btn btn-primary">
                            Followers: <span className="badge badge-danger ml-2">{followers}</span>
                        </button> {' '}
                        <button type="button" className="btn btn-primary">
                        Following: <span className="badge badge-danger ml-2">{following}</span>
                        </button>{' '}
                        <button type="button" className="btn btn-primary">
                        Public Repos: <span className="badge badge-danger ml-2">{public_repos}</span>
                        </button> {' '}
                        <button type="button" className="btn btn-primary">
                        Public Gists: <span className="badge badge-danger ml-2">{public_gists}</span>
                        </button> {' '}
                        <br /> <br />
                        <a href={html_url} className='btn btn-dark'>
                            Visit Github Profile
          </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default User;
