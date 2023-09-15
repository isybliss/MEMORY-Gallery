import React from 'react'
import '../Home.css'
import { Link } from 'react-router-dom'
import logo from '../images/memory-logo.png'
const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <a className="navbar-brand" href="#">
        <img src={logo} style={{width:"50px",height:"50px"}}/>
      </a>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page" href="#">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
        </ul>
        <div>
            {/* <span className='ms-2'>Account</span> */}
            <span className='ms-2'>Sign-up</span>
            <span className='ms-3'>Login</span></div>
      </div>
    </div>
  </nav>
    <div className='home-header'></div>
   {/* <Link to={'/'} className='home-link'><img src={ logo } style={{width: '20px'}}/></Link>
   <Link style={{float:"right"}} to={'/login'} className='home-link'>Logout</Link> */}
    
</>
  
  )
}

export default Navbar