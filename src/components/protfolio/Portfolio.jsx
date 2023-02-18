import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpeg'
import IMG4 from '../../assets/portfolio4.png'
import IMG6 from '../../assets/portfolio5.png'
import IMG5 from '../../assets/portfolio6.png'

const data = [{
  id: 1,
  image: IMG1,
  title: 'Apple-Support-Desk',
  github: 'https://github.com/Alonlevy5/support-desk',
  demo: 'https://applesupportdeskapp.onrender.com/',
  flag: true
},
{
  id: 2,
  image: IMG2,
  title: 'Github-Finder',
  github: 'https://github.com/Alonlevy5/github-finder',
  demo: 'need to be deployed',
  flag: false
},
{
  id: 3,
  image: IMG3,
  title: 'WizeWallet-Backend',
  github: 'https://github.com/Alonlevy5/WizeWallet-Backend',
  demo: 'need to be deployed',
  flag: false
},
{
  id: 4,
  image: IMG4,
  title: 'Au10tix-Support-Monitors',
  github: 'https://github.com/Alonlevy5/',
  demo: 'need to be deployed',
  flag: false
},
{
  id: 5,
  image: IMG5,
  title: 'Muse-Box-Site',
  github: 'https://github.com/Alonlevy5/Muse-box-site',
  demo: 'need to be deployed',
  flag: false
},
{
  id: 6,
  image: IMG6,
  title: 'Flight-Gear-Project',
  github: 'https://github.com/Alonlevy5/Flight-gear-project',
  demo: 'need to be deployed',
  flag: false
}
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(item => {
          return (
            <article key={item.id} className='portfolio__item'>
              <div className="protfolio__item-image">
                <img src={item.image} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <div className="portfolio__item-cta">
                <a href={item.github} className='btn' target='_blank'>Github</a>
                {item.flag && (
                <a href={item.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                )}</div>
            </article>)
        })}
      </div>
    </section>
  )
}

export default Portfolio