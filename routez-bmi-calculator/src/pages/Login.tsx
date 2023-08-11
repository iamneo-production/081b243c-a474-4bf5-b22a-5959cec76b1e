import { Button, Container, TextField } from '@mui/material';
import './Login.css';

const Login = () => {
  return (
    <Container maxWidth="xs">
      <h1>Login</h1>
      <form className="loginForm">
        <TextField label="Username" variant="outlined" />
        <TextField label="Passsword" type="password" variant="outlined" />
        <Button variant="contained">Login</Button>
      </form>
    </Container>
  )
}

export default Login;