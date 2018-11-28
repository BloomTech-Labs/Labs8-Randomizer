// Libraries
import React, {Component} from 'react';

import styled from 'styled-components';


// Components
import Chart from '../Rechart/Charts';

const Outmostbox = styled.div`
font-family:'Raleway', sans-serif;
display: flex;
justify-content: center;
width: 900px;
border: 1px solid red;
height: 750px;
border: 10px solid #E2E4F6;
border-radius: 5px;
background-color: white;
padding-top: 15px;
justify-content: start;

flex-direction: column;
margin-left: 150px;

`
const Secondbox = styled.div`
display: flex;
justify-content: center;
justify-content: space-around;
width: 900px;

height: 70px;

`
const Mainbox = styled.div`
display: flex;
justify-content: center;
width: 900px;

height: 160px;
margin-top: 10px;
`

const Graphbox = styled.div`
display: flex;
text-align: center;
justify-content: center;
align-items: center;
width: 900px;

height: 200px;
`
const Part = styled.button`
font-size: 20px;
width: 150px;
height: 40px;
text-decoration: none;
cursor: pointer;
border-radius: 15px 5px;
color: #E6EBE0;
background-color: #4caf50;
border: none;
transition: .5s;
:hover {
    background-color: #2d8630;
    
    
}
`

const Dec = styled.button`
font-size: 20px;
border: none;
width: 150px;
height: 40px;
text-decoration: none;
cursor: pointer;
border-radius: 5px 15px;
color: #E6EBE0;
background-color: #E91E63;
transition: .5s;
:hover {
    background-color: #d1084c;
    
    
}
`
const Misc = styled.p`
`
const Welcomer = styled.h1`
color: #232323;
`
const Edit = styled.button`
border: none;
width: 100px;
height: 40px;
text-decoration: none;
cursor: pointer;
border-radius: 15px 5px;
color: #E6EBE0;
background-color: #F7947B;
transition: .5s;
:hover {
    background-color: #f0623e;
    
}
font-size: 16px;
`

const Reset = styled.button`
border: none;
width: 100px;
height: 40px;
text-decoration: none;
cursor: pointer;
border-radius: 15px 5px;
color: #E6EBE0;
background-color: #F7947B;
transition: .5s;
position: absolute;
margin-left: 380px;
font-size: 16px;

:hover {
    background-color: #f0623e;
    
}
`
const Bigbutton = styled.button`
width: 300px;
height: 150px;
text-decoration: none;
cursor: pointer;
border-radius: 5px;
background-color:#2fd1df;
color: white;
font-size: 36px;
border: none;
`
class Magic extends Component {
    constructor() {
      super();
      this.state={
          studentname: "Student name",
          classinfo: "Class info"
      }
    }
 Shufflehandler =() => {
    console.log('Shuffled')
 }
 Participatehandler = () => {
    console.log('Participated')
 }

 Declinehandler = () => {
    console.log('Declined')
 }

 Edithandler = () => {
    console.log('Edited')
 }

 Resethandler = () => {
    console.log('Reset')
 }
    render() {
        return (
            
    <Outmostbox>

        <Secondbox>
                <Misc>{this.state.classinfo}</Misc>
            <Part onClick={this.Participatehandler}>Participated</Part>

            <Welcomer>{this.state.studentname}</Welcomer>

            <Dec onClick={this.Declinehandler}>Declined</Dec>

            <Edit onClick={this.Edithandler}>Edit</Edit>
        </Secondbox>

        <Mainbox>
                <Reset onClick={this.Resethandler}>Reset 'All Go'</Reset>

                <Bigbutton onClick={this.Shufflehandler}>Randomize!</Bigbutton>
        </Mainbox>

        <Graphbox>
        
        <Chart > </Chart>
        </Graphbox>
        
            
     </Outmostbox>
            
        )
    }
}
export default Magic;