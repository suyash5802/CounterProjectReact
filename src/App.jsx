import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
    let [counter,setCounter]=useState(0);
        //let counter=15;
    
    let addValue=()=>{
      console.log("clicked",counter);
      if(counter<5)
      setCounter(counter+1);
    }
    const decValue=()=>{
      if(counter>0)
      setCounter(counter-1);
    }

  return (
    <>  
      <h1>Chai aur react</h1>
      <h2>Counter value :{counter}</h2>
      <button onClick={addValue}>Add value{counter}</button>
      <button onClick={decValue}>Decrease value {counter} </button>
    </>
  
  )
}

export default App
