import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../../components/button/button'
import { CustomField } from '../../components/text_field/custom_field'

export const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPsd, setConfirmPsd] = useState();
  const [emailError, setEmailError] = useState('');
  const [passwordConfirmError, setPasswordConfirmError] = useState('');
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


  useEffect(() => {
    if (!confirmPsd) {
      setPasswordConfirmError('Password is required');
    } else if (password !== confirmPsd) {
      setPasswordConfirmError('Not matched');
    }else{
      setPasswordConfirmError('');
    }
  }, [confirmPsd]);

  const handleSubmit = () => {
    if (!email || !password || emailError || passwordError) {
      alert("Enter valid details")
      return;
    }
    let data = { email, password };
    console.log(data);

    const apiUrl = '';
    fetch(apiUrl,)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        navigate("/login")
        return response.json();
      })
      .catch(error => {
        console.error('Error:', error);
        alert("error")
      });

  };
  return (
    <div className='wrapper'>
      <p className='header'>Register</p>
      <div className='field-container'>
        <div className='field' >
          <CustomField label='E-mail' onChange={(e: any) => setEmail(e.target.value)} />
          {emailError && <div className='error' style={{ color: 'red' }}>{emailError}</div>}
        </div>
        <div className='field' >
          <CustomField label='Password' type="password" onChange={(e: any) => setPassword(e.target.value)} />
          {passwordError && <div className='error' style={{ color: 'red' }}>{passwordError}</div>}
        </div>
        <div className='field' >
          <CustomField label='Re-type Password' type="password" onChange={(e: any) => setConfirmPsd(e.target.value)} />
          {passwordConfirmError && <div className='error' style={{ color: 'red' }}>{passwordConfirmError}</div>}
        </div>
      </div>
      <CustomButton variant='contained' name='REGISTER' size='large' onClick={() => { handleSubmit() }} />
    </div>
  )
}
