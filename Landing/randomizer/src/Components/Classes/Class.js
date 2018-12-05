// Libraries
import React, {Component} from 'react';

import styled from 'styled-components';
import axios from 'axios';
import Deleteicon from '@material-ui/icons/Delete';
import AlertDialog from './AlertDialog';
import ResetDialog from './ResetDialog';
import EditDialog from './EditDialog';
import Button from '@material-ui/core/Button';
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
  justify-content: space-between;
`
class Class extends Component {
    constructor() {
        super();
        this.state={
          class_name: '',
          studentList: [],
          lastName: '',
          firstName: '',
          alertOpen: false,
          alertTitle: '',
          resetOpen: false,
          studentList2: [],
          editOpen: false,
          newName: '',
          newLastName: ''
        }
    }

    componentDidMount() {
      this.loadStudents()
    }

handleChangeFile = event => {
const filename = event.target.files[0];
PapaParse.parse(filename,
          {header: false, complete: (results) =>
             {
               const unnested = []
               results.data.map( s => {unnested.push(s[0])})
                this.setState({studentList: unnested})
                this.setState({class_name: unnested[0]})
                console.log("state", this.state.studentList)
                axios.post('http://localhost:8000/clss/csv_post', {"class_name" : this.state.class_name, "studentArray": this.state.studentList}, {
                  headers: {
                    "Authorization": "Token 6374f12dc312afc256d2c3f52249ef5211d38913"
                  }
                })
                .then(res => {
                  let parsed = JSON.parse(res.data)
                  this.setState({studentList: parsed['studentArray']}, () => {
                    console.log("state in .then", this.state.studentList)
                    this.handleDisplay()
                  })
                  localStorage.setItem('classID', parsed['classID'])
                  })
                .catch(err => {console.log(err)})
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
            "lastName":this.state.lastName,
          })
          .then(res => {
            console.log('resdata', res.data['studentID'])
            console.log('studentlist', this.state.studentList)
            let fullName = `${this.state.firstName} ${this.state.lastName}`;
            console.log('fullname', fullName)
            // this.state.studentList.push({'fullName': fullName, 'studentID': res.data['studentID']})
            this.setState({studentList: [...this.state.studentList, {'fullName': `${this.state.firstName} ${this.state.lastName}`, 'studentID': res.data['studentID']}]},
            ()=>{this.secondDisplay()})
          })
          .catch(err => {
          });
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

alertDialog = (dialog, title, key) => {
  this.setState({
    [dialog]: true,
    title: title,
    ind: key
  })
}
editDialog = (dialog, title, key) => {
  this.setState({
    [dialog]: true,
    title: title,
    ind: key
  })
}

handleClickOpen = (dialog) => {
  this.setState({ [dialog]: true });
};
handleClose = (dialog, ind) => {
  console.log('i want the key value', ind)
  let student = this.state.studentList[ind]
  let studentID = student['studentID']
  axios
  .delete('http://localhost:8000/clss/deletestudent',{
  data: {"studentID": studentID.toString()}
  })
  .then( res => {
    this.state.studentList.splice(ind,1)
    this.setState({studentList: this.state.studentList, studentList2: [] },() => {
      this.handleDisplay()
    })

  }
  )
  this.setState({ [dialog]: false });

};
handleEdit = (dialog, ind) => {
  console.log('index', ind)
  let student = this.state.studentList[ind]
  let studentID = student['studentID']
  if(this.state.newName || this.state.newLastName){
    axios.post('http://localhost:8000/clss/updatestudent', {
        "student_name_first": this.state.newName,
        "student_name_last": this.state.newLastName,
        "studentID": studentID
    })
    .then(res => {
      this.state.studentList[ind]['fullName'] = `${this.state.newName} ${this.state.newLastName}`
      this.setState({[dialog]: false, newName: '', newLastName: '', studentList: this.state.studentList, studentList2: []}, () => {this.handleDisplay()})
    })
  }
}
handleNewName = (e) => {
  this.setState({[e.target.name]: e.target.value})
}
handleDisplay = e => {
  for (let i = 0; i < this.state.studentList.length; i++){
    let s = this.state.studentList[i]
    let t = s['fullName']
  console.log('t', t)
    this.state.studentList2.push(
      <NameItem key={i}>
       <Deleteicon onClick={() => this.alertDialog('alertOpen', `${t}`, i)}/> {t}
         <Button style={{marginTop: 'auto', width: '45%'}} color="primary" onClick={() => this.alertDialog('editOpen', `${t}`, i)}>
           Edit Name
         </Button>
       </NameItem> )
    this.setState({studentList2: this.state.studentList2})
  }
    console.log('sL2', this.state.studentList2)
}

secondDisplay = e => {

  let inc = this.state.studentList.length -1
  for (let i = inc; i < this.state.studentList.length; i++){
  console.log('test', i)
  let s = this.state.studentList[i]
  console.log('s', s)
  // this.state.studentList2.push(<NameItem key={i}> <Deleteicon onClick={() => this.alertDialog('alertOpen', `${this.state.studentList[i]['fullName']}`)}/> {this.state.studentList[i]['fullName']} </NameItem>)
  this.setState({studentList2:[...this.state.studentList2,
    <NameItem key={i}>
     <Deleteicon onClick={() => this.alertDialog('alertOpen', `${this.state.studentList[i]['fullName']}`, i)}/> {this.state.studentList[i]['fullName']}
       <Button style={{marginTop: 'auto', width: '45%'}} color="primary" onClick={() => this.alertDialog('editOpen', `${this.state.studentList[i]}`, i)}>
         Edit Name
       </Button>
     </NameItem> ]})

  console.log('loop state', this.state.studentList2)
  }
}

loadStudents = e => {
  axios
  .post('http://localhost:8000/clss/list_students', {"classID": localStorage.getItem('classID')} )
  .then(res => {
    console.log('loadres', res.data)
    let son = JSON.parse(res.data)
    console.log('son', son['studentNames'])
    if (son['studentNames'].length > 0){
    son['studentNames'].map(name => {
      this.state.studentList.push(name)
    })
    console.log('sanity check', this.state.studentList)
  this.handleDisplay()}
  })
}
    render() {
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
                <Part onClick={() => this.alertDialog('resetOpen')}> Reset Participation</Part>
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
                {this.state.studentList2}
              </NameGrid>
              <AlertDialog open={this.state.alertOpen} title={this.state.title} ind={this.state.ind} handleClose={() => this.handleClose('alertOpen', this.state.ind)} handleClickOpen={() => this.handleClickOpen('alertOpen')}/>
              <ResetDialog open={this.state.resetOpen} handleClose={() => this.handleClose('resetOpen')} handleClickOpen={() => this.handleClickOpen('resetOpen')}/>
              <EditDialog newLastName={this.state.newLastName} ind={this.state.ind} newName={this.state.newName} open={this.state.editOpen} title={this.state.title} editClose={() => this.handleEdit('editOpen', this.state.ind)} handleClickOpen={() => this.handleClickOpen('editOpen')} handleNewName={this.handleNewName}/>
            </Editmain>
        )
    }
}
export default Class;
