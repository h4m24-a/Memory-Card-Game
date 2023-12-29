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


  useEffect(() => {
    setIsLoading(true);
    
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=12"
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
    


    const handleCardClick = (cardId) => {
      // Checking if card has been clicked
      if(clickedCards.includes(cardId)) {
        // Reset Game
        setScore(0);
        setClickedCards([]);
      } else {
        // Updating score by 1 and setting the clicked state of new card
        setScore(prevScore => prevScore + 1);
        setClickedCards((prevSelectedCard) => [...prevSelectedCard, cardId]);
      }
    };
  
  
  
    const shuffleCards = () => {
  
    }



  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="px-10 py-0">
        <h1 className="mb-2 font-rubik text-4xl text-center font-extrabold text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Memory Card Game
        </h1>
        <div className="px-2 flex justify-center sm:mb-6">
          <Scoreboard score={score} bestScore={bestScore} />
        </div>
        <div className="container mx-auto flex flex-wrap gap-4  justify-center items-center  sm:max-w-xl md:max-w-lg lg:max-w-full">
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
