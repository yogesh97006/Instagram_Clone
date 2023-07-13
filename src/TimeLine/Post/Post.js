import React from 'react'
import { MoreHoriz } from '@mui/icons-material'
import Avatar from '@mui/material/Avatar';
import { FavoriteBorderOutlined,ChatOutlined,SendOutlined,BookmarkBorder } from '@mui/icons-material';
import './Post.css'

function Post() {
  return (
    <div className='post'>
        <div className='post__header'>
           <div className='post__headerAuther'>
           <Avatar>H</Avatar>
            Virat Kohil • <span> 10h </span>
           </div>
           <MoreHoriz />
        </div>
        <div className='post__image'>
          <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' alt='postimage' />
        </div>
        <div className='post__footer'>
            <div className='post__footericons'>
                <div className='post__iconmain'>
            <FavoriteBorderOutlined className='posticon'/>
          <ChatOutlined className='posticon'/>
          <SendOutlined className='posticon'/>
            </div>
            <div className='post__iconsave'>
            <BookmarkBorder className='posticon'/>
            </div>
            </div>
        </div>
       Like By 21 People.
    </div>
  )
}

export default Post