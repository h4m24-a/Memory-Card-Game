import PropTypes from "prop-types";

const Button = ( {difficulty, onClick} ) => {
  return (
    <button onClick={onClick}>{difficulty}</button>
  )
}

Button.propTypes = {
    difficulty: PropTypes.string.isRequired,
    limit: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
  };

export default Button
