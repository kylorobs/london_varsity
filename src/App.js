import { useEffect, useState } from 'react';
import Hero from './Hero';
import useEvents from './hooks/useEvents';
import useResults from './hooks/useResults';
import Progress from './Progress';
import Tables from './Tables';
import TextContainer from './TextContainer';
import Upcoming from './Upcoming';

function App() {
  const windowSize = window.matchMedia('(min-width: 800px)');
  const [isDesktop, setIsDesktop] = useState(windowSize.matches);
  const { events, isLoading, error } = useEvents();
  const { scoreTally, results } = useResults();

  useEffect(() => {
    windowSize.addEventListener('change', (e) => {
      setIsDesktop(e.matches);
    });
  });

  return (
    <div data-theme="kclsu">
      <Hero />
      <TextContainer>
        <h2 className="text-center"> Results and Upcoming Matches</h2>
        <Progress scoreTally={scoreTally} />
        <div className="flex w-full mt-16">
          {isDesktop && <Upcoming isDesktop={isDesktop} events={events} />}
          <Tables isDesktop={isDesktop} events={events} results={results} />
        </div>
      </TextContainer>
    </div>
  );
}

export default App;
