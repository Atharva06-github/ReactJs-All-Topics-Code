import React, { useRef } from 'react'

const UseRefEx1 = () => {
    let headingRef= useRef(); //u can also write React.useRef
    let handleClick =()=>{
        console.log(headingRef);

        console.log(headingRef.current.textContent);

        headingRef.current.textContent = "useRef kam kar raha hai...!"
        console.log(headingRef.current.textContent);

        // headingRef.current.style.background = 'cyan';

        headingRef.current.style.border ='1px solid'
        headingRef.current.style.padding ='10px '
        // headingRef.current.style.background = 'purple';
        headingRef.current.style.borderRadius ='10px'
        headingRef.current.id ='dark' //see index.css file
        
    }
  return (
    <div className='h-[100vh] flex justify-center items-center flex-col'>
        <h1 id="heading" ref={headingRef}>Heading</h1>
      <button onClick={handleClick} className='bg-orange-500 text-white px-3 rounded-md'>Click</button>
    </div>
  )
}

export default UseRefEx1
