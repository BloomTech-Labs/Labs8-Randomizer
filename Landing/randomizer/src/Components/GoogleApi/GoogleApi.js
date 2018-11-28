import React from 'react';
import config from './config';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
const API_KEY = 'iVDX47CeAHhcH0bhgbXIQBCw';

// function onSignIn(googleUser) {
//   var id_token = googleUser.getAuthResponse().id_token;
//   var xhr = new XMLHttpRequest();
//     xhr.open('POST', 'https://localhost:8000/api/tokensignin');
//     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//     xhr.onload = function() {
//     console.log('Signed in as: ' + xhr.responseText);
//   };
//     xhr.send('idtoken=' + id_token);
//     var profile = googleUser.getBasicProfile();
//       console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
//       console.log('Name: ' + profile.getName());
//       console.log('Image URL: ' + profile.getImageUrl());
//       console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present
// }


class GoogleApi extends React.Component {

  constructor(){
    super()
    this.state = {
      gapiReady: true
    }
  }

responseGoogle = response => {
  const username = response.profileObj.name
  const email = response.profileObj.email
  console.log('here', username, email)
  axios.post('http://localhost:8000/api/tokenregister', {username:username, email:email})

  .then (res => {
    const token = res.data.key;

        localStorage.setItem('jwt', token);
        this.props.history.push('/Classes');
      })
  .catch(err => {
        console.log('error')
      })
}

    render() {
       return (
         <GoogleLogin
           clientId="559144659158-uck7lvea9deivqvp99bo3bfifsdips4a.apps.googleusercontent.com"
           buttonText="Login"
           onSuccess={this.responseGoogle}
           onFailure={this.responseGoogle}
         />
       );
  }
}

  export default GoogleApi;
