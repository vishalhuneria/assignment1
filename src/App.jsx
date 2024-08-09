import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header.jsx'
import Third from './components/Third.jsx'
import Fourth from './components/Fourth.jsx'
import Footer from './components/Footer.jsx'
import Cards from './components/Cards.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Header />
      <Third />
      <Fourth />
      <Cards />
      <Footer />
    </>
  )
}

export default App
