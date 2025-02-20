import React from "react";
import Quiz from "./components/Quiz";

function App() {
  return (
    <div className="md:h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#2a0845] to-[#6441A5] px-2">
      <header className="w-full container mx-auto rounded-md bg-white/30 backdrop-blur-md border border-white/40 py-6 mt-2 md:mt-0 mb-5 text-center shadow-sm">
        <h1 className="text-4xl font-bold text-gray-100 italic">
          Interactive Quiz Platform
        </h1>
      </header>

      <Quiz />
    </div>
  );
}

export default App;
