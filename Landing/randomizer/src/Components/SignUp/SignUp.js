// Libraries
import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import axios from  'axios';
// Icons
import Homeicon from '@material-ui/icons/Home';
import Backarrow from '@material-ui/icons/ArrowBack';

const FormStyling = styled.form`
display: block;
`
const InputStyling = styled.input`
display: block;
margin-bottom: 10px;
text-decoration: none;
background-color: none;
border: none;
width: 175px;
height: 25px;
background-color: #FFCAD4;
`
const Signin = styled.button`
outline: 0;
width: 200px;
height: 60px;
background-color: #C08497;
cursor: pointer;
border: none;
border-radius: 15px 5px;
text-decoration: none;
color: black;
transition: .5s;

:hover {
    background-color: #bf4068;
    opacity: .9;
    color: black;
}
@media (max-width: 400px) {
    width: 100px;
    height: 40px;
    margin-left: 35px;


  }

`
const LabelStyling = styled.label`
    display: block;
`
const Homediv = styled.div`
width: 500px;
height: 500px;
flex-direction: column;
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 400px) {
    height: 240px;


  }
`
const Welcomer = styled.h1`
font-size: 48px;
margin-bottom: 25px;
margin-right: 20px;

@media (max-width: 400px) {
    margin-bottom: 0px;
    margin-left: 20px;
  }

`
const SignUpSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  console.log(data.get('username'), data.get('password'), data.get('password-confirm'))
  axios.post('http://localhost:8000/api/registration', {
    'username': data.get('username'),
    'password1': data.get('password'),
    'password2': data.get('password-confirm'),
  })
  .then(res => {
    const token = res.data.key;

    localStorage.setItem('jwt', token);
    this.props.history.push('/');
  })
  .catch(error => {
    console.log(error)
  })
}


const SignUp = () => {
    return(
        <Homediv>
            <Link to='/'>
            <Backarrow style={{fontSize:'24px', color:'black'}}></Backarrow>
            </Link>
            <Welcomer> Sign Up</Welcomer>
            <Link to="/Classes" style={{color: 'black'}}>
            <Homeicon />
            </Link>
            <FormStyling className="sign-up" onSubmit={SignUpSubmit}>
                <LabelStyling htmlFor='username'> Email </LabelStyling>
                <InputStyling type='text' name='username' id='username' required='true'/>

                <LabelStyling htmlFor='password'> Password </LabelStyling>
                <InputStyling type='password' name='password' id='password' required='true'/>

                <LabelStyling htmlFor='password-confirm'> Confirm Password </LabelStyling>
                <InputStyling type='password' name='password-confirm' id='password-confirm' required='true'/>

                <Signin>Submit</Signin>
            </FormStyling>
        </Homediv>
)
}

export default SignUp;
