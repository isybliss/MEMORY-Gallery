import React, {useEffect, useState} from 'react'; 
import { Link, useNavigate } from 'react-router-dom';
import './Signup_login.css';
import { toast } from 'react-toastify';

function  Login() {
    const [username, usernameupdate] = useState("");
    const [password, passwordupdate] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        sessionStorage.clear();
    }, []);

    const proceedLogin = (e) => {
        e.preventDefault();
        if(validate()) {
            //console.log("proceed")
            fetch("http://localhost:8000/user/"+username).then((res) =>{
                return res.json();
            }).then((resp)=>{
                console.log(resp);
                if(Object.keys(resp).length === 0) {
                    toast.error("Please enter valid username");
                } else {
                    if (resp.password === password) {
                        toast.success('Success');
                        sessionStorage.setItem('username',username)
                        navigate('/')
                    }else {
                        toast.error("Please enter valid credentials")
                    }
                }
            }).catch((err)=>{
                toast.error("Login failed due to :"+err.message)
            });
        }
    }

    const validate = () => {
        let result = true;
        if(username === "" || username === null){
            result = false;
            toast.warning("Please enter valid Username")
        }
        if(password === "" || password === null){
            result = false;
            toast.warning("Please enter correct password")
        }
        return result;
    }

    return (
        <div className='d-flex justify-content-center align-items-center vh-100 bg-color'>
            <div className='rounded container-1'>
                <div className="header">
                    <div className="text">Sign In</div>
                    <div className="underline"></div>
                </div>
                <form onSubmit={proceedLogin}>
                    <div className='inputs'>
                        <label htmlFor='name'><strong>Username</strong><span className='errmsg'>*</span></label>
                        <input type='text' placeholder='Enter Username' name='name'
                        value={username} onChange={e=>usernameupdate(e.target.value)} className='form-control' />
                    </div>
                    
                    <div className='inputs'>
                        <label htmlFor='password'><strong>Password</strong><span className='errmsg'>*</span></label>
                        <input type='password' placeholder='Enter Password' name='password'
                        value={password} onChange={e=>passwordupdate(e.target.value)} className='form-control' />
                        
                    </div>
                    <button type='submit' className='btn-success rounded submit'>Login</button>
                    <p className='forgot-password'>Don't have an account ?</p>
                    <Link to="/signup" className='border bg-light rounded login'>Create Account</Link>
                </form>
            </div>
        </div>
    )
}

export default Login