import Hero from './Hero';
import Progress from './Progress';
import Stats from './Stats';
import Tables from './Tables';
import TextContainer from './TextContainer';
import Upcoming from './Upcoming';

function App() {
  return (
    <>
      <Hero />

      {/* <Stats /> */}
      <TextContainer>
        <Progress />
        <div className="flex w-full">
          <Upcoming />
          <Tables />
        </div>
      </TextContainer>
    </>
  );
}

export default App;
