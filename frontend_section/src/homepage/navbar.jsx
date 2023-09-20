import React, { useState } from 'react';
import '../Home.css';
import { Link } from 'react-router-dom';
import logo from '../images/memory-logo.png';
import $ from "jquery";
import {FaUser} from "react-icons/fa";

const CustomNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  // const token = sessionStorage.getItem('token');
  const valueString = sessionStorage?.getItem('token');

// Parse the JSON-like string into a JavaScript object
const currentUser = JSON?.parse(valueString);

// Extract the properties
const token = currentUser?.token;
const userId = currentUser?.user_id;
const username = currentUser?.username;
// Log the retrieved values to the console
console.log('Token:', token);
console.log('User ID:', userId);
console.log('Username:', username);
  function toggle(){
    $("#panel").slideToggle();
} 
  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/">
          
        <a className="navbar-brand" href="#">
         <img src={logo} style={{width:"50px",height:"50px"}}/>
       </a>
       </Link>
          <button className="navbar-toggler" type="button" 
          data-bs-toggle="collapse" data-bs-target="#navbarCollapse"  onClick={toggle}  aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="panel">
           
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/">
              
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              </Link>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              
            </ul>
          
            <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {currentUser !== null ? <Link to="/signup">
              <li className="nav-item me-3">
                <a className="nav-link fw-bold" aria-disabled="true">Hi, {username}</a>
              </li>
              </Link> : (
            <Link to="/signup">
              <li className="nav-item me-3">
                <a className="nav-link fw-bold" aria-disabled="true">Sign-up</a>
              </li>
              </Link>)}

              {currentUser !== null ?  <Link to="/login">
              <li className="nav-item me-3 d-flex align-items-center">
                <FaUser className='d-inline '/>
                <a className="nav-link active fw-bold " aria-current="page" href="#">Logout</a>
              </li>
              </Link> :(
              <Link to="/login">
              <li className="nav-item me-3 d-flex align-items-center">
                <FaUser className='d-inline '/>
                <a className="nav-link active fw-bold " aria-current="page" href="#">Login</a>
              </li>
              </Link>
              )}
            </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="home-header"></div>
      {/* <Link to={'/'} className='home-link'><img src={ logo } style={{width: '20px'}}/></Link>
      <Link style={{float:"right"}} to={'/login'} className='home-link'>Logout</Link> */}
    </>
  );
};


//   <>
  //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  //   <div className="container-fluid">
  //     <button
  //       className="navbar-toggler"
  //       type="button"
  //       data-bs-toggle="collapse"
  //       data-bs-target="#navbarTogglerDemo03"
  //       aria-controls="navbarTogglerDemo03"
  //       aria-expanded="false"
  //       aria-label="Toggle navigation"
  //     >
  //       <span className="navbar-toggler-icon" />
  //     </button>
  //     <a className="navbar-brand" href="#">
  //       <img src={logo} style={{width:"50px",height:"50px"}}/>
  //     </a>
  //     <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
  //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
  //         <li className="nav-item">
  //           <Link to="/" className="nav-link active" aria-current="page" href="#">
  //             Album
  //           </Link>
  //         </li>
  //         <li className="nav-item">
  //           <a className="nav-link" href="#">
  //             Memories
  //           </a>
  //         </li>
  //       </ul>
  //       <div>
  //           {/* <span className='ms-2'>Account</span> */}
  //           <span className='ms-2'>Sign-up</span>
  //           <span className='ms-3'>Login</span></div>
  //     </div>
  //   </div>
  // </nav>
export default CustomNavbar