import React from 'react';
import './about.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h2>About Ideabox</h2>
        <p>
          Ideabox is a cutting-edge platform designed for creative thinkers, innovators, and entrepreneurs to securely store and manage their unique ideas. Our mission is to provide a safe and collaborative environment where ideas can flourish and grow. We want to empower individuals to turn their ideas into reality. We believe that every idea has the potential to change the world, and our platform is dedicated to helping you nurture and develop those ideas.
        </p>


        <h3>Features and Benefits</h3>
        <ul>
          <li><strong>Secure Storage:</strong> Your ideas are stored securely, ensuring privacy and confidentiality.</li>
          <li><strong>Easy Management:</strong> Organize and manage your ideas with our user-friendly interface.</li>
        </ul>   

        <h3>Security and Privacy</h3>
        <p>
          We take your security and privacy seriously. Our platform uses advanced encryption techniques to ensure that your ideas are protected at all times. You have complete control over who can view and collaborate on your ideas.
        </p>

        <h3>Looking to the Future</h3>
        <p>
          We are constantly working on new features and improvements to make Ideabox the best platform for idea management. Our vision is to create a global community where ideas can be shared, developed, and brought to life.
        </p>
      </div>
    </section>
  );
};

export default About;
