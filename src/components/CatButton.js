import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  padding-top: 100%;
  background-image: url("https://placekitten.com/200/300");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

function CatButton() {
  return(
    <Button />
  )
}

export default CatButton;