import PropTypes from "prop-types";

const Button = ( {difficulty, onClick} ) => {
  return (
    <button className="btn btn-lg btn-active btn-primary" onClick={onClick}>{difficulty}</button>
  )
}

Button.propTypes = {
    difficulty: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

export default Button
