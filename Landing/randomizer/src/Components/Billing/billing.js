import React, {Component} from 'react';
import styled from 'styled-components';

import Checkout from '../Billing/Checkout';

const Payer = styled.div`
width: 500px;
height: 40px;
background-color: none;
display: flex;
justify-content: center;
border-radius: 4px;
font-size: 26px;
`
const Welcomer = styled.h1`
position: absolute;
color: #72CBD3;
@media (max-width: 400px) {
   
    font-size: 36px;
  }
`

const Checker = styled.div`
position: absolute;
margin-top: 100px;
@media (max-width: 400px) {
   margin-top: 200px;
  }
`
class Billing extends Component {
    
    render() {
       
        return (
        <Payer> 
               <Welcomer>Upgrade to a PREMIUM Randomizer Membership</Welcomer>
            <Checker>
            <Checkout
           name={'Stripe Component'}
           description={'Gimme $$$'}
           amount={1}
         />
         </Checker>
        </Payer>
        )
    }
}
export default Billing;