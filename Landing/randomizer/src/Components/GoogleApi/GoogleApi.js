import React from 'react';
import config from './config';
import GoogleLogin from 'react-google-login';
const API_KEY = 'iVDX47CeAHhcH0bhgbXIQBCw';

class GoogleApi extends React.Component {

  constructor(){
    super()
    this.state = {
      gapiReady: true
    }
  }
responseGoogle = (response) => {
  console.log(response);
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
