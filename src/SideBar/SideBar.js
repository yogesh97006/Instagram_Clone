import React from 'react'
import './SideBar.css'
import logo from '../Images/logo.png'
import {Home,Search,Explore,Slideshow,Message,NotificationsNone,AddCircleOutline,Menu} from '@mui/icons-material';

function SideBar() {
  return (
    <div className='sidenav'>
      <img  className='logo__name' src={logo} alt='logo' />
      <div className='sidebar__buttons'>
        <button className='sidebar__button'>
        <Home />
        <span>Home</span>
        </button>
        <button className='sidebar__button'>
        <Search />
        <span>Search</span>
        </button>
        <button className='sidebar__button'>
        <Explore />
        <span>Explore</span>
        </button>
        <button className='sidebar__button'>
        <Slideshow/>
        <span>Reels</span>
        </button>
        <button className='sidebar__button'>
        <Message />
        <span>Message</span>
        </button>
        <button className='sidebar__button'>
        <NotificationsNone />
        <span>Notifications</span>
        </button>
        <button className='sidebar__button'>
        <AddCircleOutline />
        <span>Create</span>
        </button>
      </div>
      <div className='sidebar__morebutton'>
      <button className='sidebar__button'>
        <Menu />
        <span>Menu</span>
        </button>
      </div>
    </div>
  )
}

export default SideBar