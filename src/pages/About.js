import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>

      <div className="about-cards">
        {/* About Card */}
        <div className="about-card about-card-1">
          <div className="sticker top-left">🎨</div>
          <h2>Who Am I?</h2>
          <p>
            Hi, I'm Reyna Pineda, a passionate developer with expertise in JavaScript, React, and more. I love building scalable and efficient systems that power modern web applications. When I'm not coding, you can find me exploring new technologies or contributing to open-source projects.
          </p>
        </div>

        {/* Skills Card */}
        <div className="about-card about-card-2">
          <div className="sticker top-right">💻</div>
          <h2>Skills</h2>
          <div className="skills-grid">
            <div>
              <h3>Frontend</h3>
              <ul>
                <li>JavaScript/</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
            <div>
              <h3>Backend</h3>
              <ul>
                <li>Java</li>
                <li>C++</li>
                <li>Node.js</li>
                <li>Python</li>
                <li>Spring Boot</li>
              </ul>
            </div>
            <div>
              <h3>Databases</h3>
              <ul>
                <li>MySQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div>
              <h3>Tools</h3>
              <ul>
                <li>Git</li>
                <li>Docker</li>
                <li>AWS</li>
                <li>Postman</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Journey Card */}
        <div className="about-card about-card-3">
          <div className="sticker bottom-left">🌸</div>
          <h2>My Journey</h2>
          <p>
            From an early fascination with technology to earning my degree in Computer Science, my journey has been filled with hands-on experience, from building RESTful APIs to designing database schemas. I thrive on learning and constantly improving my craft.
          </p>
        </div>

        {/* Interests Card */}
        <div className="about-card about-card-4">
          <div className="sticker bottom-right">✨</div>
          <h2>Interests</h2>
          <p>
            When I'm not coding, you might find me hiking up scenic trails, playing video games, or experimenting in the kitchen with new recipes. A well-balanced life sparks creativity and keeps my problem-solving skills sharp!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
