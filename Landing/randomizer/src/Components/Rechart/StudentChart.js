import React, {Component} from 'react';
import styled from 'styled-components';
import {  PieChart, Pie,  Cell} from 'recharts';


 const StudentChart= props => {
     
const data = [{ value: parseInt(props.numbers[0])}, {name: 'Group B', value: parseInt(props.numbers[1])},];

const COLORS = ['#ec1111', '#0ee77b', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
console.log('props',props.numbers)
console.log('1', props.numbers[0])

const Homediv = styled.div`
margin-right: 30px;
background-color: none;
display: flex;
justify-content: center;
flex-wrap: wrap;
border-radius: 4px;
align-items: center;
`

     return  (
         <Homediv>
        <PieChart width={215} height={400}>
        <Pie
          data={data} 
          cx={120} 
          cy={200} 
          innerRadius={60}
          outerRadius={80} 
          fill="#8884d8"
          paddingAngle={5}
        >
        	{
          	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
   
      </PieChart>
      </Homediv>
     )
 }
 export default StudentChart