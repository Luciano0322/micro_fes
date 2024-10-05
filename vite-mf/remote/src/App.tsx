import './App.css'
import Button from './components/Button'
import useCount from './store'

function App() {
  const [count, setCount] = useCount()

  return (
    <>
      <h1>Here is remote app</h1>
      <Button />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
