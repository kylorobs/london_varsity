/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
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
      if (+result.Kings > +result.Ucl) scores.kings += 1;
      else if (+result.Kings < +result.Ucl) scores.ucl += 1;
    });
    setScoreTally(scores);
  }

  function createDataArray(data) {
    const ar = [];
    for (const node in data) {
      ar.push(data[node]);
    }
    return ar;
  }

  function sortByDate(ar) {
    return ar.sort((a, b) => new Date(a.StartDate) - new Date(b.StartDate));
  }

  useEffect(() => {
    if (results.length > 0) return;
    setLoading(true);
    fetch(`${process.env.REACT_APP_RESULTS_URL}`)
      .then((res) => {
        if (!res.ok) setError(true);
        return res.json();
      })
      .then((resp) => {
        const data = createDataArray(resp);
        const filteredResults = data.filter(
          (result) => result.Ucl === '0' || +result.Ucl > 0 // Only need one of the scores to be true
        );
        if (filteredResults.length > 0) setScores(filteredResults);
        const sortedByDateScores = sortByDate(filteredResults);
        setLoading(false);
        setResults(sortedByDateScores);
      })
      .catch((er) => {
        console.log(er);
        setLoading(false);
        setError(true);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    scoreTally,
    results,
    isLoading,
    error,
  };
};

export default useResults;
