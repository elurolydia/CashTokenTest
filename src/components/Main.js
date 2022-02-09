import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import Button from './Button'

const MainBox = () => {
  
  return (
  <form className='main'>

      <div className='email'>
        <label> Email</label>
        <br/>
        <input type='email'/>
      </div>

      <div className='password email'>
        <label> Password</label>
        <br/>
        <input type='password'/>
      </div>
      
      <Button/>
  </form>
  );
}

export default MainBox;
