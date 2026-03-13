import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Safaris from './pages/Safaris'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import LogIn from './pages/LogIn'
import Team from './pages/Team'
import Csr from './pages/Csr'
import './styles/global.css'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home />
      case 'safaris':
        return <Safaris />
      case 'products':
        return <Products />
      case 'about':
        return <About />
      case 'contact':
        return <Contact />
      case 'login':
        return <LogIn />
      case 'team':
        return <Team />
      case 'csr':
        return <Csr />
      default:
        return <Home />
    }
  }

  return (
    <div className="app-container">
      <Header onNavigate={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App
