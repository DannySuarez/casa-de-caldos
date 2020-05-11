import React, { useState } from 'react';
import { useLogin } from '../auth/auth';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, authError } = useLogin();


  const handleSignIn = (e) => {
    e.preventDefault();
    login(email, password);    
  };


  return (

    <form onSubmit={handleSignIn}>
      {authError && <p>{authError}</p>}
      <label htmlFor="email">Email Address:</label>
      <input type="text" id="email" name="email" onChange={({ target }) => setEmail(target.value)}/>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password"  onChange={({ target }) => setPassword(target.value)} />
      <button>Enter</button>
    </form>
    
  );
};
