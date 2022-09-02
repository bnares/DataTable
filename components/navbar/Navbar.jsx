import React from 'react'
import "./navbar.scss";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';import { deepOrange, deepPurple } from '@mui/material/colors';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AssistWalkerIcon from '@mui/icons-material/AssistWalker';
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
  return (
    <div className='navbar'>
        
        
        <div className="leftNavbar">
            <div className="search">
                <input type = "text" placeholder='Search' />
                <SearchIcon className='icon'/>
            </div>
        </div>
        <div className="rightNavbar">
            <div className="item">
                <NotificationsIcon className='navbarIcon'/>
                <div className="counter">2</div>
            </div>
            <div className="item">
                <AssistWalkerIcon className='navbarIcon'/>
                <div className="counter">5</div>
            </div>
            
            <Avatar sx={{ bgcolor: deepOrange[500] }} className="avatar">N</Avatar>
        </div>
        
        
    </div>

  )
}

export default Navbar