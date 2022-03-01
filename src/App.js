import { useEffect, useState } from 'react';
import Hero from './Hero';
import Progress from './Progress';
import Tables from './Tables';
import TextContainer from './TextContainer';
import Upcoming from './Upcoming';

function App() {
  const windowSize = window.matchMedia('(min-width: 800px)');
  const [isDesktop, setIsDesktop] = useState(windowSize.matches);

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
        <Progress />
        <div className="flex w-full mt-16">
          {isDesktop && <Upcoming isDesktop={isDesktop} />}
          <Tables isDesktop={isDesktop} />
        </div>
      </TextContainer>
    </div>
  );
}

export default App;
