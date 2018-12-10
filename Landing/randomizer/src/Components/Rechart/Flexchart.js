import React from 'react';
import Chartprop from '../Rechart/ClassChart';
import styled from 'styled-components';
const NameGrid = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 17px;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(1, auto);
`

const Flexchart = props => {
    let classlist = props.Dates
    console.log(classlist)
    return <NameGrid>
            {classlist.map(clss =>
                <Chartprop Data={clss} />
            )}
          </NameGrid>

}
export default Flexchart
