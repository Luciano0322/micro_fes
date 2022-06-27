import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import Layout from './components/Layout'
import Home from './pages/Home'

function App() {
  const [colorScheme, setColorScheme] = useState<"light" | "dark">("light")

  return (
    <Router>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme
        }}
      >
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
          </Route>
        </Routes>
      </MantineProvider>
    </Router>
  )
}

export default App
