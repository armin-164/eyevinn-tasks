import { useState } from 'react'
import './App.css'
import Player from './components/Player'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React + Eyevinn OSC</h1>
      <div className="card">
        <Player src="https://eyevinnlab-devguide.minio-minio.auto.prod.osaas.io/devguide/VINN/8f943546-e1f9-46ba-8162-87fd1344a02b/index.m3u8"/>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App