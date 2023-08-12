import React from 'react'
import './landing.css'
import { Custom_button } from '../../components/button/button'
import img from '../../resources/BMI_landing_img.png'

export const Landing = () => {
  return (
    <div className='outer-container'>
      <div>
        <img className='img' alt='BMI_landing_img.png' src={img}></img>
      </div>
      <div>
      <p className='heading'>BMI</p>
      <p className='heading'>CALCULATOR</p>
      </div>
      <div btn-container>
        <Custom_button variant='outlined' name='LOGIN' size='large' />
        <Custom_button variant='contained' name='REGISTER' size='large' />
      </div>
    </div>
  )
}
