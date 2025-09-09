import React, { useState } from "react";
import { FaCalculator, FaRedo } from "react-icons/fa";

const App = () => {
  const [number, setNumber] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState("");

  const printTable = (e) => {
    e.preventDefault();
    if (!number) {
      setError("Please enter a number.");
      setShowResult(false);
      return;
    }
    setError("");
    setShowResult(true);
  };

  const resetForm = () => {
    setNumber("");
    setShowResult(false);
    setError("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-lg w-full max-w-lvh backdrop-blur-md">
        <h1 className="flex items-center justify-center text-2xl font-bold mb-4 text-white">
          <FaCalculator className="mr-2" /> Multiplication Table
        </h1>

        <form onSubmit={printTable} className="flex flex-col gap-4">
          <input
            type="number"
            placeholder="Enter Number"
            onChange={(e) => setNumber(e.target.value)}
            value={number}
            className="bg-gray-700 text-white border border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <small className="text-gray-400 text-sm">
            Enter a valid number to generate the table.
          </small>
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-opacity-20 text-white p-3 rounded-lg shadow-lg hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:scale-105 transition transform backdrop-blur-sm"
              title="Generate the multiplication table"
            >
              Generate Table
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="flex items-center gap-2 bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition transform hover:scale-105"
              title="Reset the input and table"
            >
              <FaRedo /> Reset
            </button>
          </div>
        </form>

        {showResult && (
          <div className="mt-6 animate-fadeIn">
            <h2 className="text-xl font-semibold mb-3 text-center text-white">
              Multiplication Table of {number}
            </h2>
            <ul className="space-y-3 mt-4">
              {Array.from({ length: 10 }, (_, index) => (
                <li
                  key={index}
                  className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-opacity-20 text-white p-3 rounded-lg shadow-lg hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:scale-105 transition transform backdrop-blur-sm"
                >
                  <div className="flex justify-between items-center font-medium">
                    <span>
                      {number} × {index + 1} = {number * (index + 1)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
