// Libraries
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
//Icons
import Backarrow from '@material-ui/icons/ArrowBack';

// Stylings
const Homediv = styled.div`
width: 500px;
height: 500px;
background-color: none;
display: flex;
justify-content: center;
border-radius: 4px;
font-size: 26px;
@media (max-width: 400px) {
    flex-direction: column;
    width: 768px;
    height: 20px;
}
`
const Welcomer = styled.h1`
margin-left: 10px;
position: absolute
@media (max-width: 400px) {
    font-size: 48px;
    position: static;
    margin-left: 95px;
  }`
const Userenter = styled.input`
text-decoration: none;
width: 200px;
height: 30px;
position: absolute;
margin-top: 150px;
padding-left: 10px;
border: 1px solid grey;
transition: .4s;
color: black;

@media (max-width: 400px) {
   margin-top: 0px;
    position: static;
  }
:: placeholder {
    color: black;
}
`
const Passenter = styled.input`
padding-left: 10px;
text-decoration: none;
width: 200px;
height: 30px;
position: absolute;
margin-top: 200px;

border: 1px solid grey;
transition: .4s;

@media (max-width: 400px) {
    position: static;
    margin-top: 5px;

  }
:: placeholder {
    color: black;
}
`

const Signin = styled.button`

cursor: pointer;
border: none;

text-decoration: none;
margin-top: 250px;
position: absolute;
color: black;
transition: .5s;

:hover {
    
    opacity: .9;
    color: white;
}
@media (max-width: 400px) {
    margin-top: 50px;
    width: 100px;
    height: 40px;
  }
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
      .post('http://localhost:8000/api/login', this.state)
      .then(res => {

        const token = res.data.key;
        console.log("where is my token", token);
        localStorage.setItem('jwt', token);
      })
      .catch(err => {

      });
    this.setState({ username: '', password: '' });
    this.props.history.push('/Random');
  };


  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

    render() {
        return (

            <Homediv>



                <Link to='/'>
                <Backarrow style={{fontSize:'24px', color:'black'}}></Backarrow>
                </Link>

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
