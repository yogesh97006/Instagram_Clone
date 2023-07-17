import React from 'react'
import './Suggestion.css'
import { Avatar } from '@mui/material'

function Suggestion() {
  return (
    <div className='suggestion'>
      <div className='suggestion__title'>Suggestion For You</div>
      <div className='suggestion__usernames'>
        <div className='suggestion__username'>
          <div className='user__left'>
              <div className='username__avatar'>
                <Avatar>D</Avatar>
              </div> 
              <div className='username__info'>
                <h5>Dhoni</h5>
                <h6>New To Instagram</h6>
              </div>
          </div>
          <div className='user__right'>
             <button className='user__btn'>Follow</button>
          </div>
        </div>
        <div className='suggestion__username'>
          <div className='user__left'>
              <div className='username__avatar'>
                <Avatar>D</Avatar>
              </div> 
              <div className='username__info'>
                <h5>Dhoni</h5>
                <h6>New To Instagram</h6>
              </div>
          </div>
          <div className='user__right'>
             <button className='user__btn'>Follow</button>
          </div>
        </div>
        <div className='suggestion__username'>
          <div className='user__left'>
              <div className='username__avatar'>
                <Avatar>D</Avatar>
              </div> 
              <div className='username__info'>
                <h5>Dhoni</h5>
                <h6>New To Instagram</h6>
              </div>
          </div>
          <div className='user__right'>
             <button className='user__btn'>Follow</button>
          </div>
        </div>
        <div className='suggestion__username'>
          <div className='user__left'>
              <div className='username__avatar'>
                <Avatar>D</Avatar>
              </div> 
              <div className='username__info'>
                <h5>Dhoni</h5>
                <h6>New To Instagram</h6>
              </div>
          </div>
          <div className='user__right'>
             <button className='user__btn'>Follow</button>
          </div>
        </div>
        <div className='suggestion__username'>
          <div className='user__left'>
              <div className='username__avatar'>
                <Avatar>D</Avatar>
              </div> 
              <div className='username__info'>
                <h5>Dhoni</h5>
                <h6>New To Instagram</h6>
              </div>
          </div>
          <div className='user__right'>
             <button className='user__btn'>Follow</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Suggestion