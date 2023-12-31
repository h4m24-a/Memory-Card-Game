import PropTypes from "prop-types";

const Button = ( {difficulty, onClick, btnClass} ) => {
  return (
    <button className={`${btnClass}`} onClick={onClick}>{difficulty}</button>
  )
}

Button.propTypes = {
    difficulty: PropTypes.string.isRequired,
    btnClass: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

export default Button
