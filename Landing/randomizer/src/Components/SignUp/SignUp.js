// Libraries
import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
// Icons
import Homeicon from '@material-ui/icons/Home';
import axios from  'axios';
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
`
const Welcomer = styled.h1`
font-size: 48px;
margin-bottom: 125px;
`
const SignUpSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  console.log(data.get('username'), data.get('password'), data.get('password-confirm'))
  axios.post('http://localhost:3000', {
    'username': data.get('username'),
    'password': data.get('password'),
    'password-confirm': data.get('password-confirm'),
  })
  .then(response => {
    console.log(response)
  })
  .catch(error => {
    console.log(error)
  })
}

const SignUp = () => {
    return(
        <Homediv>
            <Welcomer> Sign Up</Welcomer>
            <FormStyling className="sign-up" onSubmit={(event) => console.log(event)}>
            <Link to="/" style={{color: 'black'}}>
            <Homeicon />
            </Link>
            <FormStyling className="sign-up" onSubmit={SignUpSubmit}>

                <LabelStyling htmlFor='username'> Email </LabelStyling>
                <InputStyling type='email' name='username' id='username' required='true'/>

                <LabelStyling htmlFor='password'> Password </LabelStyling>
                <InputStyling type='password' name='password' id='password' required='true'/>

                <LabelStyling htmlFor='password-confirm'> Confirm Password </LabelStyling>
                <InputStyling type='password' name='password-confirm' id='password-confirm' required='true'/>

                <InputStyling type="submit" value="Submit"  />

            </FormStyling>
        </Homediv>
    )
}

export default SignUp;
