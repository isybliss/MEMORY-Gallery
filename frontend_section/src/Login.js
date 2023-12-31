import React, {useEffect, useState} from 'react'; 
import { Link, useNavigate } from 'react-router-dom';
import './Signup_login.css';
import { toast } from 'react-toastify';
import axios from "axios";
import Toaster from './Alert/sweetAlert';
import { FaEye } from 'react-icons/fa6';
import { FaEyeSlash } from 'react-icons/fa6';

function  Login() {
    const [username, usernameupdate] = useState("");
    const [password, passwordupdate] = useState("");
    const [passwordtype, setPasswordtype] = useState("password")

    const navigate = useNavigate();

    const userData = {
        username,
        password,
      };
  
    const proceedLogin = async (e) => {
        e.preventDefault();
            debugger;
            try{
                             let url = "https://domvev.pythonanywhere.com/login/";
            // let url = "http://127.0.0.1:8000/login/";
           const response= await  axios.post(url, userData)
           if(response.status === 201 || response.status === 200){
            let token= JSON.stringify(response.data);
                if (token !== null) {
                 sessionStorage.setItem("token", token);
                 Toaster().successAlert("You've logged In Successfully", "/")
             }
           }else{
            Toaster().errorAlert("Invalid Password or Email.")
           }
        }catch(error){
            console.error(error);
            Toaster().errorAlert("Invalid Password or Email.")
        }
            //   .then((res) =>{
            //     debugger;
            //     console.log(res)
            //     else{
            //         
            //     }
               
            // })
            // .catch((err) => {
            //     toast.error("Login failed due to: " + err.message);
            // });
        

        
        // debugger;
        // e.preventDefault();
        // let url ="http://127.0.0.1:8000/login/";
        // axios.post(url, userData).then((res) => {
        //     console.log(res.data);  // Access response data with res.data
        //     let token = res.data;  // Use res.data to access the response data
        //     console.log(token);
        //     if (token !== null) {
        //       sessionStorage.setItem("token", token);
        //     }
        //   }).catch((err) => {
        //     console.log(err.message)
        //     console.log(err, "hey")
        //     toast.error("Login failed due to: " + err.message);
        //   });
    }
    const toggle = () => {
        if (passwordtype === "password") {
            setPasswordtype("text");
          return;
        }
        setPasswordtype("password");
      };

    useEffect(() => {
        sessionStorage.clear();
    }, []);

    // const validate = () => {
    //     let result = true;
    //     if(username === "" || username === null){
    //         result = false;
    //         toast.warning("Please enter valid Username")
    //     }
    //     if(password === "" || password === null){
    //         result = false;
    //         toast.warning("Please enter correct password")
    //     }
    //     return result;
    // }

    return (
        <div className='d-flex justify-content-center align-items-center vh-100 bg-color'>
            <div className='rounded container-1'>
                <div className="header">
                    <div className="text">Sign In</div>
                    <div className="underline"></div>
                </div>
                <form onSubmit={proceedLogin}>
                    <div className='inputs'>
                        <label htmlFor='username'><strong>Username</strong><span className='errmsg'>*</span></label>
                        <input type='text' required placeholder='Enter Username' name='name'
                        value={username} onChange={e=>usernameupdate(e.target.value)} className='form-control' />
                    </div>
                    
                    <div className='inputs position-relative'>
                        <label htmlFor='password'><strong>Password</strong><span className='errmsg'>*</span></label>
                        <input type={passwordtype} id="password" required placeholder='Enter Password' name='password'
                        value={password} onChange={e=>passwordupdate(e.target.value)} className='form-control' />
                        {passwordtype === "password" ?  <FaEye className='position-absolute' onClick={toggle} style={{top:"38px", right:"20px"}}/> :
                          <FaEyeSlash className='position-absolute' style={{top:"38px", right:"20px"}} onClick={toggle}/>}
                       
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