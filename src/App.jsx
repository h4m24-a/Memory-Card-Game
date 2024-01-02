// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Scoreboard from "./components/Scoreboard";
import Button from "./components/Button";
import WinGame from "./components/WinGame";
import Rules from "./components/Rules";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [shuffle, setShuffle] = useState([]);
  const [difficulty, setDifficulty] = useState(null);
  const [modal, setModal] = useState(null);
  const [GameWon, setGameWon] = useState(false);

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
    const shuffled = [...cards];

    // Iterating over the array from the last element to first  // i-- decrements by 1
    for (let i = shuffled.length - 1; i > 0; i--) {
      // Generating a random index from 0 to the current iteration index (inclusive)
      const j = Math.floor(Math.random() * (i + 1));

      // Swaping elements at indices i and j
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
  };




  const handleCardClick = (cardId) => {
    // Checking if card has been clicked
    if (clickedCards.includes(cardId)) {
      // Reset Game
      setScore(0);
      setClickedCards([]);
      setShuffle(shuffleCards(pokemonData)); // Reshuffle after each reset
      setScore(0);
    } else {
      // Updating score by 1, Shuffling cards and setting the clicked state of new card
      setScore((prevScore) => prevScore + 1);
      setClickedCards((prevSelectedCard) => [...prevSelectedCard, cardId]);
      setShuffle(shuffleCards(pokemonData)); // Reshuffle after each click
      if (score + 1 >= bestScore) {
        setBestScore(score + 1);
      }
    }
  };





  const changeDifficulty = (limit) => {
    // Updating the difficulty state, which will trigger the useEffect to fetch new data
    setDifficulty(limit);
    setScore(0);
    setClickedCards([]);
    setModal(null);
  };





  const openModal = () => {
    setModal(true);
  };




// Disables cards after game is won.
  useEffect(() => {
    if (score === difficulty) {
      setGameWon(true);
    }
  }, [score, difficulty]);


  const restartGame = () => {
    setScore(0);
    setClickedCards([]);
    shuffleCards([]);
    setGameWon(false);
  };


  if (isLoading) {
    return (
      <div className="flex justify-center text-2xl items-center flex-col-reverse">
        {" "}
        Loading...
        <div className="flex justify-center w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
        ;
      </div>
    );
  }



  if (!difficulty) {
    // Rendering difficulty selection screen when falsy
    return (
      <div className="flex flex-col items-center justify-center min-h-screen h-screen w-screen">
        <div className="flex flex-col justify-center items-center text-xl h-dvh shadow-2xl rounded-xl py-10 px-24 max-w-full bg-[url('./src/assets/pokemon-background.jpg')]">
        <h1 className=" font-rubik text-4xl text-center font-extrabold text-black md:text-5xl lg:text-6xl ">Memory Card Game</h1>
          <img className="mt-3 w-12 h-12 md:h-28  md:w-28 lg:w-32 lg:h-32" src="./src/assets/poke-ball-icon.svg" alt="Pokemon Ball"
          />
          <button className="font-poppins mt-16 text-xl text-center  font-black text-black md:text-5xl lg:text-6xl ">Select Difficulty</button>
          <div className="flex mt-8 flex-col gap-5 md:flex-row">
            <Button
              btnClass="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 lg:text-xl"
              difficulty="Easy"
              onClick={() => changeDifficulty(8)}
            />
            <Button
              btnClass="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 lg:text-xl"
              difficulty="Medium"
              onClick={() => changeDifficulty(12)}
            />
            <Button
              btnClass="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 lg:text-xl"
              difficulty="Hard"
              onClick={() => changeDifficulty(14)}
            />
          </div>
        <Rules />
        </div>
      </div>
    );
  }



  return (
    <>
      <div className=" py-2">
        <h1 className="mb-2 px-0 py-3 bg-black text-white font-rubik text-4xl text-center font-extrabold md:text-5xl lg:text-6xl ">Memory Card Game</h1>

        <div className="flex mx-auto flex-col justify-center items-center gap-5 mt-6 mb-6 max-w-full md:flex-row">
          <button onClick={openModal} className=" font-poppins flex flex-row  bg-green-500 rounded-xl py-3 px-6">
            Change Difficulty
          </button>
          <Scoreboard score={score} bestScore={bestScore} />
        </div>


        {modal && (
          <div className="flex gap-5 flex-col items-center justify-center md:flex-row">
            <button onClick={() => setModal(null)} className="btn btn-square btn-outline">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>

            <div className="flex flex-col  gap-5 font-poppins md:flex-row text-xl">
              <Button btnClass="hover:font-bold cursor-pointer" difficulty="Easy" onClick={() => changeDifficulty(8)} />
              <Button btnClass="hover:font-bold cursor-pointer" difficulty="Medium" onClick={() => changeDifficulty(12)}/>
              <Button btnClass="hover:font-bold cursor-pointer" difficulty="Hard" onClick={() => changeDifficulty(14)} />
            </div>
          </div>
        )}


        {score === difficulty && <WinGame onClick={() => restartGame()}  score={score} />}

        <div className="container mx-auto flex flex-wrap gap-5 mt-2 justify-center items-center  sm:max-w-xl md:max-w-lg lg:max-w-full">
          {shuffle.map((pokemon) => (
            <Card
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              onClick={() => (GameWon ? null : handleCardClick(pokemon.id))}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
