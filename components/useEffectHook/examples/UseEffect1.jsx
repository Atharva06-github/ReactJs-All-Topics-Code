import React, { useEffect, useState } from 'react'

const UseEffect1 = () => {
    let [state,setState]=useState(0);
    //useEffect is one of the higher order function,if there is any change in state then only function gets executed.
    //It will overcome the disadvantage of useState hook i.e. when we call the useState hook it will read whole component again and again that's why we use useEffect hook.

    // useEffect hook with empty dependency i.e. empty []
    //if we don't pass any 
    useEffect(()=>{
        let fetching = ()=>{

        }
    },[])

  return (
    <div>
      <h1>COUNT : {state}</h1>
      <button onClick={()=>{setState(state+1)}} 
      className='bg-orange-500 rounded-md text-white h-8 w-40'>Increment</button>
    </div>
  )
}

export default UseEffect1
