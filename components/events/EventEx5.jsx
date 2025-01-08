import React, { useState } from 'react'

// create operation

const EventEx5 = () => {
    let [state,setState]= useState({
        username: "",
        password: "",
        id: Date.now(),
        users: []
    });
    let {username,password,id,users} = state;
    let handleChange= (e)=>{
      let {name,value} = e.target;
        setState({...state,[name]:value});
    };
    let handleSubmit =(e)=>{
      e.preventDefault();
      let dummyObj ={
        // this is temp object
        username : state.username,
        password : state.password,
        id : state.id
      };
      setState({
        username :"",
        password :"",
        id :Date.now(),
        users :[...users,dummyObj]})
      console.log(state);
    };
  return (
    <div className='p-10'>
          <h1 className='text-4xl font-extrabold text-orange-500'>Sign-Up Form</h1><br />
        <form action="" onSubmit={handleSubmit}> 
          {/* onSubmit */}
            <input name='username' value={state.username} placeholder='username' onChange={handleChange} type="text" className='border-[1px] border-gray-600 rounded-md px-5 m-1' required/>
            <br /><br />
            <input name='password' value={state.password} placeholder='password' onChange={handleChange} type="text" className='border-[1px] border-gray-600 rounded-md px-5 m-1' required/>
            <br /><br />
            <button className='border-[1px] bg-orange-500 rounded-md px-3 text-white'>SUBMIT</button>
        </form>
      <br />
      <hr />
      <main className='w-[100%] bg-orange-200'>
        <div className='p-3 flex flex-wrap text-gray-100'>
          {state.users.length>0 && state.users.map((val,i)=>{
            return(
              <div className='w-[23%] p-3 m-2 bg-orange-500 rounded-md'>
                <h1 className='text-3xl'>{val.username}</h1>
                <h1 className='text-sm'>{val.password}</h1>
                <h1 className='text-sm'>{val.id}</h1>
                <button className='px-2 rounded-md text-sm bg-green-900 text-white'>Update</button>
                <button className='px-2 rounded-md text-sm bg-green-900 text-white'>Delete</button>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  );
};
export default EventEx5

//shadow