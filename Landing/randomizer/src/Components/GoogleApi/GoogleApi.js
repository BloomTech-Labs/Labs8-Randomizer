import React from 'react';
import {GoogleLogin} from 'react-google-login';

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
    render() {
       return (
         <GoogleLogin
           clientId="559144659158-uck7lvea9deivqvp99bo3bfifsdips4a.apps.googleusercontent.com"
           onSuccess={this.props.responseGoogle}
           onFailure={this.props.responseGoogle}
           theme='dark'
         />
       );
  }
}

  export default GoogleApi;
