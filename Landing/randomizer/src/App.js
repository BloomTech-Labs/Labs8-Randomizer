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
import Newuser from './Components/Randomuser/Newuser';
import Class from './Components/Classes/Class';
import Chart from './Components/Rechart/Charts';
import StudentChart from './Components/Rechart/StudentChart';
import ViewClass from './Components/ViewClass/ViewClass';
import About from './Components/About/About';


// Icons
// import Vert from '@material-ui/icons/Reorder';
import Gearicon from '@material-ui/icons/Settings';
import Money from '@material-ui/icons/AttachMoney';
import Homeicon from '@material-ui/icons/Home';
import Swap from '@material-ui/icons/Shuffle';
import Book from '@material-ui/icons/Class';
import People from '@material-ui/icons/People';
import Info from '@material-ui/icons/Info';
// Stylings


const Background = styled.div`
background-color: #ffffff;
font-family:'Raleway', sans-serif;
display: flex;
width: 1920px;
height: 1080px;


@media (max-width: 400px) {
  flex-direction: column;
  width: 768px;
}
`
const Appmain = styled.div`
font-family:'Raleway', sans-serif;
display: flex;
justify-content: center;
justify-content: space-between;
width: 1000px;
height: 1000px;
@media (max-width: 1024px) {
  
  width: 650px;
  
}
@media (max-width: 400px) {
  
  width: 400px;
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
`

const Sider = styled.button`
text-decoration: none;
background-color: none;
color: #72CBD3;
border: none;
cursor: pointer;
height: 25px;
background: none;
margin-bottom: 50px;
transition: .3s;
width: 100px;
:hover {
  color: #F7AF9D;
  @media (max-width: 400px) {
    font-size: 10px;
    
  }
}`

const Tool = styled.h1`
text-decoration: none;
font-family:'Raleway', sans-serif;
color: #F7AF9D;
border: none;
font-size: 16px;


`

class App extends Component {
  render() {

    return (
      <Background>
        <Appmain>
          <Sidebar>

            <Link to="/">
            <Sider  >
            <Tooltip title="Home" placement="right">
              <Homeicon  style={{fontSize: '48px'}} >  </Homeicon> 
              </Tooltip>
              
              
            </Sider>
            
            </Link>

            <Link to="/Settings">
              <Sider>
                <Tooltip title="Settings" placement="right">
                <Gearicon tag='Settings' style={{fontSize: '48px'}}/>
                </Tooltip>
              </Sider>
            </Link>
            <Link to="/Random">
              <Sider>
              <Tooltip title="Randomizer" placement="right">
                <Swap style={{fontSize: '48px'}}/>
               </Tooltip>
              </Sider>
            </Link>
            <Link to="/Billing">
              <Sider>
              <Tooltip title="Settings" placement="right">
                <Money style={{fontSize: '48px'}}/>
                </Tooltip>
              </Sider>
            </Link>
            <Link to="/Class">
              <Sider>
              <Tooltip title="Create or Edit a Class" placement="right">
                <Book style={{fontSize: '48px'}}/>
                </Tooltip>
              </Sider>
            </Link>
            <Link to="/ViewClasses">
              <Sider>
              <Tooltip title="Classes" placement="right">
                <People style={{fontSize: '48px'}}/>
              </Tooltip>
              </Sider>
            </Link>
            
            <Link to="/About">
              <Sider>
              <Tooltip title="About" placement="right">
                <Info style={{fontSize: '48px'}}/>
              </Tooltip>
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
          <Route exact path = '/Class' component={Class}/>
          <Route exact path = '/Chart' component={Chart}/>
          <Route exact path = '/ViewClasses' component={ViewClass}/>
          <Route exact path = '/Newuser' component={Newuser}/>
          <Route exact path = '/About' component={About}/>
        </Appmain>
      </Background>
    );
  }
}
export default App;
