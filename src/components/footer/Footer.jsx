import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a className='footer__logo' href="#">Daniel Haim</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a target="_blank" href="https://www.facebook.com/danielhaim95"><FaFacebookF /></a>
        <a target="_blank" href="https://github.com/danielhaimusic"><AiFillGithub /></a>
        <a target="_blank" href="https://www.linkedin.com/in/daniel-haim/"><BsLinkedin /></a>
      </div>

    </footer>
  )
}

export default Footer