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
  return (
    <div className="App">
      <h1>The Purrfect Pussycat</h1>
      <Grid>
        <Frame>
          <CatButton />
          <h2>Whatever</h2>
        </Frame>
        <Frame>
          <CatButton />
          <h2>Whatever</h2>
        </Frame>
      </Grid>
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