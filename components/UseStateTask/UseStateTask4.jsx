import React, { useState } from 'react';

const UseStateTask4 = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen ${
        isDarkMode ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <h1 className="text-4xl font-bold mb-4">
        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </h1>
      <button
        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        Toggle Theme
      </button>
    </div>
  );
};
export default UseStateTask4