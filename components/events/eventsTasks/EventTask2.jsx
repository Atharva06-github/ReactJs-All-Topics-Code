import React from 'react'

const EventTask2 = () => {
    let handleLeave=(e)=>{
        e.target.style.height="100px"
        e.target.style.width="100px"
    }
    let handleChange=(e)=>{
        e.target.style.height="200px"
        e.target.style.width="200px"
    }
  return (
    <div>
      <div onResize={handleChange} onMouseLeave={handleLeave} className='bg-green-500 h-[50px] w-[50px]'></div>
    </div>
  )
}

export default EventTask2
