import PropTypes from "prop-types";

const Scoreboard = ({ score, bestScore }) => {
  return (
    <>
      <div className="flex flex-col justify-center gap-5 items-center md:flex-row">
        <div className="font-poppins  bg-red-500 rounded-xl py-3 px-6">
          <div>Score: {score} </div>
        </div>
        <div className="font-poppins  bg-blue-500 rounded-xl py-3 px-6"> 
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
