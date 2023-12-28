import PropTypes from "prop-types";

const Cards = ({ id, name, image }) => {
  return (
    <div key={id} className="p-5 flex-1 flex flex-col justify-center rounded-lg shadow-xl border border-black">
      <img
        src={image}
        alt={name}
        className="object-cover bg-yellow-300 rounded-2xl object-center max-w-full rounded-t-ld h-40"
      />
      <div className="flex flex-col mt-6">
        <p className="text-2xl font-pokemonFont tracking-widest uppercase text-center text-zinc-900 ">{name}</p>
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
