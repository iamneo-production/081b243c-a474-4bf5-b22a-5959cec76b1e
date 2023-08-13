import React from 'react'
import './landing.css'
import { CustomButton } from '../../components/button/button'
import img from '../../resources/BMI_landing_img.png'
import { useNavigate } from 'react-router-dom'

export const Landing = () => {
  const navigate = useNavigate()
  return (
    <div className='wrapper'>
      <div>
        <img className='img' alt='BMI_landing_img.png' src={img}></img>
      </div>
      <div>
        <p className='heading'>BMI</p>
        <p className='heading'>CALCULATOR</p>
      </div>
      <div btn-container>
        <CustomButton variant='outlined' name='LOGIN' size='large' onClick={() => { navigate('/login') }} />
        <CustomButton variant='contained' name='REGISTER' size='large' onClick={() => { navigate('/register') }} />
      </div>
    </div>
  )
}
