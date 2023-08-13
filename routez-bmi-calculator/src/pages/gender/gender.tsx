import React from 'react'
import './gender.css'

export const Gender = () => {
  return (
    <div>
      <div>
        <h2 className='heading'>Select your gender</h2>
        <div className='card-male'>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg" alt="image"/>
        <br></br>
        <button>Male</button>
        </div>

        <div className='card-female'>
        <img src="https://cdn.vectorstock.com/i/preview-1x/14/18/default-female-avatar-profile-picture-icon-grey-vector-34511418.jpg" alt="image"/>
        <br></br>
        <a href="#" className="btn btn-primary">Female</a>
        </div>
    </div>
    </div>
  )
}
