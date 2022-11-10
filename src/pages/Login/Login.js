import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import './Login.css';
import useTitle from '../../hooks/useTitle';


const Login = () => {
    useTitle('Login')
    // Get Auth Context Data
    const { loginUser, socialLogin, setLoading } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // Google Provider Instance
    const googleProvider = new GoogleAuthProvider();

    // Handle Login Form
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        loginUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.error(err);
                toast.error(err.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    // Handle Google Login
    const handleGoogleLogIn = () => {
        socialLogin(googleProvider)
            .then(result => {
                const user = result.user;
                // console.log(user);
                navigate(from, { replace: true });
            })
            .catch(err => console.error(err))
    }

    return (
        <div className='my-4'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 m-auto">
                        <div className="card">
                            <form onSubmit={handleLogin}>
                                <div className="card-body">
                                    <div className="text-center">
                                        <h3>Login</h3>
                                    </div>
                                    <hr />
                                    <div className="form-group mt-2">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" name="email" className="form-control" required />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" id="password" name="password" className="form-control" required />
                                    </div>
                                    <div className="text-center">
                                        <button className="btn w-75 btn-dark mt-3">Login</button>
                                        <Link to="/register" className="d-block mt-2">Don't have Account?<span> Register Now!</span></Link>
                                        <Link className="d-block">Forgot Password?</Link>
                                    </div>
                                    <hr />
                                    <div className="text-center">
                                        <Link onClick={handleGoogleLogIn} className="btn btn-outline-dark w-75"><FaGoogle /> Login with Google</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;