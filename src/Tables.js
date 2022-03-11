import PropTypes from 'prop-types';
import Results from './Results';
import Upcoming from './Upcoming';

const Tables = ({ isDesktop, results, events }) => {
  if (!isDesktop)
    return (
      <div className="w-full">
        <kclsu-tabs variant="primary" style={{ margin: 0 }}>
          <tab-title active="upcoming" name="upcoming">
            Upcoming
          </tab-title>
          <tab-area active name="upcoming">
            <Upcoming isDesktop={isDesktop} events={events} />
          </tab-area>
          <tab-title name="2021">Results</tab-title>
          <tab-area name="2021">
            {/* <kclsu-countdown
              width="280px"
              margin="0.5em auto"
              text="17-21 March 2022"
              date="March 17, 2022, 10:00:00"
            /> */}
            <Results results={results} />
          </tab-area>
        </kclsu-tabs>
      </div>
    );
  return (
    <div className="w-full">
      <kclsu-tabs variant="primary" style={{ margin: 0 }}>
        <tab-title active="2021" name="2021">
          Results
        </tab-title>
        <tab-area active name="2021">
          {/* <kclsu-countdown
            width="280px"
            margin="0.5em auto"
            text="17-21 March 2022"
            date="March 17, 2022, 10:00:00"
          /> */}
          <Results results={results} />
        </tab-area>
      </kclsu-tabs>
    </div>
  );
};

Tables.propTypes = {
  isDesktop: PropTypes.bool.isRequired,
  results: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string,
      ImageUrl: PropTypes.string,
      Url: PropTypes.string,
      StartDate: PropTypes.date,
      Id: PropTypes.string,
      Ucl: PropTypes.number,
      Kings: PropTypes.number,
    })
  ),
  events: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string,
      ImageUrl: PropTypes.string,
      Url: PropTypes.string,
      StartDate: PropTypes.date,
    })
  ),
};

export default Tables;
