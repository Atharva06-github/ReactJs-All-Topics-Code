import React, { useEffect, useState } from 'react'

const UseEffect4 = () => {
    let [state1,setState1] =useState(0);
    let [state2,setState2] =useState(0);
//we can pass multiple dependecies.If there is any change in any of the dependency value the callback function will get called.The sequence of multiple dependencies does not matter.

    useEffect(()=>{
        console.log("something changed in any of the dependancy");   
    }, [state1,state2])
  return (
    <div>
      <button onClick={()=>{setState1(state1+1)}} className='bg-orange-500 rounded-md text-white h-8 w-40'>STATE1 - {state1}</button>
      <button onClick={()=>{setState2(state2+1)}} className='bg-orange-500 rounded-md text-white h-8 w-40'>STATE2 - {state2}</button>
    </div>
  )
}

export default UseEffect4
