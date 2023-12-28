import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Scoreboard from "./components/Scoreboard";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([])
  const [cards, setCards] = useState([])



  const handleCardClick = (cardId) => {
    console.log('Card clicked:', cardId);
    setScore(score + 1)
  };



  const shuffleCards = () => {

  }



  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=10"
        );
        const data = await response.json();

        const formattedData = await Promise.all(
          data.results.map(async (pokemon) => {
            const detailsResponse = await fetch(pokemon.url);
            const detailsData = await detailsResponse.json();

            return {
              id: detailsData.id,
              name: detailsData.name,
              image: detailsData.sprites.front_default,
            };
          })
        );

        setPokemonData(formattedData);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="px-4">
        <h1 className="mb-4 font-rubik text-3xl text-center font-extrabold text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Memory Card Game
        </h1>
        <div className="mb-8">
          <Scoreboard score={score} bestScore={bestScore} />
        </div>
        <div className="container mx-auto flex flex-wrap gap-7 justify-center flex-1 items-center sm:max-w-xl md:max-w-lg lg:max-w-6xl">
          {pokemonData.map((pokemon) => (
            <Card
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              onClick={() => handleCardClick(pokemon.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
