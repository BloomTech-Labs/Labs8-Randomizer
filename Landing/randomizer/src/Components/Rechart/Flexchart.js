import React, {Component} from 'react';
import Chartprop from '../Rechart/ClassChart';

import styled from 'styled-components';
const ChartGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-gap: 17px;
  grid-template-columns: repeat(1, auto);
  grid-template-rows: repeat(1, auto);
  margin-top: 75px;
  @media (max-width: 850px) {
    grid-template-columns: repeat(1, auto);
    grid-template-rows: repeat(1, auto);
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(1, auto);
    grid-template-rows: repeat(1, auto);
    margin-top: 1650px;
    width: 100%;

  }


`
class Flexchart extends Component {
    constructor(props) {
        super(props);
        this.state={
      renderclasslist : [],
      isLoading: true

        }
      }

      componentDidMount() {


                this.setState({renderclasslist: []},() => {
                    this.props.Dates.map((clss) => {
                        console.log('clss', clss)
                        this.state.renderclasslist.push(<Chartprop Data={clss} history={this.props.history} />)
                        console.log('HIT')
                    })
                    this.setState({isLoading:false})
                })

            this.setState({renderclasslist: this.state.renderclasslist})
        }

    render() {


        return(
    <div style={{marginTop: '20px'}}>
    { this.state.isLoading &&
    <div>Loading.. please wait!</div>
    }
    {!this.state.isLoading && <ChartGrid>
       {this.state.renderclasslist} </ChartGrid>}
        </div>

      )
        }
    }
export default Flexchart
