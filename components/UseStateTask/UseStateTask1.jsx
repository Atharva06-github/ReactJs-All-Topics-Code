import React, { useState } from 'react'

const UseStateTask1 = () => {
    let [count,setCount] = useState(0);
  return (
    <div className='bg-orange-300 p-10 w-96 h-40'>
      <h1>COUNT : {count}</h1>
      <button onClick={()=>{setCount(count+1)}} className='bg-orange-500 p-1 rounded-md'>Increment</button>
      <button onClick={()=>{count>0 && setCount(count-1)}} disabled={count===0} className='bg-orange-500 p-1 rounded-md'>Decrement</button>
      <button onClick={()=>{setCount(0)}} className='bg-orange-500 p-1 rounded-md'>Reset</button>
    </div>
  )
}
export default UseStateTask1
