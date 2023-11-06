
import CountdownTimer from './CountdownTimer';
import './App.css'
import ChatFeed from './ChatFeed';

function App() {
  return (
    <>
    <div className="Container" >
    
        <CountdownTimer />
      </div>
      <div className='Container2'>
      <p className="read-the-docs">
        A Graduation Timer
      </p>

      <div className="tips-text">
        <div className="monitor-wrapper">
          <div className="monitor">
            <div className="turn">
              <ul className="flip6">
                <li className='text-box'>And that made me crazy</li>
                <li className='text-box'>Filled with rats</li>
                <li className='text-box'>A rubber room</li>
                <li className='text-box'>They put me in a room</li>
                <li className='text-box'>I was crazy once</li>
                <li className='text-box'>Crazy?</li>
              </ul>
            </div>
          </div>
        </div>
    </div>

    </div>
      <div className="Container3">
      <div className="sidebar">
        <ChatFeed />
      </div>
      </div>

      


      

  
    </>
  )
}

export default App
