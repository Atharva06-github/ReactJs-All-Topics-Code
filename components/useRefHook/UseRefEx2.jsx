import React, { useRef, useState } from 'react'

const UseRefEx2 = () => {
    let inputRef = useRef();
    let [state,setState] = useState("");
    let handleClick=(e)=>{
        e.preventDefault();
        console.log(inputRef.current.value);
        setState(inputRef.current.value);  
    };
  return (
    <div>
      <form action="">
        <input type="text" ref={inputRef} className='bg-orange-300 rounded-md'/>
        <button onClick={handleClick}>CLICK</button>
        <p>{state}</p>
      </form>
    </div>
  )
}

export default UseRefEx2
