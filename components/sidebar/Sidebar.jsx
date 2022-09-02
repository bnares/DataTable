import React from 'react'
import "./sidebar.scss";
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PeopleIcon from '@mui/icons-material/People';

function Sidebar() {
  return (
    <div className='sidebar'>
        
        <div className="sidebarContainer">
            <ul>
                <p className="title">Main</p>
                <li className='link'>
                    <HomeIcon className='icon'/><span>Home</span> 
                </li>
                <p className="title">Lists</p>
                <li className='link'>
                    <AccountBalanceWalletIcon className='icon'/><span>Wage</span> 
                </li>
                <li className='link'>
                    <PeopleIcon className='icon'/> <span>Employees</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar