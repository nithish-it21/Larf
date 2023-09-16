import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

function Signup() {
        const[name, setName] = useState()
        const[email, setEmail] = useState()
        const[password, setPassword] = useState()

        const handleSubmit = (e) => {
            e.preventDefault()
            axios.post('http://localhost:3001/register',{name, email, password})
            .then(result=>console.log(result))
            .catch(err=>console.log(err))
        }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="bg-success p-3 rounded" style={{ maxWidth: "400px" }}>
                <h2 className="text-center text-white">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="text-white">
                            <strong>Name</strong>
                        </label>
                        <input 
                            type="text"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="name"
                            className="form-control rounded-0"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="text-white">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)}

                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="text-white">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            className="form-control rounded-0"
                            autoComplete="off"
                            onChange={(e) => setPassword(e.target.value)}

                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Register
                    </button>
                    </form>
                    <p className="text-center text-white">Already Have an Account</p>
                    <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                        Login
                    </Link>
                
            </div>
        </div>
    );
}

export default Signup;
