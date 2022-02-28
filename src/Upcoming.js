import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ScrollIntoView from './ScrollIntoView';

const Upcoming = ({ isDesktop }) => {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    const inputted = e.target.value;
    setSearchTerm(inputted);
  };

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

  console.log(searchTerm);
  const filtered =
    !searchTerm || searchTerm === ''
      ? events
      : events.filter((obj) => obj.Title.includes(searchTerm));
  const evts = filtered.map((evt) => (
    <ScrollIntoView>
      <label-card
        cardtitle={evt.Title}
        image={evt.ImageUrl}
        link={evt.Url}
        text="The Date goes here"
        margin="15px 0"
        cardheight={isDesktop ? '130px' : 'auto'}
      />
    </ScrollIntoView>
  ));

  return (
    <div className="flex flex-col justify-start w-full">
      <div
        className="flex justify-center w-full mb-8 min-w-280"
        style={{ marginTop: isDesktop ? '4rem' : '1rem' }}
      >
        <input
          onChange={handleChange}
          type="text"
          placeholder="Find a match"
          className={`input input-bordered input-primary ${
            isDesktop ? 'w-2/3' : 'w-full'
          }`}
        />
      </div>
      {evts}
    </div>
  );
};

Upcoming.propTypes = {
  isDesktop: PropTypes.bool.isRequired,
};

export default Upcoming;
