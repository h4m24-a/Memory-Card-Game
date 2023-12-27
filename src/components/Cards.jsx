import PropTypes from "prop-types";

const Cards = ({ id, name, image }) => {
  return (
    <div key={id} className="p-4 rounded-lg shadow-xl border-2 border-black">
      <img
        src={image}
        alt={name}
        className="object-cover object-center max-w-full rounded-t-ld h-40"
      />
      <div className="flex flex-col">
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
