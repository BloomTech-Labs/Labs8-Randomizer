// Libraries
import React from 'react';
import { YAxis, XAxis, CartesianGrid, BarChart,  Bar, Tooltip, Legend} from 'recharts';
import styled from 'styled-components';

// Stylings
const Graphbox = styled.button`
cursor: pointer;
text-decoration: none;
background: none;
z-index: -1;
display: block;
outline: 0;
`
 const Chartprop = props => {

   
    // const dataBox = [];
   
    // const dataList = () => {
    //   props.Data.map((stats, index) => {
        
    //     let obj = {
          
    //       Participated: Math.floor(Math.random() * 2000),
    //       name: `${stats}`,
    //       Declined: Math.floor(Math.random() * 2000),
    //     }
    //     dataBox.push(obj)
    //   })
    //   return dataBox;
    // }
  
    let cl = props.Data['className']
    let number = props.Data['studentsInfo'].length
    let id = props.Data['classID']
    let total = 0
    let part = 0
    let percentage = 0
    const dataBox = [];
    const dataList = () => {
      if (props.Data === undefined || props.Data['studentsInfo'].length===0) {
        return
      }
      else{
      let students = props.Data['studentsInfo']
    students.map( (one, index )=> {
      let obj = {
        name: `${one['studentName']}`,
        Participated: one['participation']['P'],
        Declined: one['participation']['NP'],
      }
      dataBox.push(obj)
      total = total + one['participation']['P'] + one['participation']['NP']
      part = part + one['participation']['P']
      percentage = Math.round((part/total) * 100)
      })
      return dataBox;}

    }
    
    const handleSubmit= () => {
      
        localStorage.setItem('classID', id)
          }

     return  (
     
        <div>
          
          <Graphbox onClick={handleSubmit}>

        <BarChart style={{cursor: 'pointer'}} width={400} height={300} data={dataList()}  
  margin={{top: 5, right: 5, left: 5, bottom: 5}} title={cl}>
  <XAxis dataKey="name"/>
    
  <YAxis style={{cursor: 'pointer'}} />
  <CartesianGrid tyle={{cursor: 'pointer'}} />
  <Tooltip style={{cursor: 'pointer'}}/>
  <Legend style={{cursor: 'pointer'}} />
  <Bar dataKey="Participated" fill="Green"  style={{cursor: 'pointer'}} />
  <Bar dataKey="Declined" fill="Red" style={{cursor: 'pointer'}} />
</BarChart>
<h1>{cl}</h1>
<h3>Students Enrolled: {number}</h3>
<h3> Class Participation Percentage: {percentage}% </h3>
</Graphbox>
        
    </div>
     )
 }
 export default Chartprop;

