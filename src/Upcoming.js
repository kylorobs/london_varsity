import { useEffect, useState } from 'react';
import ScrollIntoView from './ScrollIntoView';

const Upcoming = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.kclsu.org/svc/feeds/events/6013?subtree=true&types=StudentRun`
    )
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then((data) => {
        setEvents(data);
      })
      .catch((er) => {
        throw new Error(er);
      });
  }, []);

  const evts = events.map((evt) => (
    <ScrollIntoView>
      <label-card
        cardtitle={evt.Title}
        image={evt.ImageUrl}
        link={evt.Url}
        text="The Date goes here"
        margin="15px"
        cardheight="110px"
        cardwidth="100%"
      />
    </ScrollIntoView>
  ));

  return (
    <div className="my-16 mx-8">
      <h2> Upcoming </h2>
      <div className="flex flex-col content-center justify-center">
        <input
          type="text"
          placeholder="Find a match"
          className="input input-bordered input-accent w-full max-w-xs"
        />
        {evts}
      </div>
    </div>
  );
};

export default Upcoming;
