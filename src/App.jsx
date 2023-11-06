
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
    </div>
      <div className="Container3">
      <div className="sidebar">
        <ChatFeed />
      </div>
      </div>

      


      
<div className="tipscontainer">
    <div className="tips-text">
        <div className="monitor-wrapper">
          <div className="monitor">
            <div className="turn">
              <ul className="flip5">
                <li className='text-box'>Prepare</li>
                <li className='text-box'>Turn-Off</li>
                <li className='text-box'>Save</li>
                <li className='text-box'>Smart</li>
                <li className='text-box'>Improve</li>
              </ul>
            </div>
          </div>
        </div>
    </div>
</div>
  
    </>
  )
}

export default App
