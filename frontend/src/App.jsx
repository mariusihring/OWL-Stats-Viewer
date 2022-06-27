import logo from './logo.svg'
import './App.css'
import Teams from './Components/Teams/Teams'
function App() {
  return (
    <div className='App'>
      <div className='Navigation'>
        <button>Games</button>
        <button>Teams</button>
        <button>Players</button>
        <button>Heroes</button>
      </div>
      <div className='Content'>
        <div>
          <Teams />
        </div>
      </div>
    </div>
  )
}

export default App
