import React from 'react';
import Chartprop from '../Rechart/ClassChart';

const Flexchart = props => {
    return <div style={{display: 'flex'}}>
        {props.Dates.map(date => 
        
            
            <Chartprop key={props.date}  Data={date} />
            
        )}</div>
    
}
export default Flexchart