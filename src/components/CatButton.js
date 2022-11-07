import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  padding-top: 100%;
  background-image: ${props => `url(${props.catUrl})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

function CatButton({catUrl}) {
  return(
    <Button catUrl={catUrl}/>
  )
}

export default CatButton;