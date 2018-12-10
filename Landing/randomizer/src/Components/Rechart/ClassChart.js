import React from 'react';
import { YAxis, XAxis, CartesianGrid, BarChart,  Bar, Tooltip, Legend, ResponsiveContainer, LabelList} from 'recharts';
import styled from 'styled-components';

const Graphbox = styled.button`
cursor: pointer;
text-decoration: none;
background: none;
z-index: -1;
display: block;
outline: 0;
`
 const Chartprop = props => {

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
            <ResponsiveContainer width="100%" height={200} onClick={handleSubmit}>
              <BarChart style={{cursor: 'pointer'}} data={dataList()}
                margin={{top: 5, right: 5, left: 5, bottom: 5}} title={cl}>
                <XAxis dataKey="name">
                </XAxis>
                <YAxis style={{cursor: 'pointer'}} />
                <CartesianGrid tyle={{cursor: 'pointer'}} />
                <Tooltip style={{cursor: 'pointer'}}/>
                <Legend style={{cursor: 'pointer'}} />
                <Bar dataKey="Participated" fill="Green"  style={{cursor: 'pointer'}}>
                  <LabelList dataKey="name" position="insideStart" angle="90"/>
                </Bar>
                <Bar dataKey="Declined" fill="Red" style={{cursor: 'pointer'}} />

              </BarChart>
            </ResponsiveContainer>
            <h1>{cl}</h1>
            <h3>Students Enrolled: {number}</h3>
            <h3> Class Participation Percentage: {percentage}% </h3>
        </div>
     )
 }
 export default Chartprop;
