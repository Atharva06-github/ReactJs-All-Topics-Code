import React, { useEffect, useState } from 'react'

const UseEffect5 = () => {
    let [cartItem,setCartItem] = useState(0);
    let [total,setTotal] = useState(1000);
    useEffect(()=>{
        setTotal(total+100),[cartItem]})
    useEffect(()=>{
       console.log("we are checking your eligiblity for free delivery");
    },[total])

  return (
    <div>
      <h1>cart items : {cartItem}</h1>
      <h1>ca</h1>
    </div>
  )
}

export default UseEffect5
