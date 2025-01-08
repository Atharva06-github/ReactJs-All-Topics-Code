import React, { useState } from 'react'

const EventEx4 = () => {
    let [state,setState]= useState({
        username: "",
        password: ""
    });
    let handleChange= (e)=>{
        setState({...state,[e.target.name]:e.target.value});
        console.log(state);  
    };
  return (
    <div className='p-10'>
        <form action="">
            <input name='username' value={state.username} placeholder='username' onChange={handleChange} type="text" className='border-[1px] border-gray-600 rounded-md'/>
            <br /><br />
            <input name='password' value={state.password} placeholder='password' onChange={handleChange} type="text" className='border-[1px] border-gray-600 rounded-md'/>
            <br /><br />
            <button className='border-[1px] border-gray-600 rounded-md px-5 bg-amber-200'>SUBMIT</button>
        </form>
      <br />
      <hr />
      <p>username:{state.username}</p>
      <p>password:{state.password}</p>
    </div>
  )
}

export default EventEx4
