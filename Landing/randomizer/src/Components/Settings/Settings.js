// Libraries
import React from 'react';
import styled from 'styled-components';

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
        </Homediv>
    )
}

export default Settings;