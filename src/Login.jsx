import React, {useState} from 'react';


const Login = (props) => {

    const [email] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        
        e.preventDefault();
        console.log(email);
    }

  return (

    <div className='auth-form-container'>
      <h2>Login</h2>
    <form 
    onSubmit={handleSubmit}
    className='login-form'>
        <label htmlFor='email'>Email</label>
        <input 
        value={email} 
        type="email" 
        placeholder='youremail@gmail.com' 
        id='email' 
        name='email' />



        <label htmlFor='password'>Password</label>
        <input 
        value={pass} 
        onChange={(e) => setPass(e.target.value)} 
        type="password" 
        placeholder='**********' 
        id='password' 
        name='password' />

        <button type='Submit'>Log In</button>
    </form>

    <button className='link-btn' 
    onClick={() => props.onFormSwitch('register')}>Don't have an accout? Register here</button>
    </div>

  )
}

export default Login;