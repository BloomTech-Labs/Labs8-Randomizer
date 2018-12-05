// Libraries
import React from 'react';
import styled from 'styled-components';

//PNGs
import Mark from '../Img/Mark.png';
import Linked from '../Img/Linked.png';
import Nick from '../Img/nicksface.PNG';
import Sus from '../Img/sus.PNG';
import Emme from '../Img/emme.PNG';
import Ray from '../Img/ray.PNG';
const Homediv = styled.div`
margin-left: 100px;

display: flex;
flex-wrap: wrap;

`
const Port = styled.div`
display: flex;
width: 300px;
height: 300px;
border: none;
border-radius: 50px;

flex-wrap: wrap;
margin-right: 100px;
margin-bottom: 50px;
padding: 5px 5px 5px 5px;

`

const Name = styled.h1`
color: #F7AF9D;
`
const Git = styled.img`

cursor: pointer;
margin-bottom: 15px;
`
const Linker = styled.img`


cursor: pointer;
`
const Face = styled.img`
width: 175px;
height: 175px;
margin-right: 30px;
border-radius: 50%;
`
const Picholder = styled.div`
display: flex;

flex-direction: column;
`
const H2 = styled.h1`
margin-left: 100px;`

const Title = styled.p`

font-size: 14px;
margin: 0px;
`
class Settings extends React.Component {




      render(){
        return(
            <div>
                <H2>Developers</H2>
          <Homediv>


              <Port>

                  <Name>Nickolaus Smith</Name>
                  <Title>Front End Developer</Title>
                  <Face src={Nick}></Face>
                  <Picholder>
                  <a href="https://github.com/NickolausSmith" target="_blank" rel="noopener noreferrer">
                  <Git src={Mark}></Git>
                  </a>
                  <a href="https://www.linkedin.com/in/nick-smith-9b7254167/" target="_blank" rel="noopener noreferrer">
                  <Linker src={Linked}></Linker>
                  </a>
                  </Picholder>




              </Port>

              <Port>

                  <Name>Susanna McDonald</Name>
                  <Title> Database Engineer</Title>
                  <Face src={Sus}></Face>
                    <Picholder>
                  <a href="https://github.com/sulemc" target="_blank" rel="noopener noreferrer">
                  <Git src={Mark}></Git>
                  </a>
                  <a href="https://www.linkedin.com/in/susanna-mcdonald/" target="_blank" rel="noopener noreferrer">
                  <Linker src={Linked}></Linker>
                  </a>
                  </Picholder>
              </Port>

              <Port>

                  <Name>Emmeline Aquino</Name>
                  <Title>Full Stack Developer</Title>
                    <Face src={Emme}></Face>
                  <Picholder>
                  <a href="https://github.com/emaquino44" target="_blank" rel="noopener noreferrer">
                  <Git src={Mark}></Git>
                  </a>
                  <a href="https://www.linkedin.com/in/emaquino44/" target="_blank" rel="noopener noreferrer">
                  <Linker src={Linked}></Linker>
                  </a>
                  </Picholder>
              </Port>

              <Port>

                  <Name>Raymond Garcia</Name>
                  <Title>Front End Developer</Title>
                  <Face src={Ray}></Face>
                  <Picholder>
                  <a href="https://github.com/Raymondgrc" target="_blank" rel="noopener noreferrer">
                  <Git src={Mark}></Git>
                  </a>
                  <a href="https://www.linkedin.com/in/raymondgarcia1/" target="_blank" rel="noopener noreferrer">
                  <Linker src={Linked}></Linker>
                  </a>
                  </Picholder>
              </Port>

            </Homediv>
            </div>
          )
        }
      }

    export default Settings;
