import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import CatButton from './components/CatButton';
import Frame from './components/Frame';
import GlobalStyle from './styles/global';

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 4rem;
  max-width: 90em;
  margin: 0 auto;
`
const Section = styled.section`
  margin-top: 4rem;

  > div {
    width: max-content;
    margin: 0 auto;
  }
`
function App() {
  //array to show the cats from API
  const [cats, setCats] = useState([]);

  //function for Cat API
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
            />
            <h2>Whatever</h2>
          </Frame>
          <Frame>
            <CatButton
              catUrl={cats[1].url}
            />
            <h2>Whatever</h2>
          </Frame>
        </Grid>
      }
      <Section>
        <Frame>
          <h2>I love Handydldlksdfie;aldj</h2>
        </Frame>
      </Section>
      <GlobalStyle />
    </div>
  );
}

export default App;