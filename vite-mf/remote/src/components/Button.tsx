import { useState } from "react"


const Button = () => {
  const [count, setCount] = useState(0)
  return <button style={{ borderRadius: '8px', border: '1px solid transparent', padding: '.75rem 1rem', backgroundColor: '#1a1ff0', cursor: 'pointer' }} onClick={() => setCount(pre => pre + 1)}>click me: {count}</button>
}

export default Button
