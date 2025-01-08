import React, { useState } from 'react'
import UseEffect8ForEx7 from './UseEffect8ForEx7';

const UseEffect7 = () => {
  
    let [state,setState]=useState(false);
    let handleClick= ()=>{
        setState(!state)
    };
    return (
    <div>
      <div>Main Component</div>
      <button onClick={handleClick} 
      className='px-3 bg-orange-500 text-white rounded-md'>
        {state?"REMOVE CHILD COMP":"ADD CHILD COMP"}</button>
        <div>
            {state?<UseEffect8ForEx7/>:"click button to call child component"}
        </div>
    </div>
  )
}

export default UseEffect7
