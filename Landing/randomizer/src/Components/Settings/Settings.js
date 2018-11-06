import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

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
const Sidebar = styled.div`
ul {
    list-style-type: none;
    li {
        text-decoration:none;
    }
}
`

const Settings = () => {
    return(
        <Homediv>
            <Link to="/">
                <Homeicon />
            </Link>

            <Sidebar id="sidebar">
                <ul>
                    <li>
                        <Link to="/invoices">
                            Invoices
                        </Link>
                    </li>
                    <li>
                        <Link to="/Billing">
                             Billing
                        </Link>
                    </li>
                    <li>
                        <Link to="/Settings">
                            Settings
                        </Link>
                    </li>
                </ul>
            </Sidebar>

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