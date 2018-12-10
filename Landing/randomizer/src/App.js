// Libraries
import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import styled from 'styled-components';
import Tooltip from '@material-ui/core/Tooltip';

// Components
import Home from './Components/LandingPage/Home';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import Settings from './Components/Settings/Settings';
import Magic from './Components/Magic/Random';
import Billing from './Components/Billing/billing';

import Class from './Components/Classes/Class';

import ViewClass from './Components/ViewClass/ViewClass';
import About from './Components/About/About';

// Icons
import Gearicon from '@material-ui/icons/Settings';
import Homeicon from '@material-ui/icons/Home';
import Swap from '@material-ui/icons/Shuffle';
import Book from '@material-ui/icons/Class';
import People from '@material-ui/icons/People';
import Info from '@material-ui/icons/Info';
import Mobileguide from '@material-ui/icons/Toc';
import LogOut from '@material-ui/icons/ExitToApp';
import Loggedin from '@material-ui/icons/DoneOutline';
import Loggedout from '@material-ui/icons/Clear';

//Images
import Flatclass from '../src/Components/Img/flatclass2.png';

// Stylings
const Background = styled.div`
background-color: #ffffff;
font-family:'Raleway', sans-serif;
display: flex;
width: 100%;
height: 100%;
justify-content: center;

@media (max-width: 400px) {
  flex-direction: column;
  width: 400px;
  height: 500px;
  
}
`
const MainAppDiv = styled.div`
font-family:'Raleway', sans-serif;
display: flex;
justify-content: center;
background-image: url(${Flatclass});
width: 1100px;
height: 800px;

background-color: white;
@media (max-width: 1024px) {
  width: 650px;
  height: 400px;
}
@media (max-width: 400px) {
  background-image: none;
  width: 300px;
}
 `
const Sidebar = styled.div`
width: 40px;
height: 400px;
background-color: none;
display: flex;
color: white;
border-radius: 10px;
align-items: flex-start;
flex-direction: column;
justify-content: flex-start;
margin-top: 50px;
z-index: +1;
@media (max-width: 400px) {
  position: fixed;
  display: none;
}
`
const Sidebutton = styled.button`
outline: 0;
width: 30px;
text-decoration: none;
background-color: none;
color: #A84600;
border: none;
cursor: pointer;
height: 20px;
background: none;
margin-bottom: 50px;
transition: .3s;
width: 40px;
:hover {
  color: #F7AF9D;
}
@media (max-width: 400px) {
  font-size: 10px;
  width: 0px;
  margin-bottom: 0px;
}`

const Mobilebtn = styled.button`
display: none;
text-decoration: none;
background-color: none;
color: #A84600;
border: none;
cursor: pointer;
height: 25px;
background: none;
transition: .3s;

:hover {
  color: #F7AF9D;
}
@media (max-width: 400px) {
  display: inline-block;
  position: fixed;
  margin-bottom: 50px;
}`
const Logger = styled.h1`
position: absolute;
margin-left: 450px;
font-size: 24px;
`

class App extends Component {

  componentDidUpdate() {
    let x= document.getElementById("IN")
    let y= document.getElementById("OUT")
    let z = document.getElementById('Sidebar')
    if (localStorage.getItem("jwt")) {
      x.style.display="flex"
      y.style.display="none"
      z.style.display="block"
    } else {
      y.style.display="block"
      x.style.display="none"
      z.style.display="none"
    }
  }

  mobileHandler= e => {
console.log('window', window.innerWidth)
    let w = window.innerWidth
   let x = document.getElementById('Sidebar')
   let y = document.getElementById('router')
   if (w < 500)
 {   if (x.style.display==="none") {
     x.style.display="flex"
     y.style.opacity=".5"
    
    
   } else {
     x.style.display ="none"
     y.style.opacity="1"
   }
    
  }

}

logoutHandler = e => {
  localStorage.clear()
}
  render() {
   

   

    return (
      
      <Background id="BackgroundID">
      <Logger>Logged in:
        <Loggedin id="IN" style={{fontSize:'36px', display: 'none'}}></Loggedin>
        <Loggedout id="OUT" style={{fontSize:'40px', display: 'none'}}></Loggedout>
      </Logger>
       
        <Mobilebtn onClick={this.mobileHandler}>
              <Tooltip title="Menu" placement="right">
                <Mobileguide  style={{fontSize: '48px'}} >  </Mobileguide> 
              </Tooltip>
        </Mobilebtn>

          <Sidebar id="Sidebar">

            <Link to="/" style={{height: '40px', marginBottom: '25px'}}>
            <Sidebutton onClick={this.mobileHandler} id="Sider"  >
            <Tooltip title="Home" placement="right">
              <Homeicon  style={{fontSize: '48px'}} >  </Homeicon> 
              </Tooltip>
            </Sidebutton >
            </Link>
          
            <Link to="/ViewClasses" style={{height: '40px', marginBottom: '25px' }}>
              <Sidebutton onClick={this.mobileHandler} id="Sider5" >
              <Tooltip title="Classes" placement="right">
                <People style={{fontSize: '48px'}}/>
              </Tooltip>
              </Sidebutton >
            </Link>
          
            <Link to="/Class" style={{height: '40px', marginBottom: '25px' }}>
              <Sidebutton onClick={this.mobileHandler} id="Sider4">
              <Tooltip title="Create or Edit a Class" placement="right">
                <Book style={{fontSize: '48px'}}/>
                </Tooltip>
              </Sidebutton >
            </Link>

            <Link to="/Random" style={{height: '40px', marginBottom: '25px' }}>
              <Sidebutton onClick={this.mobileHandler} id="Sider2">
              <Tooltip title="Randomizer" placement="right">
                <Swap style={{fontSize: '48px'}}/>
               </Tooltip>
              </Sidebutton >
            </Link>


            <Link to="/Settings" style={{height: '40px', marginBottom: '25px' }}>
              <Sidebutton onClick={this.mobileHandler} id="Sider2">
                <Tooltip title="Settings" placement="right">
                <Gearicon tag='Settings' style={{fontSize: '48px'}}/>
                </Tooltip>
              </Sidebutton >
            </Link>
            
            <Link to="/About" style={{height: '40px', marginBottom: '25px' }}>
              <Sidebutton onClick={this.mobileHandler} id="Sider6">
              <Tooltip title="About" placement="right">
                <Info style={{fontSize: '48px'}}/>
              </Tooltip>
              </Sidebutton >
            </Link>

              <Link to="/" style={{height: '40px', marginBottom: '25px' }}>
              <Sidebutton onClick={this.logoutHandler} id="Sider6">
              <Tooltip title="Log Out" placement="right">
                <LogOut style={{fontSize: '48px'}}/>
              </Tooltip>
              </Sidebutton >
            </Link>
            
          </Sidebar>

          <MainAppDiv id="router">

          <Route exact path='/' component={Home}/>
          <Route exact path='/Signup' component={SignUp}/>
          <Route exact path ='/Login' component={Login}/>
          <Route exact path='/Settings' component={Settings}/>
          <Route exact path = '/Random' component={Magic}/>
          <Route exact path ='/Billing' component={Billing} />
          <Route exact path = '/Class' component={Class}/>
          <Route exact path = '/ViewClasses' component={ViewClass}/>
          <Route exact path = '/About' component={About}/>

          </MainAppDiv>
        
        
      </Background>
      
    );
  }
}
export default App;
