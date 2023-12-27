import PropTypes from "prop-types";

const Cards = ({ id, name, image }) => {
  return (
    <div key={id} className="flex flex-1 items-center flex-col px-2 justify-center max-w-xs rounded-lg shadow-xl border-2 border-red-300">
      <img
        src={image}
        alt={name}
        className="object-cover object-center w-full rounded-t-ld h-40"
      />
      <div className="flex flex-col p-5">
        <p className="text-xl font-poppins uppercase text-center font-bold">{name}</p>
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
