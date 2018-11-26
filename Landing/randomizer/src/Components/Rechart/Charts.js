//Libraries
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled, {keyframes}from 'styled-components';
import { LineChart, Line, YAxis, XAxis, CartesianGrid, BarChart,  Bar, Tooltip, Legend, dataList} from 'recharts';

const Homediv = styled.div`
width: 500px;
height: 500px;
background-color: none;
display: flex;
justify-content: center;
flex-wrap: wrap;
border-radius: 4px;

`


class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
     
    componentDidMount() {
        this.getStudents('https://swapi.co/api/people/')
    }
    getStudents = URL => {
     
        fetch(URL)
          .then(res => {
            return res.json();
          })
          .then(data => {
            this.setState({ data: data.results });
          })
          .catch(err => {
            throw new Error(err);
          });
      };

    render() {

        const nameList = ['Nick', 'Ray', 'Susanna', 'Emmeline'];
        const dataBox = [];
        const dataList = () => {
          nameList.map(name => {
            let obj = {
              name: `${name}`,
              Participated: Math.floor(Math.random() * 2000),
              Declined: Math.floor(Math.random() * 2000),
              amt: Math.floor(Math.random() * 2000)
            }
            dataBox.push(obj)
          })
          return dataBox;
        }
        
        return (
            <div>
                <BarChart width={600} height={300} data={dataList()} style={{margin: '3rem auto 2rem'}}
          margin={{top: 5, right: 30, left: 20, bottom: 5}} >
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Bar dataKey="Participated" fill="#8884d8" />
          <Bar dataKey="Declined" fill="#82ca9d" />
        </BarChart>
                
            </div>
        )
    }
}
export default Chart;