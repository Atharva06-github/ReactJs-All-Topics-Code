import React from 'react'

const EventTask4 = () => {
    let handleChange = (e)=>{
        console.log(e.clientX);
        console.log(e.clientY);  
    } 
  return (
    <div>
      <div onMouseMove={handleChange} className='h-[200px] w-[200px] bg-slate-500'></div>
    </div>
  )
}
export default EventTask4
