import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>
        Welcome to our website! We are a team of passionate individuals dedicated to providing
        high-quality content and services.
      </p>
      <p>
        Our mission is to equip newly graduated Full-Stack Web Development students with the knowledge they need to succeed in their interviews.
         Whether you are a visitor or a contributor, we value your presence and participation in our community.
      </p>
      <p>
        If you have any questions or suggestions, feel free to send us a <Link to="/contact">Message!</Link>{' '}
      </p>
    </div>
  );
};

export default About;
