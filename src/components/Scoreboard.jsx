import PropTypes from "prop-types";


const Scoreboard = ({score, bestScore}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
    <div>Score: {score} </div>
    <div>Best Score: {bestScore} </div>
    </div>
  )
}
Scoreboard.propTypes = {
  score: PropTypes.number.isRequired,
  bestScore: PropTypes.number.isRequired,
};

export default Scoreboard