import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './about.css';

const About = () => {
    return (
      <div className="about-container">
        <Header />
        <div className="about-content">
          <h1>About Us</h1>
          <p>
            Welcome to our Coding Interview Pro! We are a team of passionate individuals dedicated to providing
            high-quality content and services.
          </p>
          <p>
            Our mission is to equip newly graduated Full-Stack Web Development students with the knowledge they need to succeed in their interviews.
            Whether you are a visitor or a contributor, we value your presence and participation in our community.
          </p>
          <p>
            If you have any questions or suggestions, feel free to send us a <Link className='msgLink' to="/contact">Message!</Link>{' '}
          </p>
        </div>
      </div>
    );
  };
  
  export default About;