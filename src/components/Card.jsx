import PropTypes from "prop-types";

const Card = ({ id, name, image, onClick}) => {
  return (
    <div key={id} onClick={onClick} className="px-6 py-12 flex flex-col justify-center items-center rounded-lg shadow-xl cursor-pointer focus:bg-blue-500 focus:outline-none active:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/50 lg:flex-shrink">
      <img
        src={image}
        alt={name}
        className="object-cover bg-yellow-300 rounded-xl object-center max-w-full rounded-t-ld h-40 md:40 lg:h-50"
      />
      <div className="flex flex-col mt-8">
        <p className="text-2xl font-pokemonFont tracking-widest uppercase text-center text-zinc-900 ">{name}</p>
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
