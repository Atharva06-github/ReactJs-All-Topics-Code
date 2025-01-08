import React, { useCallback, useState } from 'react'
import UseCallBackEx1Child from './UseCallBackEx1Child'

const UseCallBackEx1 = () => {
  let [state1,setState1] =useState(0)
  let [state2,setState2] =useState(0)
  console.log("parent");
  let func= useCallback(()=>{
    console.log("kuch bhi");
  },[state1])
  return (
    <div className='flex justify-around'>
      <div>
      <p>Parent</p>
      <button onClick={()=>{setState1(state1+1)}} className='bg-orange-500 rounded-md text-white'>state1 :{state1}</button>
      <button onClick={()=>{setState2(state2+1)}} className='bg-orange-500 rounded-md text-white'>state2 :{state2}</button></div><hr />
      <div>
        <UseCallBackEx1Child props={func}/>
      </div>
    </div>
  )
}

export default UseCallBackEx1
