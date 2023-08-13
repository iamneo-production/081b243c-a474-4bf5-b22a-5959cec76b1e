import React from 'react'
import './custom_field.css'
import { TextField } from '@mui/material'

export const CustomField = (props:any) => {
  return (
    <TextField fullWidth 
    label={props.label} 
    color='success' 
    onChange={props.onChange}
    type={props.type}
    sx={{ background: '#292D36', color: 'white' }} 
    InputLabelProps={{
        style: { color: 'white' }, 
     }} inputProps={{
        style: {color: 'white'}
    }} />
  )
}
