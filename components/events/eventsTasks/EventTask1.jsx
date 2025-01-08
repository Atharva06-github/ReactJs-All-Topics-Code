import React from 'react'

const EventTask1 = () => {
  let handleDC =(e)=>{
    e.target.textContent = "Shh! I'm a react developer undercover!"
  }
  return (
    <div className='bg-slate-400 w-80'>
      {/* <button onDoubleClick={handleDC}>Double Click</button> */}
      <div onDoubleClick={handleDC}>
        Revel secret message...!
      </div>
    </div>
  )
}
export default EventTask1

