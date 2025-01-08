import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    let navigate = useNavigate();
    let handleClick = ()=>{
        if(true){
            navigate('/home')
        }else{
            alert("wrong credentials")
        }
    };
  return (
    <div>
      <h1>LoginPage</h1>
      <input type="text" />
      <br /><br />
      <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default LoginPage
