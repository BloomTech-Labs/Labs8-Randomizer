import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import styled from 'styled-components';

const Homediv = styled.div`
width: 500px;
height: 500px;
background-color: grey;
display: flex;
justify-content: center;
border-radius: 4px;
border: 1px solid skyblue;


`
const Signup = styled.button`
width: 200px;
height: 60px;
background-color: white;
cursor: pointer;
border: none;
border-radius: 3px;

margin-top: 300px;
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
margin-top: 235px;
transition: .5s;
:hover {
    background-color: cyan;
    opacity: .9;
}
`
const Welcomer = styled.h1`

`


class Home extends Component {
    render() {
        return (
            <Homediv>
                
                <Welcomer >Welcome to Randomizer</Welcomer>
              
                <Link style={{textDecoration: 'none', display: 'flex',position: 'absolute'}} to='/Signup'>
                <Signup>Sign Up</Signup>
                </Link>

                <Link style={{textDecoration: 'none', display: 'flex',position: 'absolute'}} to='/Login'>
                <Signin>Login</Signin>
                </Link>

            </Homediv>
        )
    }
}
export default Home;