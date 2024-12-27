import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'


function App() {
  

  return (
    
    <div >
      <h1 className='bg-green-400 text-red p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username = "chai or code" />
      <Card username="vite or react"/>

    </div>
      
    
  )
}

export default App
