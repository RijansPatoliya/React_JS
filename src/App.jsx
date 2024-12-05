import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(0)
  return (
    <div>
      <h1>Number : {num}</h1>
      <button onClick={()=>{setnum(num+1)}}>Incriment</button>
      < br/>< hr/>
      <button onClick={()=>{setnum(num-1)}}>Dicriment</button>
    </div>
  )
}

export default App
