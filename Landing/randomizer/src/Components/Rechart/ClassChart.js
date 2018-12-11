import React, {Component} from 'react';
import { YAxis, XAxis, CartesianGrid, BarChart,  Bar, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import styled from 'styled-components';
import axios from 'axios'

const Graphbox = styled.button`
cursor: pointer;
text-decoration: none;
background: none;
z-index: -1;
display: block;
outline: 0;
font-family:'Raleway', sans-serif;
margin-bottom: 10px;
`

const Graphbutton = styled.button`
text-decoration: none;
background-color: #72CBD3;

font-family:'Raleway', sans-serif;
border: 1px solid grey;
margin-left: 5px;
margin-right: 5px;
margin-bottom: 5px;
cursor: pointer;
transition: .3s;
color: black;
padding: 5px 5px;
:hover {
  color: white;
}
`
 class Chartprop extends Component {
  constructor(props) {
    super(props);
    this.state={
      dataBox: [],
      part: 0,
      total: 0,
      percentage: 0,
      cl: this.props.Data['className'],
      number: this.props.Data['studentsInfo'].length,
      id:this.props.Data['classID'],
      isHidden: true
    }
  }



    dataList = () => {
      console.log('what is in props', this.props)

      if (this.props.Data === undefined || this.props.Data['studentsInfo'].length===0) {
        return
      }
      else{
        console.log('checking students',this.props.Data['studentsInfo'])
      let students = this.props.Data['studentsInfo']
    students.map( (one, index )=> {
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
      if (this.state.total === 0){
        this.setState({isHidden: false},()=>{
          return
        })
      }
      else{
        return this.state.dataBox;
        }
      }
    }


    routeToRandom = (e) => {
      e.preventDefault()
      localStorage.setItem('classID', this.state.id)
      this.props.history.push('/Random')
    }

    deleteClass = (e) => {
      e.preventDefault()
      console.log('id is here', this.state.id)
      axios.delete('https://labs8randomizer.herokuapp.com/clss/deleteclass', {data: {'classID': this.state.id}})
      .then (res =>{
        console.log(res.data)
        window.location.reload()}

      )
    }



          render() {
     return  (

        <div>

          <Graphbox onClick={this.handleSubmit}>

        { this.state.isHidden &&
<ResponsiveContainer>
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
</ResponsiveContainer>
}
<h1>{this.state.cl}</h1>
<h3>Students Enrolled: {this.state.number}</h3>
<h4> Class Participation Percentage: {this.state.percentage}% </h4>
<Graphbutton onClick={this.routeToRandom}>Start Randomizer</Graphbutton>
<Graphbutton onClick={this.deleteClass}>Delete Class</Graphbutton>
</Graphbox>

    </div>
     )
          }
 }
 export default Chartprop;
