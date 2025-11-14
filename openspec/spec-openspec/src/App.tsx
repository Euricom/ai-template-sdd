import { BarChart } from './components/BarChart/BarChart'
import './App.css'

function App() {
  return (
    <div className="app">
      <header>
        <h1>Interactive Bar Chart Tool</h1>
        <p>Visualize data with customizable colors and themes</p>
      </header>
      <main>
        <BarChart />
      </main>
    </div>
  )
}

export default App
