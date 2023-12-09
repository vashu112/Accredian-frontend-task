import React, {useState} from 'react'
import { Link , useNavigate} from 'react-router-dom';
import Validate from './LoginValidation';
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
} from '@mui/material';
import axios from 'axios';
function Login() {
    const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleLoginChange = (e) => {
    setLoginData(loginData => ({
      ...loginData,
      [e.target.name]: e.target.value
    }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();    
    setErrors(Validate(loginData));
    if(errors.email === "" && errors.password === "") {
      axios.post('http://localhost:8081/', loginData)
      .then(res => {
        navigate('/home');
      })
      .catch(err => console.log(err));
    }
  };
  return (
    <Container component="main" maxWidth="xs">
        <Paper elevation={3} style={{ padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: "center"}}>
        <Typography variant="h5">Login</Typography>
        <form onSubmit={handleLoginSubmit} style={{ width: '100%', marginTop: 16 }}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            name="email"
            value={loginData.email}
            onChange={handleLoginChange}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleLoginChange}
            error={!!errors.password}
            helperText={errors.password}
          />
                <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: 16 }}>
                Login
                </Button>
                <Link to="/signup" type='submit' style={{marginTop: '16px'}}>
                Create Account
                </Link>

        </form>
      </Paper>
    </Container>
  )
}

export default Login;
