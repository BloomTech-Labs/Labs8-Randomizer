// Libraries
import React, {Component} from 'react';
import styled from 'styled-components';
// Components
import Chartprop from '../Rechart/ClassChart';

// Stylings
const ChartGrid = styled.div`
  width: 100%;
  margin-top: 100px;
  margin-bottom: 20px;

  @media (max-width: 850px) {
  }

  @media (max-width: 400px) {
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
                        this.state.renderclasslist.push(<Chartprop Data={clss} history={this.props.history} />)
                        
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
