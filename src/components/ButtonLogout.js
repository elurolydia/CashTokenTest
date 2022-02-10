import React, {useEffect, useState} from 'react'; 
import { useAuth0 } from '@auth0/auth0-react'

const ButtonLogout = () => {
  const [url, setUrl] = useState('')

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
};

  const signout = () => {
    fetch("https://id-sandbox.cashtoken.africa/account/signout", requestOptions)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log('Error')
        }
      
      )
  }
  
    
    const {logout} = useAuth0();
    

  return (
    <button onClick={() => signout()}
      >Logout</button>
  )
}

export default ButtonLogout