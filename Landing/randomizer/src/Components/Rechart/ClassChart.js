import React, {Component} from 'react';
import { YAxis, XAxis, CartesianGrid, BarChart,  Bar, Tooltip, Legend} from 'recharts';
import styled from 'styled-components';

const Graphbox = styled.button`
cursor: pointer;
text-decoration: none;
background: none;
z-index: -1;
display: block;
outline: 0;
`
 class Chartprop extends Component {
  constructor(props) {
    super(props);
    this.state={
      dataBox: [],
      part: 0,
      total: 0, 
      percentage: 0,
      cl:'',
      number: 0,
      id:''
    }
  }
    
  componentDidMount() {
    this.setState({cl: this.props.Data['className']})
    this.setState({number: this.props.Data['studentsInfo']})
    this.setState({id: this.props.Data['classID']})
  }
    

    // let cl = props.Data['className']
    // let number = props.Data['studentsInfo'].length
    // let id = props.Data['classID']
    // let total = 0
    // let part = 0
    // let percentage = 0
    // const dataBox = [];
    
    
    dataList = () => {
      

      if (this.props.Data === undefined || this.props.Data['studentsInfo'].length===0) {
        return
      }
      else{
      let students = this.props.Data['studentsInfo']
    students.map( (one, index )=> {
      let percentage = this.state.percentage;

      let obj = {
        name: `${one['studentName']}`,
        Participated: one['participation']['P'],
        Declined: one['participation']['NP'],
      }
      this.state.dataBox.push(obj)
      this.state.total = this.state.total + one['participation']['P'] + one['participation']['NP']
      this.state.part = this.state.part + one['participation']['P']
      this.state.percentage = Math.round((this.state.part/this.state.total) * 100)
      })
      return this.state.dataBox;}

    }
    


     handleSubmit= () => {
      
        localStorage.setItem('classID', this.state.id)
          }

          render() {
     return  (
     
        <div>
          
          <Graphbox onClick={this.handleSubmit}>

        <BarChart style={{cursor: 'pointer'}} width={400} height={300} data={this.dataList()}  
  margin={{top: 5, right: 5, left: 5, bottom: 5}} title={this.state.cl}>
  <XAxis dataKey="name"/>
    
  <YAxis style={{cursor: 'pointer'}} />
  <CartesianGrid tyle={{cursor: 'pointer'}} />
  <Tooltip style={{cursor: 'pointer'}}/>
  <Legend style={{cursor: 'pointer'}} />
  <Bar dataKey="Participated" fill="Green"  style={{cursor: 'pointer'}} />
  <Bar dataKey="Declined" fill="Red" style={{cursor: 'pointer'}} />
</BarChart>
<h1>{this.state.cl}</h1>
<h3>Students Enrolled: {this.state.number}</h3>
<h3> Class Participation Percentage: {this.state.percentage}% </h3>
</Graphbox>
        
    </div>
     )
          }
 }
 export default Chartprop;

