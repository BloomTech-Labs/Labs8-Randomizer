// Libraries
import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
// Icons
import Homeicon from '@material-ui/icons/Home';

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

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Sidebar = styled.div`
ul {
    list-style-type: none;
    li {
        text-decoration:none;
    }
}
`
const Welcomer = styled.h1`
margin-bottom: 125px;
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