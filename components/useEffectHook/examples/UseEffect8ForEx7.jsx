import React, { useEffect } from 'react'

const UseEffect8ForEx7 = () => {
    let timer= setInterval(()=>{},1000)
    useEffect(()=>{
        return ()=>{
            console.log("child comp removed");
            clearInterval(timer);
        }
    },[])
  return (
    <div>Child Component</div>
  )
}

export default UseEffect8ForEx7
