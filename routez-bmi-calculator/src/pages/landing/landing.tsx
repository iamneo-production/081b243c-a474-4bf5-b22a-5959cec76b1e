import React from 'react'
import './landing.css'
import { CustomButton } from '../../components/button/button'
import img from '../../resources/BMI_landing_img.png'
import { useNavigate } from 'react-router-dom'

export const Landing = () => {

  const navigate = useNavigate()

  const navigateToLog = () => {
    navigate('/login')
  }
  
  const navigateToReg = () => {
    navigate('/register')
  }

  return (
    <div className='wrapper' >
      <div>
        <img className='img' alt='BMI_landing_img.png' src={img}></img>
      </div>
      <div>
        <p className='heading'>BMI</p>
        <p className='heading'>CALCULATOR</p>
      </div>
      <div btn-container>
        <div>
          <CustomButton variant='outlined' name='LOGIN' size='large' onClick={navigateToLog} />
        </div>
        <div>
          <CustomButton variant='contained' name='REGISTER' size='large' onClick={navigateToReg} />
        </div>
      </div>
    </div>
  )
}
