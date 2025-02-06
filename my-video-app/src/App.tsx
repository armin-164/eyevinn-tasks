import { useState } from 'react'
import './App.css'
import Player from './components/Player'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React + Eyevinn OSC</h1>
      <div className="card">
        <Player src="https://eyevinnlab-devguide.minio-minio.auto.prod.osaas.io/devguide/VINN/67670fd6-b66c-4e50-b730-4758a1ea4e3b/index.m3u8"/>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App