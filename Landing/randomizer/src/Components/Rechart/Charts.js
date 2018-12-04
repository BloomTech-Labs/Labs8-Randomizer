//Libraries
import React, {Component} from 'react';
import styled from 'styled-components';
// Components


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
const Declined = styled.h1`
color: #ec1111;
position: absolute;

z-index: +1;
margin-bottom: 100px;
`
const Participated = styled.h1`
color: #0ee77b;
position: absolute;
margin-top: 115px;
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
    // componentDidMount() {
    //     this.handleSubmitter()
    //   }
      // componentDidUpdate() {
      //   this.handleSubmitter()
      // }






    render() {

        return (
            <Homediv>


              {/* <Chartprop  Rates={this.state.PartRates} Dates={this.state.Dates}></Chartprop> */}



            {/* <Declined> % Declined </Declined>
            <Participated> % Participated </Participated> */}




            </Homediv>


        )

    }
}
export default Chart;
