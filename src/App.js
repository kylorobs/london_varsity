import Hero from './Hero';
import Progress from './Progress';
import Tables from './Tables';
import TextContainer from './TextContainer';
import Upcoming from './Upcoming';

function App() {
  return (
    <div data-theme="kclsu">
      <Hero />
      <h2 className="text-center"> Results and Upcoming Matches</h2>
      <TextContainer>
        <Progress />
        <div className="flex w-full mt-16">
          <Upcoming />
          <Tables />
        </div>
      </TextContainer>
    </div>
  );
}

export default App;
