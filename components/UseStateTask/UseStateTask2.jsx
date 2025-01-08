import React, { useState } from 'react'

const UseStateTask2 = () => {
    let [isVisible,setVisible]=useState(true);
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
        <button onClick={()=>{setVisible(!isVisible)}} className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-800 mb-4'>{isVisible?'Hide':'Show'}</button>
        {isVisible && <p className='text-lg font-medium'>This is the text that can be toggled.</p>}
    </div>
  )
}

export default UseStateTask2
