import React, { useState } from "react";
import {usesState} from "react";
// import { push } from 'react-router-redux'
import {Link} from "react-router-dom";
import axios from 'axios'
import GoogleLogin from 'react-google-login';
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login',{email, password})
        .then((result)=>{
            console.log(result)
            if(result.data === "Success"){
        navigate('/home')
    }
    })
    .catch(err=>console.log(err))
    }

    const responseSuccessGoogle = (response) => {
        console.log(response);
            navigate('/home')
       
    }

    const responseErrorGoogle = (response) => {

    }

    return(
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                         type="email"
                         placeholder="Enter Email"
                         autoComplete="off"
                         name="email"
                         className="form-control rounded-0"
                         onChange={(e)=>setEmail(e.target.value)}
                         />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            className="form-control rounded-0"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Login
                    </button>
                    <GoogleLogin
                        clientId="129008491915-j1iuiej17ft7odi947h0fubue98pdq0d.apps.googleusercontent.com"
                        buttonText="Login With Google"
                        onSuccess={responseSuccessGoogle}
                        onFailure={responseErrorGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </form>
                <p>Already Have an Account</p>
                <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Sign Up
                </Link>
            </div>
        </div>
    )
}

export default Login;