import React, { Fragment } from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Landing = () => {
    return (
        <Fragment>
            <Router>
                <div className='bg'>
                </div>
                <div className='container'>
                    <h2 id="banner">Find github users faster and easier</h2>
                    <div class="row">
                        <div class="col-lg-4 col-md-12">
                            <div class="card">
                                <div class="view">
                                    <img src="https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top"
                                        alt="" />
                                    <Link to='##'>
                                        <div class="mask rgba-white-slight"></div>
                                    </Link>
                                </div>
                                <div class="card-body">
                                    <p className='card-text'><b>Username:</b> Brad Traversy</p>
                                    <p className='card-text'><b>Email:</b> brad@traversy.com</p>
                                    <p className='card-text'><b>Location:</b> Boston</p>
                                </div>

                            </div>

                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="card">
                                <div class="view">
                                    <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top"
                                        alt="" />
                                    <Link to="#">
                                        <div class="mask rgba-white-slight"></div>
                                    </Link>
                                </div>
                                <div class="card-body">
                                    <p className='card-text'><b>Username:</b> Jane Doe</p>
                                    <p className='card-text'><b>Email:</b> jane@doe.com</p>
                                    <p className='card-text'><b>Location:</b> St Petersburg</p>
                                </div>

                            </div>

                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="card">
                                <div class="view">
                                    <img src="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top"
                                        alt="" />
                                    <Link to="#">
                                        <div class="mask rgba-white-slight"></div>
                                    </Link>
                                </div>
                                <div class="card-body">
                                    <p className='card-text'><b>Username:</b> Rajish Ahmed</p>
                                    <p className='card-text'><b>Email:</b> ahmed@doe.com</p>
                                    <p className='card-text'><b>Location:</b> Lahore</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="page-footer font-small unique-color-dark pt-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 py-5">
                                <div className="mb-5 flex-center">
                                    <Link to='##' className="fb-ic">
                                        <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                    </Link>
                                    <Link to='##' className="tw-ic">
                                        <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                    </Link>
                                    <Link to='##' className="gplus-ic">
                                        <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                    </Link>
                                    <Link to='##' className="li-ic">
                                        <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                    </Link>
                                    <Link to='##' className="ins-ic">
                                        <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                    </Link>
                                    <Link to='##' className="pin-ic">
                                        <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright text-center py-3">Copyright©2020
                </div>

                </footer>
            </Router>
        </Fragment>
    )
}
export default Landing;
