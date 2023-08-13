import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../../components/button/button'
import { CustomField } from '../../components/text_field/custom_field'
import './login.css'

export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    if (!email) {
      setEmailError('Email is required');
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError('Invalid email');
    } else {
      setEmailError('');
    }
  }, [email]);

  useEffect(() => {
    if (!password) {
      setPasswordError('Password is required');
    } else {
      setPasswordError('');
    }
  }, [password]);

  const handleSubmit = () => {
    if (!email || !password || emailError || passwordError) {
      alert("Enter valid details")
      return;
    }
    const apiUrl = 'https://8081-cecdbbbebcbbcebefefededfecafbdcdebecae.premiumproject.examly.io/api/login';
    fetch(apiUrl, {method: 'POST', headers: { 'Content-Type': 'application/json', }, body: JSON.stringify({email:email, password:password}),} )
      .then(response => {

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        navigate("/calcluator")
        return response.json();
      })
      .catch(error => {
        console.error('Error:', error);
        alert("error")
      });

  };

  return (
    <div className='wrapper'>
      <p className='header'>Login</p>
      <div className='field-container'>
        <div className='field' >
          <CustomField label='E-mail' onChange={(e: any) => setEmail(e.target.value)} />
          {emailError && <div className='error' style={{ color: 'red' }}>{emailError}</div>}
        </div>
        <div className='field' >
          <CustomField label='Password' type='password' onChange={(e: any) => setPassword(e.target.value)}/>
          <a href='/forget_password'>Forgot password?</a>
        </div>
      </div>
      <div>
      <CustomButton variant='contained' name='LOGIN' size='large' onClick={()=>{handleSubmit()}}/>
      </div>
      <Link to='/'>GO BACK</Link>
    </div>
  )
}
