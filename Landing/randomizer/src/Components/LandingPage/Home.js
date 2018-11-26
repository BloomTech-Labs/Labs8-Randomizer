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
background-color: none;
display: flex;
justify-content: center;
flex-wrap: wrap;
border-radius: 4px;

`
const Signup = styled.button`
color: black;
width: 200px;
height: 60px;
background-color: #FFA5B6;
cursor: pointer;
border: none;
border-radius: 3px;
margin-right: 5px;
transition: .5s;
text-decoration: none;
font-size: 24px;

:hover {
    background-color: #bf4068;
    opacity: .9;
    color: black;
}
`
const Signin = styled.button`
color: black;
width: 200px;
height: 60px;
background-color: #FFA5B6;
cursor: pointer;
border: none;
border-radius: 3px;
text-decoration: none;
transition: .5s;
font-size: 24px;

:hover {
    background-color: #bf4068;
    opacity: .9;
    color: black;
}
`
const Welcomer = styled.h1`
font-size: 50px;

color: #72CBD3;
margin-bottom: 0px;
text-align: center;
`
const Welcomer2 = styled.h1`
display: flex;
text-align: center;
font-size: 24px;

color: #72CBD3;
`
const Setter = styled.div`
position: absolute;
margin-top: 470px;
margin-left: 235px;`



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
                
                <Welcomer >Welcome to Randomizer </Welcomer>
                <Welcomer2>The modern way to track classroom participation</Welcomer2>
              
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
    
            </Homediv>
        )
    }
}
export default Home;