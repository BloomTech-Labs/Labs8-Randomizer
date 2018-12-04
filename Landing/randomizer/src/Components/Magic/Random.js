// Libraries
import React, {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';


// Components
import Chart from '../Rechart/Charts';
import StudentChart from '../Rechart/StudentChart';
import Chartprop from '../Rechart/ClassChart';
const Outmostbox = styled.div`
font-family:'Raleway', sans-serif;
display: flex;

width: 900px;
border: 1px solid red;
height: 600px;
border: 10px solid #E2E4F6;
border-radius: 5px;
background-color: white;
padding-top: 15px;
justify-content: start;

flex-direction: column;
margin-left: 150px;
@media (max-width: 1024px) {
  width: 600px;
  
}
@media (max-width: 400px) {
    width: 200px;
    height: 225px;
    margin-left: 75px;
    position: absolute;
    justify-content: start;
  }

`
const Secondbox = styled.div`
display: flex;
justify-content: center;
justify-content: space-evenly;
width: 900px;

height: 70px;
@media (max-width: 1024px) {
  
  width: 600px;
}
@media (max-width: 400px) {
    flex-direction:row;
    width: 150px;
    margin-left: 25px;
    
  }

`
const Mainbox = styled.div`
display: flex;
justify-content: center;
width: 900px;

height: 160px;
margin-top: 10px;
@media (max-width: 1024px) {
  width: 600px;
  
}
@media (max-width: 400px) {
   width: 200px;
  }
`

const Graphbox = styled.div`
display: flex;
text-align: center;
justify-content: space-around;
align-items: center;
width: 900px;

height: 200px;
@media (max-width: 1024px) {
  width: 375px;
  justify-content: start;

  
}
@media (max-width: 400px) {
    width: 200px;
  }
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
@media (max-width: 400px) {
    width: 75px;
    height: 20px;
    font-size: 12px;
   margin-right: 10px;
   
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
@media (max-width: 400px) {
    width: 75px;
    height: 20px;
    font-size: 12px;
    
  }
`
const Misc = styled.p`
margin-left: 425px;
@media (max-width: 1024px) {
  margin-left: 280px;
  
}
@media (max-width: 400px) {
    margin-left: 80px;
  }
`
const Welcomer = styled.h1`
margin-left: 390px;
color: #232323;
@media (max-width: 1024px) {
  margin-left: 235px;
  
}
@media (max-width: 400px) {
    font-size: 24px;
    margin-left: 55px;
  }
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
@media (max-width: 1024px) {
  margin-left: 135px;
  
}
@media (max-width: 400px) {
    width: 75px;
    height: 30px;
    font-size: 12px;
    margin-left: 245px;
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
background-color: #F7947B;
transition: .5s;
position: absolute;
margin-left: 380px;
font-size: 16px;

:hover {
    background-color: #f0623e;
    
}
@media (max-width: 1024px) {
  
  
}
@media (max-width: 400px) {
    width: 75px;
    height: 30px;
    font-size: 12px;
    position: static;
    margin-left: 50px;
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
z-index: +1;
@media (max-width: 400px) {
    width: 150px;
    height: 40px;
    font-size: 12px;
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
        this.handleClass()
        localStorage.clear();
        
    }

    handleClass = e => {
            
        axios
          .post('http://localhost:8000/clss/list_students', {classID:"bab9e1ac-90b8-48ce-b5b9-c08f73f62774"})

          .then(res => {
            
            var students = JSON.parse(res.data)  
            console.log('res', res.data) 
            console.log('typetest', students)
            var newarray = students['studentNames']
            console.log('newarr', newarray)

            newarray.map(name => {
            this.state.studentnamearray.push(name)
               console.log('studentarray',this.state.studentnamearray)
            })
            this.setState({classinfo: students['class_name']})
            console.log('stater', this.state.studentnamearray)
          })
          
          .catch(err => {
            
          });
          
      };
      handleParticipationGraph = e => {
    
        let valid = localStorage.getItem('studentID')
        
        axios
          .post('http://localhost:8000/clss/participation_list', {'studentID': valid})

          .then(res => {
            
            
            var myobj2 = JSON.parse(res.data)
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
          .post('http://localhost:8000/clss/participate',  {
            "studentID": localStorage.getItem("studentID"), 
          "particpated":'True', 
          } )
        
          .then(res => {
            
          })
          
          .catch(err => {
            
          });
          console.log('participated')
      };





      Declinehandler = e => {
        
        const mail = {"class_name": this.state.class_name}
        axios
          .post('http://localhost:8000/clss/participate',  {
            "studentID": localStorage.getItem("studentID"), 
          "particpated":'False', 
          } )
        
          .then(res => {
            
          })
          
          .catch(err => {
            
          });
          console.log('declined')
      };

 Shufflehandler =() => {
    this.setState({P:0, NP:0})
    const randomnum = Math.floor(Math.random() * this.state.studentnamearray.length);
    this.setState({Student: this.state.studentnamearray[randomnum]['fullName']})
    localStorage.setItem('studentID', this.state.studentnamearray[randomnum]['studentID'].toString());
     this.handleParticipationGraph();
     console.log('SHUFFLER')
    
 }
 
 

 Edithandler = () => {
    console.log('Edited')
    this.props.history.push('/Class')
 }

 Resethandler = () => {
    console.log('Reset')
    window.location.reload()
 }
    render() {
        
        return (
            
    <Outmostbox>
<Misc>{this.state.classinfo}</Misc>

        <Secondbox>
                
            <Part onClick={this.Participatehandler}>Participated</Part>

            

            <Dec onClick={this.Declinehandler}>Declined</Dec>

            
        </Secondbox>
        <Welcomer>{this.state.Student}</Welcomer>
        <Mainbox>
       

                <Bigbutton onClick={this.Shufflehandler}>Randomize!</Bigbutton>
        </Mainbox>



        

        <Graphbox>
        <Edit onClick={this.Edithandler}>Edit Class</Edit>
                <Reset onClick={this.Resethandler}>Reset 'All Go'</Reset>
                
                  
                  <StudentChart  P={this.state.P}  NP={this.state.NP}/>
             

              {/* <Chartprop  Rates={this.state.PartRates} Dates={this.state.Dates}> </Chartprop> */}

        </Graphbox>
    </Outmostbox>
            
        )
    }
}
export default Magic;
