import React from 'react'
import './custom_field.css'
import { createStyles, TextField } from '@mui/material'

export const Custom_field = (props:any) => {
  return (
    <TextField fullWidth 
    label={props.label} 
    color='success' 
    sx={{ background: '#292D36', color: 'white' }} 
    InputLabelProps={{
        style: { color: 'white' }, 
     }} inputProps={{
        style: {color: 'white'}
    }} />
  )
}
