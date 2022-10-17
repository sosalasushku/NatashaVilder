import React from 'react'

import Instagram from '../data/header-media/instagram.gif'
import InstagramHover from '../data/header-media/instagram_hover.gif'
import Telegram from '../data/header-media/telegram.gif'
import TelegramHover from '../data/header-media/telegram_hover.gif'
import Youtube from '../data/header-media/youtube.gif'
import YoutubeHover from '../data/header-media/youtube_hover.gif'
import Mail from '../data/header-media/mail.gif'
import MailHover from '../data/header-media/mail_hover.gif'

import { IconButton } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Contacts = () => {

    async function copyTextToClipboard(text) {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(text);
        } else {
            return document.execCommand('copy', true, text);
        }
    }

    return (
        <div className='page'>
            <div className='container'>
                <div className='page-content'>
                    <div
                        className='contacts section mail'
                        onClick={() => { copyTextToClipboard('natashavilder@gmail.com') }}
                        title='Нажмите, чтобы скопировать почту'
                    >
                        <div className='contacts section-icon'>
                            <MailIcon sx={{ fontSize: 40 }} />
                        </div>
                        <span>natashavilder@gmail.com</span>
                    </div>

                    <a className='contacts section' href='https://www.instagram.com/natashavilder/' target='_blank'>
                        <div className='contacts section-icon'>
                            <InstagramIcon sx={{ fontSize: 40 }} />
                        </div>
                        <span>мой инстаграм</span>
                    </a>

                    <a className='contacts section' href='https://t.me/celuleum' target='_blank'>
                        <div className='contacts section-icon'>
                            <TelegramIcon sx={{ fontSize: 40 }} />
                        </div>
                        <span>творческий блог художника</span>
                    </a>

                    <a className='contacts section' href='https://www.youtube.com/channel/UCEx05pPX71EaAh3KIrqxHOA' target='_blank'>
                        <div className='contacts section-icon'>
                            <YouTubeIcon sx={{ fontSize: 40 }} />
                        </div>
                        <span>обзоры художественных материалов</span>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Contacts
