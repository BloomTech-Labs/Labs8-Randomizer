
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Homeicon from '@material-ui/icons/Home';


const Homediv = styled.div`
width: 500px;
height: 500px;
background-color: grey;
display: flex;
justify-content: center;
border-radius: 4px;
border: 1px solid skyblue;
`
const Welcomer = styled.h1`
position: absolute`
const Userenter = styled.input`
text-decoration: none;
width: 125px;
height: 25px;
position: absolute;
margin-top: 250px;
`
const Passenter = styled.input`
text-decoration: none;
width: 125px;
height: 25px;
position: absolute;
margin-top: 300px;`



const Signin = styled.button`
width: 200px;
height: 60px;
background-color: white;
cursor: pointer;
border: none;
border-radius: 3px;
text-decoration: none;
margin-top: 350px;
position: absolute;

transition: .5s;
:hover {
    background-color: cyan;
    opacity: .9;
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
                 <Link to="/" style={{width: '20px', height: '20px'}}>
                 <Returner> <Homeicon/></Returner>
                 </Link>
                
                
                 
                
                <Welcomer>Sign In</Welcomer>
               
               

                
               <Userenter name="username" placeholder="Username"></Userenter>
               <Passenter name="password" placeholder="Password" type="password"></Passenter>
               <Signin> Login</Signin>
               
                

            </Homediv>
        )
    }
}
export default Login;