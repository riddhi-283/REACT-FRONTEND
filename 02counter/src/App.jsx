import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setcounter] = useState(15)
  let [message, setmessage] = useState("")
  const addvalue = () => {
    // console.log("value added", Math.random());   // only to check if onclikc and this fn is working fine or not
    
    // m-1
    // counter = counter + 1
    // setcounter(counter)

    //m-2
    if (counter<20) {
    setcounter(counter+1)
    setmessage("");
    } else {
    setmessage("no more increment, get lost!")
    }

    console.log("clicked", counter);   // no need. only for checking purposes
  }

  const removevalue = () => {
     if (counter>0) {
      counter = counter-1
      setcounter(counter)
      setmessage("");
     } else {
      setmessage("no more decrement, get lost!")
     }

     console.log("clicked", counter);
     
  }

  return (
    <>
      <h1>chai or react</h1>
      <h2>counter:{counter}</h2>

      <button onClick = {addvalue}>add value</button>
      <button onClick = {removevalue}>remove value</button>
      <p>current value:{counter}</p>
      {message && <p style={{ color: "red", fontWeight: "bold" }}>{message}</p>}
    </>
  )
}

export default App
