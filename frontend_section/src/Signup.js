import React, {useState} from 'react'; 
import { Link, useNavigate } from 'react-router-dom';
import './Signup_login.css';
import { toast } from 'react-toastify';

function Signup() {

    const [id, idchange] = useState("");
    const [email, emailchange] = useState("");
    const [password, passwordchange] = useState("");

    const navigate = useNavigate();

    const isValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the value in ';
        if (id === null || id === "") {
            isproceed = false;
            errormessage += 'Username';
        }
        if (email === null || email === "") {
            isproceed = false;
            errormessage += ' Email';
        }
        if (password === null || password === "") {
            isproceed = false;
            errormessage += ' Password';
        }
        if(!isproceed) {
            toast.warning(errormessage);
        }else {
            if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/.test(password)) {

            }else {
                isproceed = false;
                toast.warning("Password shouls be atleast 8 characters including uppercase, lowercase and numbers")
            }
        }
        return isproceed;
    }    
    const handleSubmit =(e) => {
        
        e.preventDefault();
        let regobj = { id, email, password };
        if(isValidate()) {
            fetch("http://localhost:8000/user", {
                method:"POST",
                headers:{ "content-type":"application/json" },
                body:JSON.stringify(regobj)
            }).then((res) => {
                toast.success('Registeration Successfully');
                navigate('/login')
            }).catch((err)=>(
                toast.error('Failed :'+err.message)
            ));
        }
    }
    return (
        <div className='d-flex justify-content-center align-items-center vh-100 bg-color'>
            <div className='rounded container-1'>
                <div className="header">
                    <div className="text">Register</div>
                    <div className="underline"></div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='inputs'>
                        <label htmlFor='name'><strong>Username</strong><span className='errmsg'>*</span></label>
                        <input type='text' placeholder='Enter Username' name='name'
                        value={id} onChange={e=>idchange(e.target.value)} className='form-control' />
                    </div>
                    <div className='inputs'>
                        <label htmlFor='email'><strong>Email</strong><span className='errmsg'>*</span></label>
                        <input type='email' placeholder='Enter Email' name='email'
                        value={email} onChange={e=>emailchange(e.target.value)} className='form-control' />
                       
                    </div>
                    <div className='inputs'>
                        <label htmlFor='password'><strong>Password</strong><span className='errmsg'>*</span></label>
                        <input type='password' placeholder='Enter Password' name='password'
                        value={password} onChange={e=>passwordchange(e.target.value)} className='form-control' />
                        
                    </div>
                    <button type='submit' className='btn-success rounded submit'>Sign up</button>
                    <p className='forgot-password'>Already have an account ?</p>
                    <Link to="/login" className='border bg-light rounded login'>Login</Link>
                </form>
            </div>
        </div>
    )
}

export default Signup