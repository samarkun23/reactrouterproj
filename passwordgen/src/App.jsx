import { useState,useCallback, useEffect ,useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)  //for lenght changement 
  const [numberallowed, setnumberallowed] = useState(false) //for number changment 
  const [charallowed, setcharallowed] = useState(false) //for charater changment
  const [password, setpassword] = useState("") //for input state update 

  //useref hook 
  const passwordref = useRef(null)

  const passwordgenerator = useCallback(() =>{
    let pass = ""// Empty password 
    let str ="ABCDEFGHIJKLMNOPQRSTWXYZabcdefghijklmnopqrstwxyz" //data for password 
    
    if(numberallowed) str += "0123456789" 
    if(charallowed) str += "!@#$%^&*()_+=-{}[];:"

    for (let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length +1 ) 
      pass += str.charAt(char) //.charAt(char) is a JavaScript string method that returns the character at the position specified by the index char in the string str.

    }
    setpassword(pass)

  } , [length, numberallowed, charallowed, setpassword])  //set password is for optmization only , if you dont give this dependency this cannot effect the application
  //we use callback only for optimization perpose 

  const copypasswordtoclipboard = useCallback(() =>{
    passwordref.current?.select() //User ko copy effect dene ke liye hum use ref ko use karege
    window.navigator.clipboard.writeText(password) 

  },[password]) //only for optimization perpose we use callback o


  useEffect(() =>{
    passwordgenerator() 
    // console.log(passwordgenerator())
  },[length, numberallowed,charallowed, passwordgenerator]) //this method run when page reload or dependencies ke sath kuch ho tab


  return (
    <>
      <div>
        <h1>Password Generator</h1>
        <div id='inner'>
        <input type="text" 
        value={password}
        placeholder='password'
        readOnly
        ref={passwordref}  //refrance using useref
        />
        <button
        onClick={copypasswordtoclipboard}
        >copy</button>
        </div>


        <div id="outer">
          <div>
            <input 
            type="range" 
            min={6}
            max={30}
            value={length} 
            onChange={(e) =>{
              setlength(e.target.value)
              // console.log(e.target.value)
            }}
            />
            <label >Length: {length}</label>
          </div>

          <div id='values'>
            <input 
            type="checkbox"
            defaultChecked={numberallowed}
            id='"numberinput'
            onChange={()=>{
              setnumberallowed((prev) => !prev)
            }} 
            />
            <label>Numbers</label>
          </div>

          
          <div id='values'>
            <input 
            type="checkbox"
            defaultChecked={charallowed}
            id='"charaterinput'
            onChange={()=>{
              setnumberallowed((prev) => !prev) //value true or false 
            }} 
            />
            <label>Characters</label>
          </div>



        </div>
        
      </div>
      
    </>
  )
}

export default App
