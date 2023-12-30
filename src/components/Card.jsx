import PropTypes from "prop-types";

const Card = ({ id, name, image, onClick}) => {
  return (
    <div key={id} onClick={onClick} className="p-4 flex flex-col justify-center items-center rounded-lg shadow-xl border border-black hover:bg-blue-400 active:bg-blue-600 focus:outline-none cursor-pointer focus:ring focus:ring-blue-300 lg:flex-shrink">
      <img
        src={image}
        alt={name}
        className="object-cover bg-yellow-300 rounded-2xl object-center max-w-full rounded-t-ld h-40 md:40 lg:h-50"
      />
      <div className="flex flex-col mt-6">
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
