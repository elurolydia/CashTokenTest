import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Profile = () => {

    // console.log(isAuthenticated)
    const {user, isAuthenticated} = useAuth0();
  return (
    isAuthenticated? (
    <div>
      {/* {JSON.stringify (user, null, 2)} */}
      Logged in
    </div>
    ) : <div> Not Loggedin</div>
  )
}

export default Profile