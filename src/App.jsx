
import CountdownTimer from './CountdownTimer';
import './App.css'
import ChatFeed from './ChatFeed';

function App() {
  return (
    <>
<div className="grid-container">

  <div className="grid-item1">

  <div className='Container4'>
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
                <li className='text-box'>I cba pausing it</li>
                <li className='text-box'>You don't have time</li>
                <li className='text-box'>Why you still here?</li>
                <li className='text-box'>You still here??</li>
                <li className='text-box'>Its going down</li>
                <li className='text-box'>Timers going down</li>
              </ul>
            </div>
          </div>
        </div>
    </div>

  </div>

    </div>



  </div>
  <div className="grid-item2">


  <div className="Container3">
      <div className="sidebar">
        <ChatFeed />
      </div>
      </div>


  </div>
</div>
    </>
  )
}

export default App
