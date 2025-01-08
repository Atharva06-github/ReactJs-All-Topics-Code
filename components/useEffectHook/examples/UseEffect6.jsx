import React, { useState } from 'react'

const UseEffect6 = () => {
    let [state1,setState1]=useState(0);
    let [state2,setState2]=useState(0);
    let [state3,setState3]=useState(0);
    let [state4,setState5]=useState(0);
  return (
    <div>
      <span>State1 : {state1}</span>
      <span>State2 : {state2}</span>
      <span>State3 : {state3}</span>
      <span>State4 : {state4}</span>
      <div>
        <button></button>
      </div>
    </div>
  )
}

export default UseEffect6
