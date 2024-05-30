/* eslint-disable no-const-assign */
/* eslint-disable react/prop-types */

const ScoreImage = ({ player, system }) => {

  const defaultImage = '../images/QuestionMark.png';
  let playerScore = 0;
  let systemScore = 0;

  return (
    <div className="row mb-5 align-items-md-stretch justify-content-center">
      <div className="col-md-5">
        <div className="h-100 p-5 text-bg-dark rounded-3">
          <h2>Score: {player === system ? playerScore += 1 : 0}</h2>
          <img src={player === '' ? defaultImage : player} className="image" alt="User_Image" />
        </div>
      </div>

      <div className="col-md-2">
        <div className="h-100 p-5 rounded-3">
          <h1 className="vs display-5 fw-bold">Vs</h1>
        </div>
      </div>

      <div className="col-md-5">
        <div className="h-100 p-5 text-bg-dark rounded-3">
          <h2>Score: {player != system ? systemScore += 1 : 0}</h2>
          <img src={system === '' ? defaultImage : system} className="image" alt="System_Image" />
        </div>
      </div>
    </div>
  );
};

export default ScoreImage;
