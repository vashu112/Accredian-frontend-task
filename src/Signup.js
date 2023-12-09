// Import necessary dependencies
import React, { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import Validate from './SignupValidation';
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
} from '@mui/material';
import axios from 'axios';
const SignUpForm = () => {
  const [signUpData, setsignUpData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleSignUpChange = (e) => {
    setsignUpData(signUpData => ({
      ...signUpData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    setErrors(Validate(signUpData));
    if(errors.username === "" && errors.email === "" && errors.password === "" && errors.confirmPassword === "") {
      axios.post('http://localhost:8081/signup', signUpData)
      .then(res => {
        navigate('/');
      })
      .catch(err => console.log(err));
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5">Sign Up</Typography>
        <form onSubmit={handleSignUpSubmit} style={{ width: '100%', marginTop: 16 }}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            name="username"
            value={signUpData.username}
            onChange={handleSignUpChange}
            error={!!errors.username}
            helperText={errors.username}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            name="email"
            value={signUpData.email}
            onChange={handleSignUpChange}
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
            value={signUpData.password}
            onChange={handleSignUpChange}
            error={!!errors.password}
            helperText={errors.password}
          />
          <TextField
            label="Confirm Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            name="confirmPassword"
            value={signUpData.confirmPassword}
            onChange={handleSignUpChange}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: 16 }}>
            Sign Up
          </Button>
          <Link to="/" type='submit' style={{marginTop: '16px'}}>
            Login
          </Link>

        </form>
      </Paper>
    </Container>
  );
};
export default SignUpForm;
