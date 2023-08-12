import React from 'react'
import { Custom_button } from '../../components/button/button'
import { Custom_field } from '../../components/text_field/custom_field'

export const Register = () => {
  return (
    <div className='outer-container'>
      <p className='header'>Register</p>
      <div className='field-container'>
        <div className='field' >
          <Custom_field label='E-mail'/>
        </div>
        <div className='field' >
          <Custom_field label='Password'/>
        </div>
        <div className='field' >
          <Custom_field label='Re-type password'/>
        </div>
      </div>
      <Custom_button variant='contained' name='LOGIN' size='large' />
    </div>
  )
}
