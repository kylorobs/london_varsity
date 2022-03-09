import { useEffect, useState } from 'react';

const useResults = () => {
  const [results, setResults] = useState([]);
  const [scoreTally, setScoreTally] = useState({
    kings: 0,
    ucl: 0,
  });
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  function setScores(matches) {
    const scores = {
      ucl: 0,
      kings: 0,
    };
    matches.forEach((result) => {
      if (result.Kings > result.Ucl) scores.kings += 1;
      else if (result.Kings < result.Ucl) scores.ucl += 1;
      else {
        scores.kings += 1;
        scores.ucl += 1;
      }
    });
    setScoreTally(scores);
  }

  useEffect(() => {
    if (results.length > 0) return;
    setLoading(true);
    fetch(
      `https://www.kclsu.org/svc/feeds/results/6013?subtree=true&types=varsity`
    )
      .then((res) => {
        if (!res.ok) setError(true);
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        const filteredResults = data.filter(
          (result) => result.Ucl || result.Kings
        );
        if (filteredResults.length > 0) setScores(filteredResults);
        setLoading(false);
        setResults(filteredResults);
      })
      .catch((er) => {
        console.log(er);
        setLoading(false);
        setError(true);
      });
  }, []);

  return {
    scoreTally,
    results,
    isLoading,
    error,
  };
};

export default useResults;
