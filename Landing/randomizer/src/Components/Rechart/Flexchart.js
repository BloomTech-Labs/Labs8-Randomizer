import React from 'react';
import Chartprop from '../Rechart/ClassChart';

const Flexchart = props => {
    let students = props.Dates
    console.log('studentsssss',students)
    return <div style={{display: 'flex'}}>

    {/* {props.Class.map(classname => {
        <h1 Classer={classname} />
    })} */}
        {props.Dates.map(date=> 
        
            
            <Chartprop key={props.date['studentsInfo'] }  Data={date['studentsInfo'] }  /> ,
            
            
            
        
        )}
        </div>
    
}
export default Flexchart