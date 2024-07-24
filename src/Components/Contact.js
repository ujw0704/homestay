import React from 'react';
import './Contact.css';
import kc7 from './darjeeling/kc7.jpg';

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const formData = {
      fullName: event.target.fullName.value,
      email: event.target.email.value,
    };

    console.log('Form Data:', formData);
  };

  return (
    <div className="contact-container">
      <div className="containers">
        <form className="form" action="#" onSubmit={handleSubmit}>
          <h2 className="title">Contact me</h2>
          <div className="form__group">
            <input type="text" id="fullName" className="form__input" placeholder="Full name..." required />
            <label className="form__label" htmlFor="fullName">Full Name</label>
          </div>
          <div className="form__group">
            <input type="email" id="email" className="form__input" placeholder="Your email..." required />
            <label className="form__label" htmlFor="email">Email</label>
          </div>
          <button type="submit" className="form__submit">Submit</button>
        </form>
        {/* <img src={kc7} alt="Darjeeling" className="contact-image" /> */}
      </div>
    </div>
  );
}

export default Contact;