import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Player from './components/Player';

function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stream" element={<Player />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  )
}

export default App;
