import { useState } from 'react'
import CountdownTimer from './CountdownTimer';
import './App.css'
import ChatFeed from './ChatFeed';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <CountdownTimer />
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="sidebar">
        <ChatFeed />
      </div>
    </>
  )
}

export default App
