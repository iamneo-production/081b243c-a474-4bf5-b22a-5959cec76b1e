import React from 'react'
import './gender.css'
import img from '../../resources/male.png'
import img1 from '../../resources/female.png'



export const Gender = () => {
  return (
    <div>
      <div>
        <h2 className='heading'>Select your gender</h2>
        <div className='card-male'>
        <div>
        <img className='img' alt='male' src={img}></img>
        </div>
        <br></br>
        <div>
        <center><a href="./calculator" className="btn">Male</a></center>
        </div>
        </div>

        <div className='card-female'>
        <div>
        <img className='img' alt='female' src={img1}></img>
        </div>       
        <br></br>
        <div>
        <center><a href="./calculator" className="btn btn-primary">Female</a></center>
        </div>
        </div>
      </div>
    </div>
  )
}
