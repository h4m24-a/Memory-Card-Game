import PropTypes from "prop-types";

const Card = ({ id, name, image, onClick }) => {
  return (
    <div className="card w-60 bg-base-100 shadow-xl transition-transform transform hover:scale-105 ocus:bg-blue-500 focus:outline-none active:shadow-blue-500/50  lg:flex-shrink" key={id} onClick={onClick}>
      <figure className="px-8 pt-14">
        <img
          src={image}
          alt={name}
          className="rounded-xl bg-yellow-200 object-cover max-w-full w-full object-center h-40 md:h-40 lg:h-50"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl font-pokemonFont tracking-widest uppercase text-center text-zinc-900">{name}</h2>
      </div>
    </div>
  );
};


Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Card;
