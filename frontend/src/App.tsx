import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Streaming from './pages/Streaming';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <header className="sticky top-0 z-50 shadow bg-white">
          <Navbar />
        </header>
        <main className="flex justify-center container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={
              <Home />
            } />
            <Route path="/stream" element={
              <Streaming />
            } />
          </Routes>
        </main>
        <div className="bg-white shadow-inner mt-auto">
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App;
