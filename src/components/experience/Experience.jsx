import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id="experience" style={{ marginTop: '5rem' }}>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Hard Skill</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icons' />
              <h4>React</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icons' />
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icons' />
              <h4>Node.JS</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icons' />
              <h4>Python</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icons' />
              <h4>C</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icons' />
              <h4>MongoDB</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icons' />
              <h4>Micro-Services</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icons' />
              <h4>K8S</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icons' />
              <h4>Azure</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icons' />
              <h4>Azure DevOps</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Soft Skill</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icons' />
              <h4>Proactive Troubleshooter</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icons' />
              <h4>Communication</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icons' />
              <h4>Adaptability</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icons' />
              <h4>Multi-tasking</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icons' />
              <h4>Creativity</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icons' />
              <h4>Fluent English speaker</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icons'/>
              <h4>Time management</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
