function Validate(values) {
        var errors = {};
        const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
        if(values.username==="") {
            errors.username = 'Username is required';
        }
        else{
            errors.username = "";
        }
    
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

        if(values.confirmPassword==="") {
            errors.confirmPassword = 'Confirm Password is required';
        } else if(values.password !== values.confirmPassword) {
            errors.confirmPassword = 'Password must match';
        }
        else{
            errors.confirmPassword = "";
        }
  return errors;
}
export default Validate;