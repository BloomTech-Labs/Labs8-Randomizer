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
width: 200px;
height: 30px;
border: 1px solid black;
:: placeholder {
  color: black;
}
padding-left: 10px;

`
const Signin = styled.button`
width: 150px;
height: 40px;
background-color: #00E1F5;
cursor: pointer;
border: none;

text-decoration: none;
margin-left: 30px;
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
const LabelStyling = styled.label`
    display: block;
`
const Homediv = styled.div`
width: 500px;
height: 300px;
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
  axios.post('https://labs8randomizer.herokuapp.com/api/registration', {
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
                <LabelStyling htmlFor='username'>  </LabelStyling>
                <InputStyling type='text' name='username' id='username' placeholder='Username' required='true'/>

                <LabelStyling htmlFor='password'> </LabelStyling>
                <InputStyling type='password' name='password' id='password' placeholder='Password' required='true'/>

                <LabelStyling htmlFor='password-confirm'> </LabelStyling>
                <InputStyling type='password' name='password-confirm' id='password-confirm' placeholder='Confirm Password' required='true'/>

                <Signin>Submit</Signin>
            </FormStyling>
        </Homediv>
)
}

export default SignUp;
