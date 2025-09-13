import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import GamesPage from './components/GamesPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/games" element={<GamesPage />} />
      </Routes>
    </Router>
  )
}

export default App