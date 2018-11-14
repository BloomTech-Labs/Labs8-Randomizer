// Libraries
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';


const Outmostbox = styled.div`
font-family:'Raleway', sans-serif;
display: flex;
justify-content: center;
width: 900px;
border: 1px solid red;
height: 500px;
border: 10px solid #E2E4F6;
border-radius: 5px;
background-color: #F7AF9D;
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
justify-content: center;
width: 900px;

height: 300px;
`
const Part = styled.button`
width: 150px;
height: 40px;
text-decoration: none;
cursor: pointer;
border-radius: 15px 5px;
color: #E6EBE0;
background-color: #4F6D7A;
border: none;
transition: .5s;
:hover {
    background-color: #B8BACF;
    opacity: .9;
    color: black;
}
`

const Dec = styled.button`
border: none;
width: 150px;
height: 40px;
text-decoration: none;
cursor: pointer;
border-radius: 5px 15px;
color: #E6EBE0;
background-color: #4F6D7A;
transition: .5s;
:hover {
    background-color: #B8BACF;
    opacity: .9;
    color: black;
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
background-color: #232323;
transition: .5s;
:hover {
    background-color: #B8BACF;
    opacity: .9;
    color: black;
}
`

const Reset = styled.button`
border: none;
width: 100px;
height: 40px;
text-decoration: none;
cursor: pointer;
border-radius: 15px 5px;
color: #E6EBE0;
background-color: #232323;
transition: .5s;
position: absolute;
margin-left: 380px;

:hover {
    background-color: #B8BACF;
    opacity: .9;
    color: black;
}
`
const Bigbutton = styled.button`
width: 300px;
height: 150px;
text-decoration: none;
cursor: pointer;
border-radius: 5px;
background-color: #232323;
color: white;
font-size: 24px;
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
        <Misc>Participation Rate Graph</Misc>
        </Graphbox>
            
     </Outmostbox>
            
        )
    }
}
export default Magic;