// Libraries
import React, {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Components
import StudentChart from '../Rechart/StudentChart';

// Stylings
const Maindiv = styled.div`
background-color: rgba(255,255,255,.9);
display: flex;
width: 600px;
height: 500px;
padding-left: 15px;
border-radius: 7px;

border: 3px solid #dfece6;
flex-direction: column;

@media (max-width: 400px) {
  width: 300px;
  margin-left: 120px;
  border: none;
  background-color: none;
  margin-top: 0px;
}
`


const Namediv = styled.div`
display: flex;
width: 600px;
height: 150px;
margin-top: 15px;
justify-content: center;
`

const Orangediv = styled.div`
display: flex;
width: 580px;
height: 80px;
margin-top: 0px;
justify-content: space-between;
`
const Buttonholder = styled.div`
width: 200px;
display: flex;
height: 75px;

`
const Chartdiv = styled.div`
display: flex;
width: 400px;
height: 200px;
position: absolute;
margin-top: 115px;
margin-left: 165px;
@media (max-width: 400px) {
 margin-top: 225px;
 margin-left: 0px;
}
`
const Buttondiv = styled.div`
display: flex;
width: 600px;
height: 75px;
z-index: +1;
align-items: center;
justify-content: space-between;
margin-top: 25px;
`

const Misc = styled.h1`

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
width: 150px;
height: 40px;
text-decoration: none;
cursor: pointer;

color:black;
background-color: #4caf50;
border: none;
transition: .5s;
:hover {
   color: white;
    
}
@media (max-width: 400px) {
  margin-top: 80px;
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
margin-right: 15px;

:hover {
  color: white
}
@media (max-width: 400px) {
  margin-top: 80px;
}
`

const Edit = styled.button`


border: none;
width: 120px;
height: 36px;
text-decoration: none;
cursor: pointer;
color: black;
background-color: #F7947B;
transition: .5s;
z-index: +1;
margin-right: 10px;
margin-top: 25px;
:hover {
  color: white;
}
`

const Reset = styled.button`
margin-top: 5px;
border: none;
width: 120px;
height: 36px;
text-decoration: none;
cursor: pointer;
color: black;
background-color: #F7947B;
transition: .5s;
z-index: +1;
margin-top: 25px;
:hover {
  color: white
}
`
const Bigbutton = styled.button`
width: 250px;
height: 75px;
text-decoration: none;
cursor: pointer;
border: none;
background-color:#00E1F5;
color: black;
font-size: 36px;
:hover {
  color: white;
}
@media (max-width: 400px) {
  margin-top: 75px;
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
        
        <Orangediv>
        <Misc>{this.state.classinfo}</Misc>
          <Buttonholder>
        <Edit onClick={this.Edithandler}>Edit Class</Edit>
                  <Reset onClick={this.Resethandler}>Reset 'All Go'</Reset>  
                  </Buttonholder>
                  </Orangediv>
        
         

            <Namediv>
                  <Misc>{this.state.Student}</Misc>
                   
            </Namediv>

            <Buttondiv>
                
                  </Buttondiv>
                  <Buttondiv>
                  <Part onClick={this.Participatehandler}>Participated</Part>
                  <Bigbutton onClick={this.Shufflehandler}>Randomize!</Bigbutton>
                  
                  <Dec onClick={this.Declinehandler}>Declined</Dec>
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