import React, { useReducer } from 'react'

const UseReducerEx1 = () => {
    let initialState =0;
    let reducer =(state, action)=>{
        switch (action) {
            case "add": return state+1;
                break;
            case "sub":
             return state-1;
                break;
            case "mult": return state*2;
                break;
            default: return "Galat button press";
                break;
        }
    }
     
    const [state,dispatch] = useReducer(reducer,initialState);
  return (
    <div>
      <p>UseReducerHook</p>
      <button onClick={()=>{dispatch("add")}} className='bg-orange-500 px-3 text-white rounded-md'>add : {state}</button>
      <button disabled={state == 0 ?true:false} onClick={()=>{dispatch("sub")}} className='bg-orange-500 px-3 text-white rounded-md'>sub : {state}</button>
      <button onClick={()=>{dispatch("mult")}} className='bg-orange-500 px-3 text-white rounded-md'>mult : {state}</button>
      <button onClick={()=>{dispatch()}} className='bg-orange-500 px-3 text-white rounded-md'>default : {state}</button>
    </div>
  )
}

export default UseReducerEx1
