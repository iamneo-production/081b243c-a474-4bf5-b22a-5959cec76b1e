import React from 'react'
import { Link } from 'react-router-dom'
import { CustomButton } from '../../components/button/button'
import { CustomField } from '../../components/text_field/custom_field'

export const Register = () => {
  return (
    <div className='wrapper'>
      <p className='header'>Register</p>
      <div className='field-container'>
        <div className='field' >
          <CustomField label='E-mail' />
        </div>
        <div className='field' >
          <CustomField label='Password' />
        </div>
        <div className='field' >
          <CustomField label='Re-type password' />
        </div>
      </div>
      <div>
        <CustomButton variant='contained' name='REGISTER' size='large' />
      </div>
      <Link to='/'>GO BACK</Link>
    </div>
  )
}
