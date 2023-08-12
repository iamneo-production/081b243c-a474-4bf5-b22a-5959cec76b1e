import React from 'react'
import 'landing.css'
import {button} from '../../components/button/button'

export const Landing = () => {
  return (
    <div>
      <div className='img-container'>
        <img src='BMI_landing_img.png' alt='BMI_landing_img'/>
      </div>
      <div>
        <h2 className='heading'>BMI</h2>
        <h1 className='heading'>CALCULATOR</h1>
      </div>
      <div>
        <button variant='outlined' name='LOGIN' size='large' />
      </div>
    </div>
  )
}
