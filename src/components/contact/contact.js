import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="contact-wrapper" id="contact">
        <h1>Contact</h1>
        <div className='ex-links'>
        <p>jdavid.stevens@gmail.com</p>
        <a href="https://github.com/JDavidStevens">https://github.com/JDavidStevens</a>
        <a href="https://www.linkedin.com/in/jdavidstevens/">/in/jdavidstevens</a>
        </div>
        <a className='return' href="#home">Back to Top</a>
      </div>
    );
  }
}

export default Contact;