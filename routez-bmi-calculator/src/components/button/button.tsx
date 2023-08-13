import React from 'react'
import Button from '@mui/material/Button';
import './button.css'

export const CustomButton = (props: any) => {
  let color;
  let backgroundColor;
  let borderColor;
  let hoverBackgroundColor;
  let hoverBorderColor;
  if (props.variant === 'contained') {
    color = 'white';
    backgroundColor = '#2AFF7F';
    hoverBackgroundColor='#2AFF6FC9';
    borderColor = '#2AFF7F';
  } else {
    color = '#2AFF7F';
    backgroundColor = 'transparent'
    hoverBackgroundColor='#2AFF6F0F';
    borderColor = '#2AFF7F';
    hoverBorderColor = '#2AFF6FC9';
  }
  return (
    <Button sx={{ 
      color: { color }, 
      backgroundColor: { backgroundColor },
      borderColor: { borderColor },
      '&:hover': {
        backgroundColor: hoverBackgroundColor,
        borderColor: hoverBorderColor
      }, 
      fontWeight: '600', 
      margin: '5px', 
      marginBottom: '10px',
      width: '90%'
    }} 
    size={props.size} 
    variant={props.variant} 
    className={props.className}
    onClick={props?.onClick}
    href={props?.href}>
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