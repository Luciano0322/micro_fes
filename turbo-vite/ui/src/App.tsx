import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Button>hello</Button>
    </div>
  )
}

export default App
