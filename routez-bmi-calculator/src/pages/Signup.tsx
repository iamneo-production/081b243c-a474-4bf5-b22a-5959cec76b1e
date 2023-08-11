import { Button, Container, TextField } from '@mui/material';
import './Signup.css';

const Signup = () => {
  return (
    <Container maxWidth="xs">
      <h1>Signup</h1>
      <form className="signupForm">
        <TextField label="Email" type="email" variant="outlined" />
        <TextField label="Username" variant="outlined" />
        <TextField label="Passsword" type="password" variant="outlined" />
        <Button variant="contained">Signup</Button>
      </form>
    </Container>)
}

export default Signup;