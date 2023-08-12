import { Button } from '@mui/material'
import React from 'react'
import 'button.css'


export const Custom_button = (props:any) => {
  return (
    <Button size={props.size} variant={props.variant} className={props.variant}>{props.name}</Button>
  )
}

// Setting default value for props
Custom_button.defaultProps = {
  size: 'medium',
  variant: "contained",
  name: 'Button'
};