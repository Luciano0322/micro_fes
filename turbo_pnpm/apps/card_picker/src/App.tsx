import { useState } from 'react'
import { Shell } from 'ui'
import { CardPicker } from './CardPicker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Shell title="Card picker">
      <CardPicker/>
    </Shell>
  )
}

export default App
