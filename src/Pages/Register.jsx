import React from 'react';
import {Link} from 'react-router-dom'
const Register = () => {
    return (
        <div className='container my-5'>
            <h2 className='text-center fs-1'>Regsiter</h2>
            <hr />
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4 my-5">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Full Name
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder='Enter Your Name'
                            />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder='name@example.com'
                            />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder='Password'
                            />
                        </div>
                        <div className="mb-3 form-check">

                            <label className="form-check-label" htmlFor="exampleCheck1">
                                Already has an account?<Link to="/login"> Login</Link>
                            </label>
                        </div>
                        <div className='text-center mt-4'>
                            <button type="submit" className="btn btn-secondary">
                                Register
                            </button></div>
                    </form>
                </div>
                <div className="col-4"></div>
            </div>


        </div>
    );
}

export default Register;
