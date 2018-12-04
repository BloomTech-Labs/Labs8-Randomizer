import React from 'react';
import { YAxis, XAxis, CartesianGrid, BarChart,  Bar, Tooltip, Legend} from 'recharts';
import styled from 'styled-components';
const Declined = styled.h1`
color: #ec1111;
position: absolute;

z-index: +1;
margin-bottom: 100px;
`
const Participated = styled.h1`
color: #0ee77b;
position: absolute;
margin-top: 115px;
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
  
    const nameList= []
    
    
    
    const dataBox = [];
    console.log('props', props.Data)
    const dataList = () => {
      if (props.Data === undefined || props.Data.length===0) {
        console.log('undefined')
      }
      else{
    props.Data.map( (one, index )=> {
      let obj = {
        name: `${one['studentName']}`,
        
        Participated: one['participation']['P'],
        Declined: one['participation']['NP'],
        
      }
      dataBox.push(obj)
      
    
      })
      return dataBox;
    }
    }
   
     return  (
     
        <div>
          <Declined>% Declined</Declined>

        <BarChart width={400} height={300} data={dataList()}  
  margin={{top: 5, right: 5, left: 5, bottom: 5}} >
  <XAxis dataKey="name"/>
    
  <YAxis />
  <CartesianGrid />
  <Tooltip/>
  <Legend />
  <Bar dataKey="Participated" fill="Green" />
  <Bar dataKey="Declined" fill="Red" />
</BarChart>
<Participated>% Participated</Participated>
        
    </div>
     )
 }
 export default Chartprop;

