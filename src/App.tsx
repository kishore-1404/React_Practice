import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UserGreetings from './UserGreetings'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserGreetings isLoggedIn={true} name="John Doe" />
    </>
  )
}

export default App
