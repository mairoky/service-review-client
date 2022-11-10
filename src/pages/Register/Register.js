import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { FaGoogle } from "react-icons/fa";
import toast from 'react-hot-toast';
import './Register.css';
import useTitle from '../../hooks/useTitle';

const Register = () => {
    useTitle('Register');
    // Get Auth Context Data
    const { createUser, socialLogin, updateUserProfile, setLoading } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // Google Provider Instance
    const googleProvider = new GoogleAuthProvider();

    // Handle Register Form
    const handleRegistration = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                form.reset();
                handleProfileUpdate(name);
                toast.success('Registration successful!');
                const currentUser = {
                    email: user.email
                }

                // get jwt token
                fetch('https://service-review-server-three.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('token', data.token);
                        navigate(from, { replace: true });
                    })
                // navigate(from, { replace: true });
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
                const currentUser = {
                    email: user.email
                }

                // get jwt token
                fetch('https://service-review-server-three.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('token', data.token);
                        navigate(from, { replace: true });
                    })
                // navigate(from, { replace: true });
            })
            .catch(err => console.error(err))
    }

    // Update user profile
    const handleProfileUpdate = (name) => {
        const profile = {
            displayName: name,
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(err => console.error(err));
    }

    return (
        <div className='my-4'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-7 col-12 m-auto">
                        <div className="card">
                            <form onSubmit={handleRegistration}>
                                <div className="card-body">
                                    <div className="text-center">
                                        <h3>Register Account</h3>
                                    </div>
                                    <hr />
                                    <div className="form-group mt-2">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" id="name" name="name" className="form-control" required />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" name="email" className="form-control" required />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" id="password" name="password" className="form-control" required />
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="w-75 btn btn-dark mt-3">Register</button>
                                        <Link to="/login" className="d-block mt-2">Already have an Account?<span> Login Now!</span></Link>
                                    </div>
                                    <hr />
                                    <div className="text-center">
                                        <Link onClick={handleGoogleLogIn} className="w-75 btn btn-outline-dark"><FaGoogle /> Signup with Google</Link>
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

export default Register;