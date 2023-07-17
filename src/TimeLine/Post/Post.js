import React from 'react'
import { MoreHoriz } from '@mui/icons-material'
import Avatar from '@mui/material/Avatar';
import { FavoriteBorderOutlined,ChatOutlined,SendOutlined,BookmarkBorder } from '@mui/icons-material';
import './Post.css'

function Post({Name,Img,Timeline,Likes}) {
  return (
    <div className='post'>
        <div className='post__header'>
           <div className='post__headerAuther'>
           <Avatar>H</Avatar>
            {Name}  • <span>  {Timeline} </span>
           </div>
           <MoreHoriz />
        </div>
        <div className='post__image'>
          <img  src={Img} alt='postimage' />
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
       Like By {Likes} People.
    </div>
  )
}

export default Post