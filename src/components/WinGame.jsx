import PropTypes from "prop-types";

const WinGame = ( {score, onClick} ) => {
  return (
    <div
      id="alert-additional-content-3"
      className="p-4 mt-8 lg:max-w-5xl container mx-auto text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800"
      role="alert"
    >
      <div className="flex items-center">
      <img className="w-8 h-8 md:h-12  md:w-12 lg:w-16 lg:h-16" src="/images/poke-ball-icon.svg" alt="Pokemon Ball"
          />
        <span className="sr-only">Info</span>
        <h3 className="text-lg font-poppins font-medium ml-2 md:text-2xl">You Win!</h3>
      </div>
      <div className="mt-2 mb-4 font-poppins text-sm md:text-lg">
      Congratulations! Your memory skills are unbeatable – you have flawlessly chosen <span className="font-bold">{score}</span> cards!
      </div>
      <div className="flex">
        <button
          type="button"
          onClick={onClick}
          className="text-white bg-green-800 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          <svg
            className="me-2 h-3 w-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 14"
          >
            <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
          </svg>
          Play Again
        </button>
      </div>
    </div>
  );
};

WinGame.propTypes = {
  score: PropTypes.number.isRequired,
  shuffle: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

export default WinGame;
