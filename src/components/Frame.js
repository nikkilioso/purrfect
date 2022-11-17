import styled from "styled-components";
import { colors } from "../constants/variables";

const Div = styled.div`
  border: 5px solid ${colors.windowBorder};
  box-shadow: 0 0 0 2px black;
  background-color: ${colors.windowBorder};

  @media only screen and (max-width: 768px) {
    width: 100% !important;
  } 
`

const TopNav = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  background-color: ${colors.windowBorder};
  padding-bottom: 5px;
`

const Content = styled.div`
  background-color: white;
  border: 1px solid black;
`

const Img = styled.img`
  width: 40px;
`

function Frame({children}) {
  return (
    <Div>
      <TopNav>
        <Img src="/open.svg"/>
        <Img src="/minimize.svg"/>
        <Img src="/close.svg"/>
      </TopNav>
      <Content>
        {children}
      </Content>
    </Div>
  )
}

export default Frame;