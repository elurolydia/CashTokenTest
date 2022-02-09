import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Auth0Provider} from '@auth0/auth0-react';
// import {useHistory} from 'react-router-dom'


// if (process.env.NODE_ENV === "production"){
//   process.env.NODE_ENV = 'development';
// }
const domainUri = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const uri = window.location.origin + '/callback';
console.log (process.env.NODE_ENV)
console.log('redirectUri: '+ window.location.origin + '/callback');
ReactDOM.render(
    <Auth0Provider
      domain='id-sandbox.cashtoken.africa/oauth'
      clientId={clientId}
      redirectUri='http://localhost:3000/callback'>
      <App />
    </Auth0Provider>,
  document.getElementById('root')
);



