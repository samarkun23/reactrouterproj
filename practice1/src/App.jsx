import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    let [counter, setcounter] = useState(15) //behind the scene ye let counter hi bana rha hai 

  // let counter = 5
  const addvalue =() =>{
    
    // counter = counter+1
    //or sec method 
    //counter = counter +1
    // setcounter(counter)
    // same situatn
    if ( counter < 20){
      setcounter((prevcounter) => prevcounter+1)
      setcounter((prevcounter) => prevcounter +1)
      setcounter((prevcounter) => prevcounter+1)
      setcounter((prevcounter) => prevcounter+1)

    }else{
      return;

    }
  }

  const removevalue= () =>{
    if(counter>0){

      setcounter(counter - 1)
    }
    else{

      return;
    }
  }
  return (
    <>
     <h1>Chai or React</h1>

     <h2>Counter value: {counter}</h2>
     <button
     onClick={addvalue}>Add value {counter}</button>
     <br />
     <button  
     onClick={removevalue}
     >Remove value {counter}</button>
    </>
  )
}

export default App
