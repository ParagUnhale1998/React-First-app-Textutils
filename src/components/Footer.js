import React from 'react';

const Footer = () => {
  return (
    <footer className="footer text-white pt-5 pb-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
<p>This website is manipulate the text from normal to Awesome</p>          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled ">
              <li><a className="text-white" href="/">Home</a></li>
              <li><a className="text-white" href="/about">About</a></li>
              <li><a className="text-white" href="/services">Services</a></li>
              <li><a className="text-white" href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li><i className="fa fa-map-marker"></i> 123 Main St, Anytown USA</li>
              <li><i className="fa fa-phone"></i> (555) 555-5555</li>
              <li><i className="fa fa-envelope"></i> info@example.com</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <hr className="bg-light"/>
            <p className="text-center">Copyright &copy; {new Date().getFullYear()} 
            &nbsp;All rights reserved by ParagUnhale.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
