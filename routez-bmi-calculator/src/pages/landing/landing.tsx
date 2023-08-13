import React from 'react'
import './landing.css'
import { CustomButton } from '../../components/button/button'
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
        <CustomButton variant='outlined' name='LOGIN' size='large' />
        <CustomButton variant='contained' name='REGISTER' size='large' />
      </div>
    </div>
  )
}
