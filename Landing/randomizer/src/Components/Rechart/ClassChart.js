import React from 'react';
import { YAxis, XAxis, CartesianGrid, BarChart,  Bar, Tooltip, Legend} from 'recharts';


 const Chartprop = props => {


    const dataBox = [];
    const Namearray= [];
    const dataList = () => {
      props.Rates.map((stats, index) => {

        let obj = {

          Participated: stats['P'],
          name: `${props.Dates[index]}`,
          Declined: stats['NP'],
        }
        dataBox.push(obj)
      })
      return dataBox;
    }



     return  (

        <div>
        <BarChart width={400} height={300} data={dataList()}  style={{margin: '3rem auto 2rem'}}
  margin={{top: 5, right: 30, left: 20, bottom: 5}} >
  <XAxis dataKey="name"/>

  <YAxis domain={10}/>
  <CartesianGrid />
  <Tooltip/>
  <Legend />
  <Bar dataKey="Participated" fill="Green" />
  <Bar dataKey="Declined" fill="Red" />
</BarChart>

    </div>
     )
 }
 export default Chartprop
