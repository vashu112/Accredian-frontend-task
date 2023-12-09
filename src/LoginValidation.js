function Validate(values) {
  let errors = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  if(values.email==="") {
    errors.email = 'Email address is required';
  } else if(!email_pattern.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  else{
    errors.email = "";
  }

  if(values.password==="") {
    errors.password = 'Password is required';
  } else if(!password_pattern.test(values.password)) {
    errors.password = 'Password must be 8 characters must include lowercase characters, uppercase letters and numbers';
  }
  else{
    errors.password = "";
  }

  return errors;
}
export default Validate;