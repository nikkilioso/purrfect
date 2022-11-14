import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import CatButton from './components/CatButton';
import Frame from './components/Frame';
import GlobalStyle from './styles/global';
import { getName } from './utils/helper';


const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;
  max-width: 78em;
  margin: 0 auto;
`

const Section = styled.section`
  margin-top: 1.5rem;
  > div {
    width: max-content;
    margin: 0 auto;

    > div:last-of-type {
      padding: 0 2rem;
    }
  }
`

function App() {
  //set cat images array
  const [cats, setCats] = useState([]);

  //set initial cat names array
  const [catNames, setName] = useState([getName(), getName()]);

  //magic function to make stuff update properly
  function newCat(data, i) {
    const tempImages = [...cats];
    const tempNames = [...catNames];  
    tempNames[i] = getName();
    tempImages[i] = data;
    setName(tempNames);
    setCats(tempImages);
  }

  //get a new cat image when button is clicked
  function replaceCatImage(i) {
    fetch("https://api.thecatapi.com/v1/images/search?mime_types=jpg")
    .then((response) => response.json())
    .then((data) => newCat(data[0], i))
  }


  //function get cats
  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=2&mime_types=jpg")
      .then((response) => response.json())
      .then((data) => setCats(data))
  }, [])

  return (
    <div className="App">
      <h1>The Purrfect Pussycat</h1>
      {
        cats.length !== 0 &&
        <Grid>
          <Frame>
            <CatButton
              catUrl={cats[0].url}
              onClick={() => replaceCatImage(1)}
            />
            <h2>{catNames[0]}</h2>
          </Frame>
          <Frame>
            <CatButton
              catUrl={cats[1].url}
              onClick={() => replaceCatImage(0)}
            />
            <h2>{catNames[1]}</h2>
          </Frame>
        </Grid>
      }
      <Section>
        <Frame>
          <h2>I love Meow Meow Meow.</h2>
        </Frame>
      </Section>
      <GlobalStyle />
    </div>
  );
}

export default App;