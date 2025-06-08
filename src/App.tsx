import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Student from './Student.tsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Student name="Mewtow" age= {10} grade="A+" isStudent={true} />
      <Student />

    </>
  )
}

export default App
