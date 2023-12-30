import PropTypes from "prop-types";

const Scoreboard = ({ score, bestScore }) => {
  return (
    <>
      <div className="flex flex-row justify-center items-center gap-5 mt-5 mb-5">
        <div className="font-poppins flex flex-row gap-4 bg-red-500 rounded-xl py-3 px-6">
          <div>Score: {score} </div>
        </div>
        <div className="font-poppins flex flex-row gap-4 bg-blue-500 rounded-xl py-3 px-6"> 
          <div>Best Score: {bestScore} </div>
        </div>
      </div>
    </>
  );
};
Scoreboard.propTypes = {
  score: PropTypes.number.isRequired,
  bestScore: PropTypes.number.isRequired,
};

export default Scoreboard;
