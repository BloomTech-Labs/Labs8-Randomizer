// Libraries
import React, {Component} from 'react';

import styled from 'styled-components';
import axios from 'axios';
import Deleteicon from '@material-ui/icons/Delete';
const PapaParse = require('papaparse/papaparse.min.js');


const Editmain = styled.div`
font-family:'Raleway', sans-serif;
display: flex;
justify-content: center;
width: 900px;
border: 1px solid red;
height: 500px;
border: 10px solid #E2E4F6;
border-radius: 5px;
background-color: white;

justify-content: start;

flex-direction: column;
margin-left: 150px;

`

const Welcomer = styled.h1`
margin-left: 5px;
`
const Headtag = styled.div`
display: flex;
justify-content: left;
width: 400px;
height: 60px;

color: #72CBD3;

`
const Editname = styled.input`
margin-left: 10px;
text-decoration: none;
width: 175px;
height: 25px;
background-color: #FFCAD4;
border: 1px solid grey;
transition: .4s;
color: black;
margin-top: 15px;
margin-right: 15px;
:hover {
    background-color: #bf4068;
    :: placeholder {
        color: white;
    }
}
:: placeholder {
    color: black;
    font-family: 'Raleway', sans-serif;
}

`
const Part = styled.button`
font-size: 16px;
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
const Firstlevel = styled.div`
width: 1000px;
height: 80px;
justify-content: center;
flex-direction: row;
justify-content: right;

`
const Secondlevel = styled.div`
width: 1000px;
height: 80px;
justify-content: center;
flex-direction: row;
justify-content: right;

`
const Dec = styled.button`
font-size: 16px;
border: none;
width: 150px;
height: 40px;
text-decoration: none;
cursor: pointer;
border-radius: 5px 15px;
color: #E6EBE0;
background-color: #E91E63;
margin-right: 15px;
transition: .5s;
:hover {
    background-color: #d1084c;


}
`
const Add = styled.button`
border: none;
width: 100px;
height: 40px;
text-decoration: none;
cursor: pointer;
border-radius: 10px 5px;
color: black;
background-color: cyan;
transition: .5s;
:hover {
    background-color: lightblue;
}
margin-right: 10px;
`
const Import = styled.label`
align-items: flex-start
display: inline-block;
border: none;
width: 150px;
height: 40px;
text-decoration: none;
cursor: pointer;
border-radius: 10px 5px;
color: white;
background-color: black;
transition: .5s;
margin-bottom: 75px;
:hover {
    background-color: grey;
}
`
const CsvStyling = styled.input`
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
  `
const NameGrid = styled.div`
width: 100%;
margin-left: auto;
margin-right: auto;
display: grid;
grid-template-columns: repeat(4, auto);
grid-template-rows: repeat(1, auto);
`
const NameItem = styled.div`
display: flex;
border: solid 1px pink;
align-items: center;
`

class Class extends Component {
    constructor() {
        super();
        this.state={
          class_name: '',
          studentList: ['', 'Joe bob', 'Sally Mae', 'Jordan Michael', ''],
          lastName: '',
          firstName: ''
        }
    }

handleChangeFile = event => {
      const filename = event.target.files[0];
PapaParse.parse(filename,
          {header: false, complete: (results) =>
             {
                this.setState({studentList: results.data})
             }
           })
    };

    createClass = e => {

        const mail = {"class_name": this.state.class_name}
        axios
          .post('http://localhost:8000/clss/create_class', {"class_name": this.state.class_name}, {



              headers: {
            'Authorization': 'Token 6374f12dc312afc256d2c3f52249ef5211d38913'

        }})

          .then(res => {
            localStorage.setItem('classID',res.data.id)
            console.log(res.data)
          })

          .catch(err => {

          });
          console.log('Create')
          console.log('class',)
      };

      addStudent = e => {

        const mail = {"class_name": this.state.class_name}
        axios
          .post('http://localhost:8000/clss/add_student',  {
            "classID": localStorage.getItem("classID"),
          "firstName":this.state.firstName,
          "lastName":this.state.lastName} )

          .then(res => {


          })

          .catch(err => {

          });
          console.log('Create')
          console.log('class',)
          this.setState({class_name:''})
      };

      handleInput = e => {
        const {value} = e.target;
        this.setState({ class_name: value });
      };
      studentInput= e => {
          const {value} = e.target;
          this.setState({firstName: value})
      }
      studentInput2 = e => {
        const {value} =e.target;
        this.setState({lastName: value})
      }

    render() {
      let studentList = [];
      for (let i = 1; i < this.state.studentList.length - 1; i++){
        studentList.push(<NameItem key={i}> <Deleteicon /> {this.state.studentList[i]} </NameItem>)
      }
        return (
            <Editmain>

            <Headtag>
                <Welcomer>Create or Edit a Class</Welcomer>
            </Headtag>

            <Firstlevel>

            <Editname type="text" placeholder="Class Name" onChange={this.handleInput}
            value={this.state.class_name}></Editname>
            <Dec onClick={this.createClass}>Create a Class</Dec>
            <Dec>Track Participation</Dec>
            <Part> Reset Participation</Part>


            </Firstlevel>

            <Secondlevel>

            <Editname type="text" placeholder="First Name" onChange={this.studentInput}
            value={this.state.firstName}></Editname>
            <Editname type="text" placeholder="Last Name" onChange={this.studentInput2}
            value={this.state.lastName}></Editname>
            <Add onClick={this.addStudent}> Add Student</Add>
            <CsvStyling type='file' id="file" accept="text/csv" onChange={e => this.handleChangeFile(e)}/>
            <Import htmlFor="file">Import CSV</Import>

            </Secondlevel>
            <NameGrid>
              {studentList}
            </NameGrid>
            </Editmain>
        )
    }
}
export default Class;
