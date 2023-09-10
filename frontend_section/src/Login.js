import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import Validation from './LoginValidation';
import './Signup_login.css';


function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
         setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    const handleSubmit =(event) => {
        event.preventDefault();
        const err = Validation(values);
        setErrors(err);
        if(err.email === "" && err.password === "") {
            axios.post('http://localhost:8081/login', values)
            .then(res => {
                if(res.data === "Success") {
                    navigate('/home')
                } else {
                    alert("No record existed"); 
                }
            })
            .catch(err => console.log(err));
        }
    }
    return (
        <div className='d-flex justify-content-center align-items-center bg-color vh-100'>
            <div className='rounded container-1'>
                <div className="header">
                    <div className="text">Sign In</div>
                    <div className="underline"></div>
                </div>
                <form action="" onSubmit={handleSubmit}>
                    <div className='inputs'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type='email' placeholder='Enter Email' name='email'
                        onChange={handleInput} className='form-control' />
                        {errors.email && <span className='text-danger'> {errors.email}</span>}
                    </div>
                    <div className='inputs'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type='password' placeholder='Enter Password' name='password'
                        onChange={handleInput} className='form-control' />
                        {errors.password && <span className='text-danger'> {errors.password}</span>}
                    </div>
                    <button type='submit' className='btn-success rounded submit'>Log in</button>
                    <p className='forgot-password'>Does not have an account yet?</p>
                    <Link to="/signup" className='border bg-light rounded login'>Create Account</Link>
                </form>
            </div>
        </div>
    )
}

export default Login