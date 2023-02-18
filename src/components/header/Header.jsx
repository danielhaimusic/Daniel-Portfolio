import React from 'react';
import CTA from './CTA';
import './header.css';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';
import Typewriter from 'typewriter-effect';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>
          <Typewriter
            options={{
              strings: [`Hello I'm`],
              autoStart: true,
              loop: true,
              pauseFor: 5000,
            }}
          />
        </h5>
        <h1>
          <Typewriter
            options={{
              strings: [`Daniel Haim`],
              autoStart: true,
              loop: true,
              delay: 300,
              pauseFor: 4500,
            }}
          />
        </h1>
        <h5 className="text-light">
          <Typewriter
            options={{
              strings: [`Program Developer`],
              autoStart: true,
              loop: true,
              delay: 300,
              pauseFor: 2500,
            }}
          />
        </h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
