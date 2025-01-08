import React, { useState } from 'react';

const UseStateTask6 = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ name: '', email: '' });

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {step === 1 && (
        <>
          <h2 className="text-2xl font-bold mb-4">Step 1: Enter Name</h2>
          <input
            type="text"
            className="border border-gray-300 rounded px-4 py-2 mb-4"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => setStep(step + 1)}
          >
            Next
          </button>
        </>
      )}
      {step === 2 && (
        <>
          <h2 className="text-2xl font-bold mb-4">Step 2: Enter Email</h2>
          <input
            type="email"
            className="border border-gray-300 rounded px-4 py-2 mb-4"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <div className="space-x-4">
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              onClick={() => setStep(step - 1)}
            >
              Back
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => setStep(step + 1)}
            >
              Next
            </button>
          </div>
        </>
      )}
      {step === 3 && (
        <>
          <h2 className="text-2xl font-bold mb-4">Confirmation</h2>
          <p className="text-lg mb-2">Name: {data.name}</p>
          <p className="text-lg mb-4">Email: {data.email}</p>
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            onClick={() => setStep(step - 1)}
          >
            Back
          </button>
        </>
      )}
    </div>
  );
};

export default UseStateTask6;
