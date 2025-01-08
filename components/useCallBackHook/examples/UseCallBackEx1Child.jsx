import React from 'react'

const UseCallBackEx1Child = () => {
  console.log("child");
  return (
    <div>Child</div>
  )
}

export default React.memo(UseCallBackEx1Child)
