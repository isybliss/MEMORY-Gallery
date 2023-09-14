import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white">
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}
        {/* Right */}
        <div>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-google" />
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-github" />
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
      >
        © 2020 Copyright: 
        <a className="text-white text-decoration-none" href="https://mdbootstrap.com/">
         MemoryGallery.com
        </a>
      </div>
      {/* Copyright */}
  </footer>
  )
}

export default Footer