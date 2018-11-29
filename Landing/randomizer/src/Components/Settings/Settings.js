// Libraries
import React from 'react';
import styled from 'styled-components';


import {Link} from 'react-router-dom';
import axios from 'axios';
// Icons
import Homeicon from '@material-ui/icons/Home';


const FormStyling = styled.form`
display: block;
`
const InputStyling = styled.input`
display: block;
margin-bottom: 10px;
text-decoration: none;
background-color: #FFCAD4;
border: none;
width: 175px;
height: 25px;
transition: .4s;
:hover {
    background-color: #bf4068;
    color: white;
}
`
const VerifyStyling = styled.input`
display: block;
margin-bottom: 10px;
text-decoration: none;
background-color: #FFCAD4;
border: none;
width: 175px;
height: 25px;
transition: .4s;
:hover {
    background-color: #bf4068;
    color: white;
}
`
const LabelStyling = styled.label`
    display: block;
`
const Homediv = styled.div`
width: 500px;
height: 500px;

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Welcomer = styled.h1`
margin-bottom: 125px;
color: #72CBD3;
`
const AddNumber = (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  console.log(data.get('telephone'))
  //Need eventual work around to this solution https://github.com/axios/axios/issues/853#issuecomment-412922608
  axios.post(`${'https://cors-anywhere.herokuapp.com/'}https://api.authy.com/protected/json/phones/verification/start`, {
    "api_key":"IkZeWLzSDR7fxTh3JYLX3xv7T62G51nN",
    "via":"sms",
    "phone_number": data.get('telephone'),
    "country_code":"1"
  })
}

const Settings = () => {
    return(
        <Homediv>
            <Welcomer>Enter new Email/Password</Welcomer>



            <FormStyling className="sign-up" onSubmit={(event) => console.log(event)}>

                <LabelStyling htmlFor='username'> Email </LabelStyling>
                <InputStyling type='email' name='username' id='username' required='true'/>

                <LabelStyling htmlFor='password'> Old Password </LabelStyling>
                <InputStyling type='password' name='password' id='password' required='true'/>

                <LabelStyling htmlFor='password-confirm'> New Password </LabelStyling>
                <InputStyling type='password' name='password-confirm' id='password-confirm' required='true'/>

                <InputStyling type="submit" value="Save"/>

            </FormStyling>
            <FormStyling onSubmit={event => {
            AddNumber(event)}}>
              <div className="telephoneNumber">
                <LabelStyling htmlFor='telephone'> Telephone </LabelStyling>
                <InputStyling id='telephone' type="tel" name="telephone" placeholder="Ex: 123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                <InputStyling type="submit" value="Save" />
              </div>
              <VerifyStyling id='verify'  name='verify' placeholder="Verify"/>
            </FormStyling>
        </Homediv>
    )
}

export default Settings;
