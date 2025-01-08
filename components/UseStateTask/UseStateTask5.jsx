import React, { useState } from 'react';

const UseStateTask5 = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <input
        type="number"
        className="border border-gray-300 rounded px-4 py-2 mb-4"
        value={step}
        min="1"
        onChange={(e) => setStep(Math.max(1, +e.target.value))}
      />
      <h1 className="text-5xl font-bold mb-8">{count}</h1>
      <div className="space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setCount(count + step)}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => setCount(count - step)}
        >
          Decrement
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default UseStateTask5;
