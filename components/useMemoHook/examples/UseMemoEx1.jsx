import React, { useMemo, useState } from 'react'

const UseMemoEx1 = () => {
    //it is use to achive performance optimization in react,by using this hook entire appliction will not get afffected.
    let [count1, setCount1] = useState(0);
    let [count2, setCount2] = useState(0);
    let checkCount=()=>{
        let i=0;
        while (i<1000000000) {
            i++;
        }
        if (count1%2==0) {
            return "Even"
        }else{
            return "Odd"
        }
    };
    let memoizedCount1 = useMemo(checkCount,[count1])
    let checkCount2=()=>{
        if (count2%2==0) {
            return "Even"
        }else{
            return "Odd"
        }
    };
  return (
    <div className='flex justify-center items-center gap-3 m-4 h-[100vh]'>
      <button onClick={()=>{
        setCount1(count1+1);
      }} className='bg-orange-500 text-white px-3 rounded-sm'>count1 : {count1} {memoizedCount1}</button>
      <button onClick={()=>{
        setCount2(count2+1);
      }} className='bg-orange-500 text-white px-3 rounded-sm'>count2 : {count2} {checkCount2()}</button>
    </div>
  )
}

export default UseMemoEx1
