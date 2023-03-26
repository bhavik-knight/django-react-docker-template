import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Typography, Button, ButtonGroup, Box } from "@mui/material"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Typography variant="h1">Hello, World</Typography>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Typography variant="h4">Django + React + Docker</Typography>

      <Box>
        <Typography variant="body-1" fontSize="2em">count is {count}</Typography><br />

        <ButtonGroup variant="contained" size="large">
          <Button onClick={() => { setCount(count => count - 1) }}>-</Button>
          <Button onClick={() => { setCount(count => count + 1) }}>+</Button>
        </ButtonGroup>
      </Box>

      <Typography variant="h6">Created by Bhavik</Typography>
    </div >
  )
}

export default App
