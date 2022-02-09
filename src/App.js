import React from 'react';
import MainBox from './components/Main';
// import  { useAuth0 } from '@auth0/auth0-react'
import Profile from './components/Profile';

const App = () => {

  console.log(<Profile/>)
  return <div>
    <MainBox/>
    <Profile/>
    
  </div>;
};

export default App;





