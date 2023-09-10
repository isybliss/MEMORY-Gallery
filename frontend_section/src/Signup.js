import React, {useState} from 'react'; 
import { Link, useNavigate } from 'react-router-dom'
import Validation from './SignupValidation';
import axios from 'axios';
import './Signup_login.css';

function Signup() {

    const [values, setValues] = useState({
        name: '',
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
        if(err.name === "" && err.email === "" && err.password === "") {
            axios.post('http://localhost:8081/signup', values)
            .then(res => {
                navigate('/');
            })
            .catch(err => console.log(err));
        }
    } 

    return (
        <div className='d-flex justify-content-center align-items-center vh-100 bg-color'>
            <div className='rounded container-1'>
                <div className="header">
                    <div className="text">Register</div>
                    <div className="underline"></div>
                </div>
                <form action="" onSubmit={handleSubmit}>
                    <div className='inputs'>
                        <label htmlFor='name'><strong>Username</strong></label>
                        <input type='text' placeholder='Enter Username' name='name'
                        onChange={handleInput} className='form-control' />
                        {errors.name && <span className='text-danger'> {errors.name}</span>}
                    </div>
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
                    <button type='submit' className='btn-success rounded submit'>Sign up</button>
                    <p className='forgot-password'>Already have an account ?</p>
                    <Link to="/" className='border bg-light rounded login'>Login</Link>
                </form>
            </div>
        </div>
    )
}

export default Signup