import React, { useState } from 'react'
import DEx2 from './DEx2'

const DEx1 = () => {
  let [username, setUsername]= useState("");
  let demo = (name)=>{
    console.log(name);
    setUsername(name)
  };
    return (
    <div>
      <DEx2 props={demo}/>
      <p>{username}</p>
    </div>
  )
}

export default DEx1
