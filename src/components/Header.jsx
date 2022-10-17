import React from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom'

import TitleLogo from '../data/header-media/title.svg'

import MenuIcon from '@mui/icons-material/Menu';

const list = [
    {
        title: 'обо мне',
        id: 'about',
        link: ''
    },
    {
        title: 'работы',
        id: 'artworks',
        link: 'artworks'
    },
    {
        title: 'как приобрести',
        id: 'delivery',
        link: 'delivery'
    },
    {
        title: 'контакты',
        id: 'contacts',
        link: 'contacts'
    }
]

const Header = ({ activeLink, setActiveLink }) => {

    const [openMenu, setOpenMenu] = useState(false)

    return (
        <div className='header'>
            <div className='container'>
                <div className='header-content'>
                    <div className='header-logo'>
                        <img src={TitleLogo} alt='Natasha Vilder' />
                    </div>
                    <div className='header navbar'>
                        {
                            list.map((item) => (
                                <Link
                                    to={`/${item.link}`}
                                    className={item.id === activeLink ? 'navbar-item active' : 'navbar-item'}
                                    onClick={() => setActiveLink(item.id)}
                                >
                                    {item.title}
                                </Link>
                            ))
                        }
                    </div>
                    <div className='header-menu'>
                        <MenuIcon fontSize='large' onClick={() => setOpenMenu(true)} />
                        {
                            openMenu ?
                                <div className='dropdown-menu picture-modal' onClick={() => setOpenMenu(false)}>
                                    <div className='dropdown-menu'>
                                        {
                                            list.map((item) => (
                                                <Link
                                                    to={`/${item.link}`}
                                                    className={item.id === activeLink ? 'navbar-item active' : 'navbar-item'}
                                                    onClick={() => setActiveLink(item.id)}
                                                >
                                                    {item.title}
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </div> :
                                ''
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header