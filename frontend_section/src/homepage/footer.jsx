import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
  //   <footer className="bg-dark text-center text-white">
  //     {/* Section: Social media */}
  //     <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
  //       {/* Left */}
  //       <div className="me-5 d-none d-lg-block">
  //         <span>Get connected with us on social networks:</span>
  //       </div>
  //       {/* Left */}
  //       {/* Right */}
  //       <div>
  //         <a href="" className="me-4 text-reset">
  //           <FaFacebook />
  //         </a>
  //         <a href="" className="me-4 text-reset">
  //           <FaTwitter />
  //         </a>
      
  //         <a href="" className="me-4 text-reset">
  //           <FaInstagram />
  //         </a>
  //         <a href="" className="me-4 text-reset">
  //           <FaLinkedin />
  //         </a>
  //         <a href="" className="me-4 text-reset">
  //           <FaGithub />
  //         </a>
  //       </div>
  //       {/* Right */}
  //     </section>
  //     {/* Section: Social media */}
  //     <div
  //       className="text-center p-3"
  //       style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
  //     >
  //       © 2023 Copyright: 
  //       <a className="text-white text-decoration-none m-1" href="https://mdbootstrap.com/">
  //        MemoryGallery.com
  //       </a>
  //     </div>
  //     {/* Copyright */}
  // </footer>
  <div className="container-fluid mt-2" style={{paddingLeft:"0px", paddingRight:"0px"}}>
  {/* Footer */}
  <footer className="text-center text-lg-start text-dark" style={{backgroundColor: '#f0f1f5'}}>
    {/* Section: Social media */}
    <div className="d-flex justify-content-between container-fluid p-2" style={{backgroundColor: '#00a6ff'}}>
      {/* Left */}
      <div className="me-5 text-white">
        <span>Get connected with us on social networks:</span>
      </div>
      {/* Left */}
      {/* Right */}
      <div>
        <a href className="text-white me-4">
          <i className="fab fa-facebook-f" />
        </a>
        <a href className="text-white me-4">
          <i className="fab fa-twitter" />
        </a>
        <a href className="text-white me-4">
          <i className="fab fa-google" />
        </a>
        <a href className="text-white me-4">
          <i className="fab fa-instagram" />
        </a>
        <a href className="text-white me-4">
          <i className="fab fa-linkedin" />
        </a>
        <a href className="text-white me-4">
          <i className="fab fa-github" />
        </a>
      </div>
      {/* Right */}
    </div>
    {/* Section: Social media */}
    {/* Section: Links  */}
    <section className>
      <div className="container text-center text-md-start mt-5 text-dark">
        {/* Grid row */}
        <div className="row mt-3">
          {/* Grid column */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            {/* Content */}
            <h6 className="text-uppercase fw-bold">Memory Gallery</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}} />
            <p>
              A Digital Journet Through Memories
            </p>
            <p>
              An application to create, store, share personal memories through images and captions.
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold">Products</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}} />
            <p>
              <a href="#!" className="text-dark">MDBootstrap</a>
            </p>
            <p>
              <a href="#!" className="text-dark">MDWordPress</a>
            </p>
            <p>
              <a href="#!" className="text-dark">BrandFlow</a>
            </p>
            <p>
              <a href="#!" className="text-dark">Bootstrap Angular</a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold">Useful links</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}} />
            <p>
              <a href="#!" className="text-dark">Your Account</a>
            </p>
            <p>
              <a href="#!" className="text-dark">Become an Affiliate</a>
            </p>
            <p>
              <a href="#!" className="text-dark">Shipping Rates</a>
            </p>
            <p>
              <a href="#!" className="text-dark">Help</a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}} />
            <p><i className="fas fa-home mr-3" /> Isolo, Lagos, Nig</p>
            <p><i className="fas fa-envelope mr-3" /> isybliss@gmail.com</p>
            <p><i className="fas fa-phone mr-3" /> + 2348168102759</p>
            <p><i className="fas fa-print mr-3" /> + 01 234 567 89</p>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
    </section>
    {/* Section: Links  */}
    {/* Copyright */}
    <div className="text-center  p-2" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
      © 2020 Copyright:
      <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>
    {/* Copyright */}
  </footer>
  {/* Footer */}
</div>
  )
}

export default Footer