
import Button from '@mui/material/Button';
import React from 'react'
import './button.css'
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { ButtonProps } from '@mui/base';

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

export const Custom_button = (props: any) => {
  let color = '#2AFF7F';
  let backgroundColor = '#2AFF7F';
  let borderColor = '#2AFF7F';
  if (props.variant == 'contained') {
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
Custom_button.defaultProps = {
  size: 'medium',
  variant: "contained",
  name: 'Button'
};