import PropTypes from 'prop-types';
import Upcoming from './Upcoming';

const Tables = ({ isDesktop }) => (
  <div className={`${isDesktop ? 'w-9/12' : 'w-full'}`}>
    <kclsu-tabs variant="primary" style={{ margin: 0 }}>
      {!isDesktop && (
        <>
          <tab-title active="upcoming" name="upcoming">
            Upcoming
          </tab-title>
          <tab-area active name="upcoming">
            <Upcoming />
          </tab-area>
        </>
      )}
      <tab-title name="2021">Results</tab-title>
      <tab-area active name="2021">
        <kclsu-countdown
          width="280px"
          margin="0.5em auto"
          text="17-21 March 2022"
          date="March 17, 2022, 10:00:00"
        />
        <div className="overflow-x-auto mt-8">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th>Match</th>
                <th>Kings</th>
                <th>UCL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th> - </th>
                <td> - </td>
                <td> - </td>
              </tr>
            </tbody>
          </table>
        </div>
      </tab-area>
    </kclsu-tabs>
  </div>
);

Tables.propTypes = {
  isDesktop: PropTypes.bool.isRequired,
};

export default Tables;
