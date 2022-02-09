import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import Button from './Button'
import ButtonLogout from './ButtonLogout';

const MainBox = () => {
  
  return (
  <div className='main'>
    <p className='text'>Login Test</p>

      {/* <div className='email'>
        <label> Email</label>
        <br/>
        <input type='email'/>
      </div>

      <div className='password email'>
        <label> Password</label>
        <br/>
        <input type='password'/>
      </div>
       */}
      <ButtonLogout/>
      <Button/>
  </div>
  );
}

export default MainBox;
