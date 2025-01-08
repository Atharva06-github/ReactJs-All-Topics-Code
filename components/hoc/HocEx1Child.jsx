import React from 'react'

const HocEx1Child = () => {
    console.log("Child");
    
  return (
    <div>
      <p>Child</p>
    </div>
  )
}

export default React.memo(HocEx1Child)
