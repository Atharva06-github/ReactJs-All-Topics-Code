import React, { useEffect, useState } from 'react'

const UseEffect2 = () => {
    let [state,setState]= useState(0);
//when we pass empty dependency array for use effect hook it acts as a CDM life cycle method,so that 
// 1. it will execute only once throught the life cycle
// 2. it will execute at the end of the mounting phase
// we will use this syntax mostly for calling the API's so that API's will not get called unnecessarily and repeatedly

    console.log("start");
    useEffect(()=>{
        console.log("useEffect callback function called");
        let fetching= async ()=>{
            let jsonData = await fetch("https://api.github.com/users")
        }
        
    })
  return (
    <div>
      
    </div>
  )
}

export default UseEffect2
