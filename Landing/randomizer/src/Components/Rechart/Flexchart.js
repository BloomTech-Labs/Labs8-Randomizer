import React from 'react';
import Chartprop from '../Rechart/ClassChart';

const Flexchart = props => {
    return <div>
        {props.Dates.map(date => {
            <Chartprop  Dates={date}/>
        })}
    </div>;
}
export default Flexchart