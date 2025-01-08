import React, { useState } from 'react'
import HocEx1Child from './HocEx1Child';

const HocEx1 = () => {
    let [state,setState]= useState(0);
    console.log("parent");
    let orange ={
        background:"red",
        color:"white",
        linearGradient:"orange",
        
    }
    
  return (
    <div>
      <p>Parent</p>
      <button onClick={()=>{
        setState(state+1)
      }} style={orange}>state : {state}</button>
      <br /><br />
      <hr />
      <br />
      <HocEx1Child/>
    </div>
  )
}

export default HocEx1
