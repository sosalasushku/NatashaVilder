import { useState } from 'react'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Artworks from './components/Artworks'
import Delivery from './components/Delivery'
import Contacts from './components/Contacts'

import pictures from './data/pictures'


function App() {

  const [tech, setTech] = useState('watercolor')
  const [activeLink, setActiveLink] = useState('about')

  return (
    <>
      <BrowserRouter>
        <Header
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        />
        <Routes>
          {/* <Route exact path='/' element={<Navigate to="/about" />} /> */}
          <Route path='/' element={<About />} />
          <Route path='/artworks' element={<Artworks
            tech={tech}
            setTech={setTech}
            pictures={pictures}
          />} />
          <Route path='/delivery' element={<Delivery />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
