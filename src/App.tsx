import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import List from './List'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const fruits = [({id: 1, name: "apple", calories: 95}),
                  ({id: 2, name: "banana", calories: 105}),
                  ({id: 3, name: "cherry", calories: 50}),
                  ({id: 4, name: "date", calories: 277}),
                  ({id: 5, name: "elderberry", calories: 73}),
                  ]
  const vegitables = [({id: 6, name: "carrot", calories: 41}),
                     ({id: 7, name: "broccoli", calories: 55}),
                     ({id: 8, name: "spinach", calories: 23}),
                     ({id: 4, name: "potato", calories: 77}),
                     ({id: 5, name: "onion", calories: 40}),
                    ]

  return (
    <>
      <List items={fruits} category="fruits" />
      <List items={vegitables} category="vegetables" />
    </>
  )
}

export default App
