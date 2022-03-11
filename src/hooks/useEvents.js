import { useEffect, useState } from 'react';

const useEvents = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (events.length > 0) return;
    setLoading(true);
    fetch(
      `https://www.kclsu.org/svc/feeds/events/6013?subtree=true&types=varsity`
    )
      .then((res) => {
        if (!res.ok) setError(true);
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setEvents(data);
      })
      .catch((er) => {
        setLoading(false);
        console.log(er);
        setError(true);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    events,
    isLoading,
    error,
  };
};

export default useEvents;
