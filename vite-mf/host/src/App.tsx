import './App.css'

// from remote component need to set declare.d.ts
import Button from 'remoteApp/Button'
import useStore from 'remoteApp/store'

function App() {
  const [count, setCount] = useStore()

  return (
    <>
      <h1>Here's host</h1>
      <Button />
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
