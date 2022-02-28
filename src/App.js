import Hero from './Hero';
import Progress from './Progress';
import Tables from './Tables';
import TextContainer from './TextContainer';
import Upcoming from './Upcoming';

function App() {
  return (
    <div data-theme="kclsu">
      <Hero />
      <h2 className="text-center">
        One of the biggest events in the calendar!
      </h2>
      <TextContainer>
        <Progress />
        <div className="flex w-full">
          <Upcoming />
          <Tables />
        </div>
      </TextContainer>
    </div>
  );
}

export default App;
