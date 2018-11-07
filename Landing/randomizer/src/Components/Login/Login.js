
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';



const Homediv = styled.div`
width: 500px;
height: 500px;
background-color: none;
display: flex;
justify-content: center;
border-radius: 4px;
font-size: 26px;
`
const Welcomer = styled.h1`
position: absolute`
const Userenter = styled.input`
text-decoration: none;
width: 175px;
height: 25px;
position: absolute;
margin-top: 250px;
`
const Passenter = styled.input`
text-decoration: none;
width: 175px;
height: 25px;
position: absolute;
margin-top: 300px;

`



const Signin = styled.button`
width: 200px;
height: 60px;
background-color: #232323;
cursor: pointer;
border: none;
border-radius: 15px 5px;
text-decoration: none;
margin-top: 350px;
position: absolute;
color: #E6EBE0;
transition: .5s;

:hover {
    background-color: #B8BACF;
    opacity: .9;
    color: black;
}
`
const Returner = styled.button`
width: 20px;
height: 20px;
cursor: pointer;
background: none;
border: none;
text-decoration: none;
margin-right:480px;



`

class Login extends Component {
    render() {
        return (
            
            <Homediv>
                
                
                
                 
                
                <Welcomer>Sign In</Welcomer>
               
               

                
               <Userenter name="username" placeholder="Username"></Userenter>
               <Passenter name="password" placeholder="Password" type="password"></Passenter>
               <Signin> Login</Signin>
               
                

            </Homediv>
        )
    }
}
export default Login;