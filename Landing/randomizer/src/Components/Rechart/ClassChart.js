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
      id:this.props.Data['classID']
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
        students.map((one, index ) => {
          let percentage = this.state.percentage;
          let obj = {
            name: `${one['studentName']}`,
            Participated: one['participation']['P'],
            Declined: one['participation']['NP']
            }
          this.state.dataBox.push(obj)
          this.state.total = this.state.total + one['participation']['P'] + one['participation']['NP']
          this.state.part = this.state.part + one['participation']['P']
          this.state.percentage = Math.round((this.state.part/this.state.total) * 100)
        })
        return this.state.dataBox;
      }
    }

    routeToRandom = (e) => {
      e.preventDefault()
      localStorage.setItem('classID', this.state.id)
      this.props.history.push('/Random')
    }

    deleteClass = (e) => {
      console.log('id is here', this.state.id)
      e.preventDefault()
      axios.delete('https://labs8randomizer.herokuapp.com/clss/deleteclass', {data: {'classID': this.state.id}})
      .then (
        window.location.reload()
      )
    }



          render() {
     return  (
        <div>
          <Graphbox onClick={this.handleSubmit}>
            <ResponsiveContainer  width="100%" height={200} >
              <BarChart style={{cursor: 'pointer'}} data={this.dataList()} margin={{top: 5, right: 5, left: 5, bottom: 5}} title={this.state.cl}>
                <XAxis dataKey="name"/>
                <YAxis style={{cursor: 'pointer'}} />
                <CartesianGrid tyle={{cursor: 'pointer'}} />
                <Tooltip style={{cursor: 'pointer'}}/>
                <Legend style={{cursor: 'pointer'}} />
                <Bar dataKey="Participated" fill="Green"  style={{cursor: 'pointer'}} />
                <Bar dataKey="Declined" fill="Red" style={{cursor: 'pointer'}} />
              </BarChart>
            </ResponsiveContainer>
            <h1>{this.state.cl}</h1>
            <h3>Students Enrolled: {this.state.number}</h3>
            <h3> Class Participation Percentage: {this.state.percentage}% </h3>
            <button onClick={this.routeToRandom}>Start Randomizer</button>
            <button onClick={this.deleteClass}>Delete the Class</button>
          </Graphbox>
        </div>
     )
   }
 }
 export default Chartprop;
