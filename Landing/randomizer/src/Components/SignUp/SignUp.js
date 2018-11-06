import React from 'react';
import styled from 'styled-components';

import Homeicon from '@material-ui/icons/Home';

const FormStyling = styled.form`
display: block;
`
const InputStyling = styled.input`
display: block;
`
const LabelStyling = styled.label`
    display: block;
`
const Homediv = styled.div`
width: 500px;
height: 500px;
background-color: grey;
display: flex;
justify-content: center;
border-radius: 4px;
border: 1px solid skyblue;
`
// const StyledHomeIcon

const SignUp = () => {
    return(
        <Homediv>
            <Homeicon />
            <FormStyling className="sign-up" onSubmit={(event) => console.log(event)}>

                <LabelStyling htmlFor='username'> Email </LabelStyling>
                <InputStyling type='email' name='username' id='username' required='true'/>

                <LabelStyling htmlFor='password'> Password </LabelStyling>
                <InputStyling type='password' name='password' id='password' required='true'/>

                <LabelStyling htmlFor='password-confirm'> Confirm Password </LabelStyling>
                <InputStyling type='password' name='password-confirm' id='password-confirm' required='true'/>

                <InputStyling type="submit" value="Submit"/>

            </FormStyling>    
        </Homediv>
    )
}

export default SignUp;