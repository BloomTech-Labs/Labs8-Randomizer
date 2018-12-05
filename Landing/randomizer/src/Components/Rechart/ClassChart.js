import React from 'react';
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


    const handleSubmit= () => {
      console.log('clicked')
          }

     return  (
     
        <div>
          {/* <h1>{[key]['className']}</h1> */}
          <Graphbox onClick={handleSubmit}>

        <BarChart style={{cursor: 'pointer'}} width={400} height={300} data={dataList()}  
  margin={{top: 5, right: 5, left: 5, bottom: 5}} >
  <XAxis dataKey="name"/>
    
  <YAxis style={{cursor: 'pointer'}} />
  <CartesianGrid tyle={{cursor: 'pointer'}} />
  <Tooltip style={{cursor: 'pointer'}}/>
  <Legend style={{cursor: 'pointer'}} />
  <Bar dataKey="Participated" fill="Green"  style={{cursor: 'pointer'}} />
  <Bar dataKey="Declined" fill="Red" style={{cursor: 'pointer'}} />
</BarChart>
</Graphbox>
        
    </div>
     )
 }
 export default Chartprop;

