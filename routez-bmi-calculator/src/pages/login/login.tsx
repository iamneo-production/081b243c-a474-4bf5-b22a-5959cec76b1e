import React from 'react'
import { Custom_button } from '../../components/button/button'
import { Custom_field } from '../../components/text_field/custom_field'
import './login.css'

export const Login = () => {
  return (
    <div className='outer-container'>
      <p className='header'>Login</p>
      <div className='field-container'>
        <div className='field' >
          <Custom_field label='E-mail'/>
        </div>
        <div className='field' >
          <Custom_field label='Password'/>
          <a href='/forget_password'>Forgot password?</a>
        </div>
      </div>
      <Custom_button variant='contained' name='LOGIN' size='large' />
    </div>
  )
}
