import React from 'react'

import Portrait from '../data/portrait.png'

const About = () => {

  return (
    <div className='page'>
      <div className='container'>
        <div className='about page-content'>
          {/* <div className='about-media'> */}
          <img src={Portrait} alt='Self-portrait' />
          {/* </div> */}
          <div className='about-text'>
            <p>
              Я — Наташа Вильдер, художник-график и иллюстратор из Санкт-Петербурга.
            </p>
            <p>
              Я работаю с традиционными материалами: масляная пастель, гуашь, тушь,
              карандаши, и др., люблю смешивать техники. Но самая моя большая страсть — акварель.
              В своих сюжетах я стараюсь передать неочевидную будничную красоту: иногда это пасторали,
              а иногда работы в духе эстетики ебеней.
            </p>
            <p>
              Являюсь автором каналов на <a href='https://www.youtube.com/channel/UCEx05pPX71EaAh3KIrqxHOA' target='_blank' className='about page-content-link'>ютубе</a> и
              в <a href='https://t.me/celuleum' target='_blank' className='about page-content-link'>телеграме</a>, посвящённых художественным материалам.
            </p>
          </div>
        </div>
      </div>
    </div >
  )
}

export default About
