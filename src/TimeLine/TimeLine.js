import React from 'react'
import './TimeLine.css'
import Suggestion from './Suggestion'
import Post from './Post/Post'

function TimeLine() {
  return (
    <div className='timeline'>
      <div className='timeline__left'>
         <div className=''>
          <Post />
         </div>
      </div>
      <div className='timeline__right'>  
       <Suggestion/>
      </div>
    </div>
  )
}

export default TimeLine