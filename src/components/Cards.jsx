import PropTypes from "prop-types";

const Cards = ({ id, name, image }) => {
  return (
    <div key={id} className="justify-center max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
      <img
        src={image}
        alt={name}
        className="object-cover object-center w-full rounded-t-md h-70 dark:bg-gray-500"
      />
      <div className="flex flex-col p-6">
        <p className="text-3xl text-center font-semibold">{name}</p>
      </div>
    </div>
  );
};

Cards.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Cards;
