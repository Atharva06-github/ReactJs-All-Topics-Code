import React, { useState } from 'react'

const EventEx1 = () => {
  let [state, setState] = useState({
    username: "",
    password: ""
  });
  let handleChange = (e) => {
    setState({ username: e.target.value });
    console.log(state);
  };
  return (
    <div>
      <form action="">
        <input onChange={handleChange} value={state.username} type="text" className='bg-slate-300 border-solid' />
        <br /><br />
        <button className='bg-slate-400 '>CLICK</button>
      </form>
    </div>
  )
}
export default EventEx1
