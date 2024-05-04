import React from 'react'
import './socialmedia.css'

//Material Icons
import Email from '@mui/icons-material/Email';
import { Phone } from '@mui/icons-material';


function SocialMedia() {
    return (
        <div className='socialmedia'>
            <div className='socialmedia-icon' ><a href='mailto:stanleyidagbonya@gmail.com' ><Email sx={{ color: '#fff' }} fontSize='large' /></a></div>

            <div className='socialmedia-icon' ><a href='tel:+447920063898' ><Phone sx={{ color: '#fff' }} fontSize='large' /></a></div>
        </div>
    )
}

export default SocialMedia
