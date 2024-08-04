import React from 'react';
 import "./Footer.css" 
function Footer() {
  return (
    <div className='footer-wrapper'>
      <div className='footer-section'>
        <div className='footer-subscribe'>
          <h2>
            Subscribe to the latest updates and notifications of the Home stay
          </h2>
          <div className='input-box'>
            <input type='email' placeholder='Enter your email' />
            <button  className ="buttons"type="submit">Subscribe</button>
          </div>
        </div>
        <nav className='footer-nav'>
          <div>
            <h3>Home-Stay</h3>
            <ul>
              <li>About</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>
        </nav>
        <div className='footer-copyright'>
          <p>&copy; 2024  Inc. All rights reserved</p>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
        </div>
        <div className='social'>
          <i>Facebook</i>
          
          <i>Whatsapp</i>
          <i>instagram</i>
        </div>
      </div>
    </div>
  );
}

export default Footer;
