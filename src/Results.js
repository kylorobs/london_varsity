import PropTypes from 'prop-types';

const Results = ({ results }) => {
  let rows = (
    <tr>
      <td className="text-white"> - </td>
      <td className="text-white"> - </td>
      <td className="text-white"> - </td>
      <td className="text-white"> - </td>
    </tr>
  );

  if (results && results.length > 0) {
    rows = results.map((match) => {
      const kingsWin = +match.Kings > +match.Ucl;
      const uclWin = +match.Kings < +match.Ucl;
      return (
        <tr className="mb-10" key={match.Id}>
          <td
            className={`${uclWin && '!bg-purple text-white'} ${
              kingsWin && '!bg-kings text-white'
            } !rounded-none text-center`}
          >
            {kingsWin || uclWin ? '🏆' : ''}
          </td>
          <td> {match.Title} </td>
          <td className="text-center">{match.Kings}</td>
          <td className="text-center">{match.Ucl}</td>
        </tr>
      );
    });
  }

  return (
    <div className="overflow-x-auto w-full">
      <table className="table table-compact table-zebra  w-full">
        <thead>
          <tr>
            <th>-</th>
            <th>Match</th>
            <th className="text-center">Kings</th>
            <th>
              UCL
              <span className="opacity-0 invisible text-center">S</span>
            </th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

Results.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string,
      ImageUrl: PropTypes.string,
      Url: PropTypes.string,
      StartDate: PropTypes.string,
      Id: PropTypes.string,
      Ucl: PropTypes.string,
      Kings: PropTypes.string,
    })
  ),
};

export default Results;
