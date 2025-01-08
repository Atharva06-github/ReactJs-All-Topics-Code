import React, { useState } from 'react';

const UseStateTask3 = () => {
  const [name, setName] = useState('');

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <input
        type="text"
        className="border border-gray-300 rounded px-4 py-2 mb-4"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2 className="text-2xl font-bold text-blue-500">
        Hello, {name || 'Stranger'}!
      </h2>
    </div>
  );
};

export default UseStateTask3