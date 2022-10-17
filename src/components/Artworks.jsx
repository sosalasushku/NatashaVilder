import React from 'react'

import { ImageList } from '@mui/material'

import useWindowDimensions from './getWindowDimensions'
import Picture from './Picture'

window.onscroll = function () { myFunction() };

function myFunction() {
  if (document.documentElement.scrollTop > 70) {
    document.getElementById("sticky").style.boxShadow = "0 0 .5rem #000";
  } else {
    document.getElementById("sticky").style.boxShadow = "none";
  }
}

const list = [
  {
    title: 'акварель',
    id: 'watercolor'
  },
  {
    title: 'пастель',
    id: 'pastel'
  },
  {
    title: 'гуашь',
    id: 'gouache'
  }
]

const Artworks = ({ tech, setTech, pictures }) => {

  const { width } = useWindowDimensions()

  return (
    <div className='artworks'>
      <div className='artworks-header' id='sticky'>
        <div className='container'>
          <div className='artworks navbar'>
            {list.map((item) => (
              <div className={item.id === tech ? 'navbar-item active' : 'navbar-item'}
                onClick={() => setTech(item.id)}>{item.title}</div>
            ))}
          </div>

        </div>
      </div>

      <div className='page artworks'>
        <div className='container'>
          <ImageList
            variant='masonry'
            cols={width > 768 ? 3 : width > 400 ? 2 : 1}
            gap={width > 880 ? 48 : 28}
          >
            {pictures.filter(pic => pic.technique.includes(tech)).map(pic => <Picture pic={pic} />)}
          </ImageList>
        </div>
      </div>

    </div>
  )
}

export default Artworks
