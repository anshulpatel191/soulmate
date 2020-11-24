import React from 'react'
import './Header.css'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';


function Header() {
    return (
        <div className='header'>
            
            <IconButton>
            <PersonOutlineIcon fontSize='large' className="Header_icon"/>
            </IconButton>
            <img
            className='Header_logo'
            src='https://1000logos.net/wp-content/uploads/2020/11/Wine-Logo.png'
            alt=''
            />
            <IconButton>
            <ForumIcon fontSize='large' className="Header_icon"/>
            </IconButton>
        </div>
    )
}

export default Header
