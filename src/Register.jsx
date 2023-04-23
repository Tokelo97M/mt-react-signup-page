import React, {useState} from 'react';


const Register = (props) => {

  const [email] = useState('');
    const [pass, setPass] = useState('');
    const [name] = useState('');


    const handleSubmit = (e) => {
        
      e.preventDefault();
      console.log(email);
  }

  return (
    
    <div className='auth-form-container'>
      <h2>Register</h2>
    <form 
    onSubmit={handleSubmit}
    className='register-form'>

    <label htmlFor='name'>Full Name</label>
        <input 
        value={name} 
        type="text" 
        placeholder='Full Name' 
        id='name' 
        name='name' />

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
    onClick={() => props.onFormSwitch('login')}>Already have an accout? Login here</button>
    </div>
  )
}

export default Register;