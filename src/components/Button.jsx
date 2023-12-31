import PropTypes from "prop-types";

const Button = ( {difficulty, onClick, btnClass, btnSize, btnLink, btnActive} ) => {
  return (
    <button className={`${btnClass} ${btnSize} ${btnLink} ${btnActive}`} onClick={onClick}>{difficulty}</button>
  )
}

Button.propTypes = {
    difficulty: PropTypes.string.isRequired,
    btnClass: PropTypes.string.isRequired,
    btnLink: PropTypes.string.isRequired,
    btnActive: PropTypes.string.isRequired,
    btnSize: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

export default Button
