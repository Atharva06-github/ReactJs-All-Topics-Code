import React, { createContext } from 'react'

export let context = createContext()

const AppContext = (props) => {
  let data=[
    {
      name : "raj",
      age : 22
    },
    {
      name : "ram",
      age : 28
    },
    {
      name : "rajesh",
      age : 23
    }
  ]
  return (
    <context.Provider value={data}>{props.children}</context.Provider>
  )
}

export default AppContext
