//Libraries
import React, {Component} from 'react';
import styled from 'styled-components';

const Homediv = styled.div`
width: 500px;
height: 250px;
background-color: none;
display: flex;
justify-content: center;
flex-wrap: wrap;
border-radius: 4px;
align-items: center;
flex-direction: column;
margin-top: 100px;
`



class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PartRates: [],
            Dates: [],
            P: 0,
            NP: 0
           
        }
    }
     
    render() {
        
        return (
            <Homediv>
  
            </Homediv>
            

        )
        
    }
}
export default Chart;