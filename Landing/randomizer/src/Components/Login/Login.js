// Libraries
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

// Stylings
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
background-color: #FFCAD4;
border: 1px solid grey;
transition: .4s;
color: black;
:hover {
    background-color: #bf4068;
    :: placeholder {
        color: white;
    }
}
:: placeholder {
    color: black;
}
`
const Passenter = styled.input`
text-decoration: none;
width: 175px;
height: 25px;
position: absolute;
margin-top: 300px;
background-color: #FFCAD4;
border: 1px solid grey;
transition: .4s;
:hover {
    background-color: #bf4068;
    :: placeholder {
        color: white;
    }
}
:: placeholder {
    color: black;
}
`

const Signin = styled.button`
width: 200px;
height: 60px;
background-color: #C08497;
cursor: pointer;
border: none;
border-radius: 15px 5px;
text-decoration: none;
margin-top: 350px;
position: absolute;
color: black;
transition: .5s;

:hover {
    background-color: #bf4068;
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

const Former = styled.form`
display: flex;
flex-direction: column;

align-items: center;
`
class Login extends Component {
    constructor() {
        super();
        this.state={
            username:"",
            password: "",
            
        }
    }
    
 handleSubmit = e => {
    e.preventDefault();
    
    axios
      .post('https://labs8randomizer.herokuapp.com/api/login', this.state)
      .then(res => {
        
        const token = res.data.key;
       
        localStorage.setItem('jwt', token);
        this.props.history.push('/Random');
      })
      .catch(err => {
       
      });
    this.setState({ username: '', password: '' });
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

    render() {
        return (
            
            <Homediv>
                
                
                
                 
                
                <Welcomer>Sign In</Welcomer>
               
               

                <Former onSubmit={this.handleSubmit}>
               <Userenter name="username" placeholder="Username"
               value={this.state.username} onChange={this.handleInput}></Userenter>

               <Passenter name="password" placeholder="Password" type="password"
               value={this.state.password} onChange={this.handleInput}></Passenter>
               <Signin onSubmit={this.handleSubmit}> Login </Signin>
               </Former>
                

            </Homediv>
        )
    }
}
export default Login;