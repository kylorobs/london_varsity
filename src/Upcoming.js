import { useState } from 'react';
import PropTypes from 'prop-types';
import ScrollIntoView from './ScrollIntoView';

const Upcoming = ({ isDesktop, events = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    const inputted = e.target.value;
    setSearchTerm(inputted);
  };

  function addZero(num) {
    if (num > 9) return `${num}`;
    return `0${num}`;
  }

  function getDateTime(str) {
    const date = new Date(str);
    return `${date.toDateString()} ${addZero(date.getHours())}:${addZero(
      date.getMinutes()
    )}`;
  }

  let evts = [];
  if (events.length > 0) {
    const filtered =
      !searchTerm || searchTerm === ''
        ? events
        : events.filter((obj) =>
            obj.Title.toLowerCase().includes(searchTerm.toLowerCase())
          );

    evts = filtered.map((evt) => {
      if (searchTerm)
        return (
          <label-card
            cardtitle={evt.Title}
            withleftborder={false}
            image={evt.ImageUrl}
            link={evt.Url}
            text={getDateTime(evt.StartDate)}
            margin="15px 0"
            cardheight={isDesktop ? '130px' : 'auto'}
          />
        );
      return (
        <ScrollIntoView key={evt.Id}>
          <label-card
            cardtitle={evt.Title}
            withleftborder={false}
            image={evt.ImageUrl}
            link={evt.Url}
            text={getDateTime(evt.StartDate)}
            margin="15px 0"
            cardheight={isDesktop ? '130px' : 'auto'}
          />
        </ScrollIntoView>
      );
    });
  }

  return (
    <div className="flex flex-col justify-start w-full">
      <div
        className="flex flex-col items-center  w-full mb-8 min-w-280"
        style={{ marginTop: isDesktop ? '4rem' : '1rem' }}
      >
        <label htmlFor="searchMatchws" className="label">
          <span className="label-text">Search upcoming games</span>
        </label>
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
  events: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string,
      ImageUrl: PropTypes.string,
      Url: PropTypes.string,
      StartDate: PropTypes.string,
    })
  ),
};

export default Upcoming;
