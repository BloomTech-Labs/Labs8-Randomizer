import React from 'react';
import styled from 'styled-components';
import Deleteicon from '@material-ui/icons/Delete';

const FormStyling = styled.form`
display: block;
width: 100%;
`
const InputStyling = styled.input`
`
const LabelStyling = styled.label`
`
const Homediv = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
`
const NameGrid = styled.div`
width: 100%;
margin-left: auto;
margin-right: auto;
display: grid;
grid-template-columns: repeat(4, auto);
grid-template-rows: repeat(1, auto);
`
const NameItem = styled.div`
display: flex;
border: solid 1px pink;
align-items: center;
`
let fakeNames = [
  'Abigail',
  'Alexandra',
  'Alison',
  'Amanda',
  'Amelia',
  'Amy',
  'Andrea',
  'Angela',
  'Anna',
  'Anne',
  'Audrey',
  'Ava',
  'Bella',
  'Bernadette',
  'Carol',
  'Caroline',
  'Carolyn',
  'Chloe',
  'Claire',
  'Deirdre',
  'Diana',
  'Diane',
  'Donna',
  'Dorothy',
  'Elizabeth',
  'Ella',
  'Emily',
  'Emma',
  'Faith',
  'Felicity'
];

const Edit = () => {
  let studentList = fakeNames.map(item => <NameItem> <Deleteicon /> {item} </NameItem>)
  return(
    <Homediv>
        <FormStyling className="settings" onSubmit={(event) => console.log(event)}>
          <InputStyling type='text' name='classname' id='classname' placeholder='Class Name'/>

          <InputStyling type='checkbox' name='track-participation' id='track-participation'/>
          <LabelStyling for='track-participation'>Track Participation</LabelStyling>

          <InputStyling type='checkbox' name='all-go' id='all-go'/>
          <LabelStyling for='all-go'>All Go</LabelStyling>

          <InputStyling type='button' value='Reset Participation'/>
        </FormStyling>

        <FormStyling className="add-students" onSubmit={(event) => console.log(event)}>
          <InputStyling type='text' name='first-name' id='first-name' placeholder='First Name'/>
          <InputStyling type='text' name='last-name' id='last-name' placeholder='Last Name'/>
          <InputStyling type='button' value='Add'/>
          <InputStyling type='button' value='Import CSV'/>
        </FormStyling>
        <NameGrid>
          {studentList}
        </NameGrid>
    </Homediv>
  )
}

export default Edit;
