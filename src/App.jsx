import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Scoreboard from "./components/Scoreboard";
import Button from "./components/Button";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [shuffle, setShuffle] = useState([]);
  const [difficulty, setDifficulty] = useState(null)

  useEffect(() => {
    // Check if difficulty is selected before fetching data  -  Fetches data only when a difficulty is selected
    if (difficulty) {
    setIsLoading(true);

    const fetchData = async (limit) => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
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
        setShuffle(formattedData);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData(difficulty); 
    }
  }, [difficulty]);



  const shuffleCards = (cards) => {
    // Creating a copy of the original array to avoid modifying the input array
    const shuffled = [...cards]

    // Iterating over the array from the last element to first  // i-- decrements by 1
    for (let i = shuffled.length -1; i > 0; i--) {
        // Generating a random index from 0 to the current iteration index (inclusive)
      const j = Math.floor(Math.random() * (i + 1));

      // Swaping elements at indices i and j
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled

  }

  


  const handleCardClick = (cardId) => {
    // Checking if card has been clicked
    if (clickedCards.includes(cardId)) {
      // Reset Game
      setScore(0);
      setClickedCards([]);
      setShuffle(shuffleCards(pokemonData));   // Reshuffle after each reset
      handleBestScore()
    } else {
      // Updating score by 1, Shuffling cards and setting the clicked state of new card
      setScore((prevScore) => prevScore + 1);
      setClickedCards((prevSelectedCard) => [...prevSelectedCard, cardId]);
      setShuffle(shuffleCards(pokemonData));    // Reshuffle after each click
    }
  };


 
const handleBestScore = () => {
  if (score > bestScore) {
    setBestScore(score)
  }  
}


const changeDifficulty = (limit) => {
  // Updating the difficulty state, which will trigger the useEffect to fetch new data
  setDifficulty(limit);
  setScore(0)
  setClickedCards([])
  
};
  



if (!difficulty) {
  // Rendering difficulty selection screen
  return (
    <div className="flex items-center justify-center min-h-screen h-screen w-screen">
    <div className=" shadow-2xl rounded-xl border-red-600 p-20 flex h-dvh justify-center max-w-full text-xl items-center flex-col">
      <p className="">
        Memory Card Game
      </p>
    <img className="w-12 h-12 lg:w-28 lg:h-28" src="./src/assets/poke-ball-icon.svg" alt="Pokemon Ball" />
      <p className="font-poppins mt-4 text-xl text-center font-extrabold text-gray-900 md:text-5xl lg:text-6xl ">
        Select Difficulty
      </p>
      <div className="flex mt-6 flex-col gap-5 md:flex-row">
        <Button difficulty="Easy" onClick={() => changeDifficulty(8)} />
        <Button difficulty="Medium" onClick={() => changeDifficulty(12)} />
        <Button difficulty="Hard" onClick={() => changeDifficulty(16)} />
      </div>
    </div>
  </div>
  
  );
}

  if (isLoading) {
    return <div className="flex justify-center text-2xl items-center flex-col-reverse"> Loading...
      <div className="flex justify-center w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400"></div>;
    </div>
  }



  return (
    <>
      <div className="px-2 py-2">
        <h1 className="mb-2 font-rubik text-4xl text-center font-extrabold text-gray-900 md:text-5xl lg:text-6xl ">
          Memory Card Game
        </h1>

        <div className="flex justify-center text-2xl items-center flex-col-reverse">
          <p className="mb-4 mt-3 font-poppins text-4xl text-center font-extrabold text-gray-900 md:text-5xl lg:text-6xl ">
            Change Difficulty
          </p>
          <div className="flex flex-row gap-5">
            <Button difficulty="Easy" onClick={() => changeDifficulty(8)} />
            <Button difficulty="Medium" onClick={() => changeDifficulty(12)} />
            <Button difficulty="Hard" onClick={() => changeDifficulty(16)} />
          </div>
        </div>

        <Scoreboard score={score} bestScore={bestScore} />

        <div className="container mx-auto flex flex-wrap gap-2  justify-center items-center  sm:max-w-xl md:max-w-lg lg:max-w-full">
          {shuffle.map((pokemon) => (
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
