import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';

import Home from './Components/LandingPage/Home';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';

import styled from 'styled-components';

const Appmain = styled.div`
font-family:'Raleway', sans-serif;
display: flex;
justify-content: center;
 `

class App extends Component {
  render() {
    return (
      <Appmain>
      <Route exact path='/' component={Home}></Route>
       <Route exact path='/Signup' component={SignUp}/>
       <Route exact path ='/Login' component={Login}></Route>
       <Route exact path='/About'></Route>
       <Route exact path='/Settings'></Route>
       <Route exact path ='/Billing' />              
      </Appmain>
    );
  }
}

export default App;
