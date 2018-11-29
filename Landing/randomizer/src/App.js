// Libraries
import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import styled from 'styled-components';



// Components
import Home from './Components/LandingPage/Home';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import Settings from './Components/Settings/Settings';
import Magic from './Components/Magic/Random';
import Billing from './Components/Billing/billing';
import Newuser from './Components/Randomuser/Newuser';
import Class from './Components/Classes/Class';
import Chart from './Components/Rechart/Charts';
// Icons
// import Vert from '@material-ui/icons/Reorder';
import Gearicon from '@material-ui/icons/Settings';
import Money from '@material-ui/icons/AttachMoney';
import Homeicon from '@material-ui/icons/Home';
import Swap from '@material-ui/icons/Shuffle';
import Book from '@material-ui/icons/Class';
// Stylings

const Background = styled.div`
background-color: #ffffff;
font-family:'Raleway', sans-serif;
display: flex;
width: 1920px;
height: 1080px;
`
const Appmain = styled.div`
font-family:'Raleway', sans-serif;
display: flex;
justify-content: center;
justify-content: space-between;
width: 1000px;
height: 1000px;
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
`

const Sider = styled.button`
text-decoration: none;
background-color: none;
color: #72CBD3;
border: none;
cursor: pointer;
height: 25px;
background: none;
margin-bottom: 25px;
transition: .3s;
:hover {
  color: #F7AF9D;
}`

class App extends Component {
  render() {

    return (
      <Background>
      <Appmain>


        <Sidebar>
          <Link to="/">
          <Sider>
          <Homeicon style={{fontSize: '48px'}} />
          </Sider>
          </Link>



          <Link to="/Settings">
          <Sider>
          <Gearicon style={{fontSize: '48px'}}/>
          </Sider>
          </Link>


          <Link to="/Random">
          <Sider>
          <Swap style={{fontSize: '48px'}}/>
          </Sider>
          </Link>


          <Link to="/Billing">
           <Sider>
          <Money style={{fontSize: '48px'}}/>
          </Sider>
          </Link>

           <Link to="/Classes">
           <Sider>
          <Book style={{fontSize: '48px'}}/>
          </Sider>
          </Link>

          </Sidebar>


      <Route exact path='/' component={Home}/>
       <Route exact path='/Signup' component={SignUp}/>
       <Route exact path ='/Login' component={Login}/>
       <Route exact path='/About'/>
       <Route exact path='/Settings' component={Settings}/>
       <Route exact path = '/Random' component={Magic}/>
       <Route exact path ='/Billing' component={Billing} />
       <Route exact path = '/Invoices'/>
        <Route exact path = '/Newuser' component={Newuser}/>
        <Route exact path = '/Classes' component={Class}/>
        <Route exact path = '/Chart' component={Chart}/>
       <Route exact path = '/Newuser' component={Newuser}/>



      </Appmain>


      </Background>


    );
  }
}

export default App;
