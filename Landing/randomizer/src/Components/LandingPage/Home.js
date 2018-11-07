//Libraries
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled, {keyframes}from 'styled-components';

// Icons
import Gearicon from '@material-ui/icons/Settings';

// Imports
import Login from '../Login/Login';

// Stylings
const Homediv = styled.div`
width: 500px;
height: 500px;
background-color: grey;
display: flex;
justify-content: center;
flex-wrap: wrap;
border-radius: 4px;
border: 3px solid skyblue;
`
const Signup = styled.button`
width: 200px;
height: 60px;
background-color: white;
cursor: pointer;
border: none;
border-radius: 3px;
margin-right: 5px;
transition: .5s;
text-decoration: none;

:hover {
    background-color: cyan;
    opacity: .9;
}
`
const Signin = styled.button`
width: 200px;
height: 60px;
background-color: white;
cursor: pointer;
border: none;
border-radius: 3px;
text-decoration: none;
transition: .5s;

:hover {
    background-color: cyan;
    opacity: .9;
}
`
const Welcomer = styled.h1`
`
const Setter = styled.div`
position: absolute;
margin-top: 470px;
margin-left: 235px;`

const Sidebar = styled.div`
width: 250px;
height: 100%;
background-color: teal;
display: flex;
`

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {isCool: false}
      }
      toggleCoolness = () => {
        this.setState({ isCool: !this.state.isCool })
      }

    render() {
        const {isCool} = this.state;
        return (
            <Homediv>
                
                <Welcomer >Welcome to Randomizer</Welcomer>
              
               <Link to='/Signup'>
                <Signup>Sign Up
                    
                </Signup>
                </Link>

                <Link to='/Login'>
                <Signin onClick={this.toggleCoolness}>Login
                    {isCool ? (
                        <Login/>
                    ) : (
                        <div></div>
                    )}
                </Signin>
                </Link>
    <Setter>
                <Link to="/Settings" style={{color: 'Black'}}>
    <Gearicon/>
    </Link>
    </Setter>
            </Homediv>
        )
    }
}
export default Home;