import React from "react";
import Cards from "./components/Cards";

import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <>
      <NextUIProvider>
        <h1 className="mb-12 pt-3 text-4xl font-extrabold leading-none tracking-tight text-center text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Memory Card Game
        </h1>
        <Cards />
      </NextUIProvider>
    </>
  );
}

export default App;
