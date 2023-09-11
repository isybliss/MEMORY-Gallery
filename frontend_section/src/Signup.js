import React, {useState} from 'react'; 
import { Link, useNavigate } from 'react-router-dom'
import Validation from './SignupValidation';
import './Signup_login.css';
import { toast } from 'react-toastify';

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
            fetch("http://localhost:8000/user", {
                method: "POST",
                headers:{ "content-type" : "application/json" },
                body:JSON.stringify(values)
            }).then((res) => {
                toast.success("Registered Successfully");
                navigate('/');
            })
            .catch((err) => (
                toast.error("Failed :"+err.message)
            ));
        }
    } 

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-50 container'>
                <div className="header">
                    <div className="text">Sign In</div>
                    <div className="underline"></div>
                </div>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='name'><strong>Username</strong></label>
                        <input type='text' placeholder='Enter Username' name='name'
                        onChange={handleInput} className='form-control' />
                        {errors.name && <span className='text-danger'> {errors.name}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type='email' placeholder='Enter Email' name='email'
                        onChange={handleInput} className='form-control' />
                        {errors.email && <span className='text-danger'> {errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type='password' placeholder='Enter Password' name='password'
                        onChange={handleInput} className='form-control' />
                        {errors.password && <span className='text-danger'> {errors.password}</span>}
                    </div>
                    <button type='submit' className='btn-success rounded submit'>Sign up</button>
                    <p className='forgot-password'>Already have an account</p>
                    <Link to="/" className='btn btn-default border w-100 bg-light rounded text-decoration-none'>Login</Link>
                </form>
            </div>
        </div>
    )
}

export default Signup