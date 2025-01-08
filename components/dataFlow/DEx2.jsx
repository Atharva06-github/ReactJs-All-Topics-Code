import React from 'react'

const DEx2 = (props) => {
    console.log(props.props);
  return (
    <div>
      <button onClick={()=>{props.props("RAM")}} className='bg-slate-300 p-3'>click</button>
    </div>
  )
}

export default DEx2
