import React, {Component} from 'react';
import { YAxis, XAxis, CartesianGrid, BarChart,  Bar, Tooltip, Legend} from 'recharts';


 const Chartprop = props => {

    let nameList = props.students;
    const dataBox = [];
    
    const dataList = () => {
      nameList.map(name => {
        let obj = {
          name: `${name.name}`,
          Participated: name.height,
          Declined: name.mass,
          amt: Math.floor(Math.random() * 2000)
        }
        dataBox.push(obj)
      })
      return dataBox;
    }

     return  (
     
        <div>
        <BarChart width={900} height={300} data={dataList()} style={{margin: '3rem auto 2rem'}}
  margin={{top: 5, right: 30, left: 20, bottom: 5}} >
  <XAxis dataKey="name"/>
  <YAxis/>
  <CartesianGrid />
  <Tooltip/>
  <Legend />
  <Bar dataKey="Participated" fill="#8884d8" />
  <Bar dataKey="Declined" fill="#82ca9d" />
</BarChart>
        
    </div>
     )
 }
 export default Chartprop