import React, {Component} from 'react';
import Chartprop from '../Rechart/ClassChart';
import styled from 'styled-components';
const ChartGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-gap: 17px;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(1, auto);
`

class Flexchart extends Component {
    constructor(props) {
        super(props);
        this.state={
      renderclasslist : []
        }
      }

      componentWillReceiveProps(nextProps) {
            console.log('dates',nextProps.Dates)
            if (nextProps.Dates.length === this.props.Dates.length){
                return
            }
            else{
            nextProps.Dates.map((clss) => {
                console.log('clss', clss)
                this.state.renderclasslist.push(<Chartprop Data={clss} history={this.props.history} />)
                console.log('HIT')
            })
            this.setState({renderclasslist: this.state.renderclasslist})
        }}

    render() {
        return(
        <ChartGrid>
          {this.state.renderclasslist}
        </ChartGrid>
    )
      }
        }
export default Flexchart
