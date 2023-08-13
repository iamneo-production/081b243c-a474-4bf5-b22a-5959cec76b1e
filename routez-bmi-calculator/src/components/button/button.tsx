
import Button from '@mui/material/Button';
import React from 'react'
import './button.css'

export const CustomButton = (props: any) => {
  let color;
  let backgroundColor;
  let borderColor;
  if (props.variant === 'contained') {
    color = 'white';
    backgroundColor = '#2AFF7F';
    borderColor = '#2AFF7F';
  } else {
    color = '#2AFF7F';
    backgroundColor = '#000033'
    borderColor = '#2AFF7F';
  }
  return (
    <Button sx={{ 
      color: { color }, 
      backgroundColor: { backgroundColor }, 
      borderColor: { borderColor }, 
      fontWeight: '600', 
      margin: '5px', 
      marginBottom: '10px' 
    }} 
    size={props.size} 
    variant={props.variant} 
    className={props.variant}>
      {props.name}
    </Button>
  )
}

// Setting default value for props
CustomButton.defaultProps = {
  size: 'medium',
  variant: "contained",
  name: 'Button'
};