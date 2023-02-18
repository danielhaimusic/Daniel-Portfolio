import React from 'react';
import './about.css';
import ME from '../../assets/me2.jpg';
import { FaAward, FaUserGraduate } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <p>
            🚀 I am a versatile programmer with experience in a variety of technologies, 
            including Python, React.js, Node.js, C, C++, and more. I love building
            applications that make a difference in people's lives and am always looking
            for new opportunities to create innovative solutions. <br/>
            👨‍💻 I have gained practical experience through my work and personal projects. 
            Currently pursuing a Bachelor's degree in Computer Science through the Open 
            University to build a solid theoretical foundation for my skills. 
            With experience in various technologies, I am confident in my ability to 
            contribute to any project and bring value to any team. <br/>
            💙 I have strong interpersonal skills and fluent English, with a dedicated 
            work ethic and a passion for continuous improvement. I am always eager to 
            learn and grow professionally. <br/>
            💻 Let's build something amazing together!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
