import React from 'react';
import config from './config';
const API_KEY = 'iVDX47CeAHhcH0bhgbXIQBCw';

class GoogleApi extends React.Component {

  constructor(){
    super()
    this.state = {
      gapiReady: true
    }
  }

    loadYoutubeApi() {
      const script = document.createElement("script");
      script.src = "https://apis.google.com/js/client.js";

      script.onload = () => {
        window.gapi.load('client', () => {
          window.gapi.client.setApiKey(API_KEY);
          window.gapi.client.load('youtube', 'v3', () => {
            this.setState({ gapiReady: true });
          });
        });
      };

      document.body.appendChild(script);
    }

    componentDidMount() {
      this.loadYoutubeApi();
    }

    render() {
      if (this.state.gapiReady) {
       return (
         <h1>GAPI is loaded and ready to use.</h1>
       );
    };
  }
}

  export default GoogleApi;
