// Libraries
import React from 'react';

// Components
import Chartprop from '../Rechart/ClassChart';


const Flexchart = props => {
    let classlist = props.Dates
    console.log(classlist)
    return <div style={{display: 'flex'}}>
        {classlist.map(clss => 

            <Chartprop Data={clss} />,
            console.log('HIT')
            
            
        
        )}
        </div>
    
}
export default Flexchart