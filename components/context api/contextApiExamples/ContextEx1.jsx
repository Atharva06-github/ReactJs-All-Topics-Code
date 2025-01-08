import React, { useContext } from 'react'
import { context } from '../AppContext'

const ContextEx1 = () => {
  let data= useContext(context);
  console.log(data);
  
  return (
    <div>
      <table className='border-[1px] border-black p-3'>
        <tr className='border-[1px] border-black p-3'>
          <th className='border-[1px] border-black p-3'>Name</th>
          <th className='border-[1px] border-black p-3'>Age</th>
        </tr>
        {Array.isArray(data) >0 &&
        data.map((val,i)=>{
          return(
            <tr className='border-[1px] border-black p-3'>
              <td className='border-[1px] border-black p-3'>{val.name}</td>
              <td className='border-[1px] border-black p-3'>{val.age}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default ContextEx1
