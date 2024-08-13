import React, { useState } from 'react'
import { Start } from './components/Start'
import GamePlay from './components/GamePlay';

const App = () => {
  
  const[isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay  = () =>{
      setIsGameStarted((prev)=>!prev)
  }

  return (
    <div>
      {
        isGameStarted? <GamePlay />:<Start toggle = {toggleGamePlay}/>
      }
      
    </div>
  )
}

export default App;
