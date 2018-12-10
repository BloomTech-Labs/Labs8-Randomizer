// Libraries
import React, {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';


// Components
import Chart from '../Rechart/Charts';
import StudentChart from '../Rechart/StudentChart';
import Chartprop from '../Rechart/ClassChart';
import Class from '../Classes/Class';

const Maindiv = styled.div`
background-color: rgba(255,255,255,.9);
display: flex;
width: 500px;
height: 600px;
padding-left: 15px;
border-radius: 7px;

border: 3px solid #dfece6;
flex-direction: column;
@media (max-width: 400px) {
  margin-left: 120px;
  border: none;
  background-color: none;
  margin-top: 25px;
}
`

const Classdiv = styled.div`
display: flex;
width: 300px;
height: 100px;
justify-content: space-between;
flex-direction: row;
margin-top: 25px;
align-content: center;
`

const Namediv = styled.div`
display: flex;
width: 200px;
height: 150px;
margin-top: 0px;
`

const Chartdiv = styled.div`
display: flex;
width: 400px;
height: 200px;
position: absolute;
margin-top: 100px;
margin-left: 150px;
`
const Buttondiv = styled.div`
display: flex;
width: 250px;
height: 75px;

z-index: +1;
`
const Title = styled.h1`
font-size: 50px;
height: 40px;
margin-bottom: 0px;
@media (max-width: 400px) {
  margin-bottom: 0px;
  font-size: 40px;
  text-decoration: underline;
  
}

`
const Misc = styled.h1`
margin-top: 0px;
font-size: 40px;
margin-right: 25px;
@media (max-width: 400px) {
  margin-right: 15px;
  font-size: 35px;
}
`
const Part = styled.button`
outline: 0;
font-size: 20px;
width: 125px;
height: 40px;
text-decoration: none;
cursor: pointer;
margin-right: 15px;

color:black;
background-color: #4caf50;
border: none;
transition: .5s;
:hover {
   color: white;
    
}
`

const Dec = styled.button`
outline: 0;
font-size: 20px;
border: none;
width: 150px;
height: 40px;
text-decoration: none;
cursor: pointer;

color: black;
background-color: #E91E63;
transition: .5s;
:hover {
  color: white
    
}
`

const Edit = styled.button`
margin-top: 5px;
margin-right: 10px;
border: none;
width: 100px;
height: 36px;
text-decoration: none;
cursor: pointer;
color: black;
background-color: #F7947B;
transition: .5s;

:hover {
  color: white;
}
`

const Reset = styled.button`
margin-top: 5px;
border: none;
width: 100px;
height: 36px;
text-decoration: none;
cursor: pointer;
color: black;
background-color: #F7947B;
transition: .5s;

:hover {
  color: white
}
`
const Bigbutton = styled.button`
width: 250px;
height: 50px;
text-decoration: none;
cursor: pointer;
border: none;
background-color:#00E1F5;
color: black;

:hover {
  color: white;
}
`

class Magic extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
    this.state={
        studentnamearray: [],
        classinfo: "Class",
        Student: 'Student',
        PartRates: [],
        Dates: [],
        P: 0,
        NP: 0
    }
  }

    componentDidMount() {
      if (localStorage.getItem("classID")=== null) {
        alert('choose a class!')
        this.props.history.push('/ViewClasses')
      }
      else{
        if (localStorage.getItem("studentID")) {
          localStorage.removeItem("studentID")
        }
        this.handleClass()
      }
    }

    handleClass = e => {
        let id= localStorage.getItem('classID')
        axios
          .post('https://labs8randomizer.herokuapp.com/clss/list_students', {"classID":id})

          .then(res => {
            let data = res.data
            console.log('data',res.data)
            var newarray = data['studentNames']
            if (newarray.length === 0){
              alert('No students in Class, Add a Student')
              this.props.history.push('/Class')
            }

            newarray.map(name => {
            this.state.studentnamearray.push(name)
            this.setState({studentnamearray :this.state.studentnamearray})
            })
            this.setState({classinfo: data['class_name']})
            console.log('stater', this.state.studentnamearray)
          })

          .catch(err => {

          });

      };
      handleParticipationGraph = e => {

        let valid = localStorage.getItem('studentID')

        axios
          .post('https://labs8randomizer.herokuapp.com/clss/participation_list', {'studentID': valid})

          .then(res => {
            var myobj2 = res.data
            // console.log('myobj2',myobj2)

            // console.log('Dates', Object.keys(myobj2))
            // console.log('Ps and NPs',Object.values(myobj2) )
            this.setState({Dates: Object.keys(myobj2), PartRates: Object.values(myobj2)})
            // console.log('PartRates', this.state.PartRates)
            let P = 0;
            let NP = 0;
            this.state.PartRates.map((pnp, index) => {
              P += pnp['P'];
              NP +=pnp['NP'];

            })

            this.setState({P: P, NP: NP})
            console.log('PARTICIPATION')
            console.log('p', this.state.P)

          })


          .catch(err => {

          });


      };


      Participatehandler = e => {

        const mail = {"class_name": this.state.class_name}
        axios
          .post('https://labs8randomizer.herokuapp.com/clss/participate',  {
            "studentID": localStorage.getItem("studentID"),
          "particpated":'True',
          } )

          .then(res => {
            this.handleParticipationGraph();
          }
            )
          .catch(err => {

          });
          console.log('participated')
      };





      Declinehandler = e => {

        const mail = {"class_name": this.state.class_name}
        axios
          .post('https://labs8randomizer.herokuapp.com/clss/participate',  {
            "studentID": localStorage.getItem("studentID"),
          "particpated":'False',
          } )

          .then(res => {
            this.handleParticipationGraph();
          })

          .catch(err => {

          });
          console.log('declined')
      };

 Shufflehandler =() => {
  if (this.state.studentnamearray.length === 0){
    alert("All students have gone, Resetting Class")
    window.location.reload()
    if (localStorage.getItem("studentID")) {
      localStorage.removeItem("studentID")
  }}
    this.setState({P:0, NP:0})
    const randomnum = Math.floor(Math.random() * this.state.studentnamearray.length);
    this.setState({Student: this.state.studentnamearray[randomnum]['fullName']})
    localStorage.setItem('studentID', this.state.studentnamearray[randomnum]['studentID'].toString());
     this.handleParticipationGraph();
     this.state.studentnamearray.splice(randomnum,1)
     this.setState({studentnamearray: this.state.studentnamearray}, ()=>{
       if (this.state.studentnamearray.length === 0){
         alert("Last Student")
       }
     })
 }



 Edithandler = () => {
    console.log('Edited')
    localStorage.removeItem('studentID');
    console.log('what is history', this.props.history)
    this.props.history.push('/Class')
 }

 Resethandler = () => {
    console.log('Reset')
    localStorage.removeItem('studentID');
    window.location.reload()
 }
  render() {

      return (
        <React.Fragment>
        <Maindiv>
        <Title>Randomizer</Title>
                      
        
        
          <Classdiv id="Classdiv">
                  <Misc>{this.state.classinfo}</Misc>
                  <Edit onClick={this.Edithandler}>Edit Class</Edit>
                  <Reset onClick={this.Resethandler}>Reset 'All Go'</Reset>
           </Classdiv>   

            <Namediv>
                  <Misc>{this.state.Student}</Misc>
                   
            </Namediv>

            <Buttondiv>
                  <Part onClick={this.Participatehandler}>Participated</Part>
                  <Dec onClick={this.Declinehandler}>Declined</Dec>
                  </Buttondiv>
                  <Buttondiv>
                  <Bigbutton onClick={this.Shufflehandler}>Randomize!</Bigbutton>
                  
            </Buttondiv>  
            <Chartdiv id="Chart" >
            <StudentChart style={{marginTop:'0px'}}  P={this.state.P}  NP={this.state.NP}/>
            </Chartdiv>

            
            </Maindiv>
            
            </React.Fragment>
      )
  }
}
export default Magic;