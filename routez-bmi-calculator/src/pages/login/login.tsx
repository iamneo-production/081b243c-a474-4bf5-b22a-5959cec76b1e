import React from 'react'
import { Link } from 'react-router-dom'
import { CustomButton } from '../../components/button/button'
import { CustomField } from '../../components/text_field/custom_field'
import './login.css'

export const Login = () => {
  return (
    <div className='wrapper'>
      <p className='header'>Login</p>
      <div className='field-container'>
        <div className='field' >
          <CustomField label='E-mail'/>
        </div>
        <div className='field' >
          <CustomField label='Password'/>
          <Link to='/forget_password' className='forget-pass'>Forgot password?</Link>
        </div>
      </div>
      <div>
      <CustomButton variant='contained' name='LOGIN' size='large'/>
      </div>
      <Link to='/'>GO BACK</Link>
    </div>
  )
}
