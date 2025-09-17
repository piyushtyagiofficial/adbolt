import { useState } from 'react'
import Hero from './components/Hero'
import Packages from './components/Packages'
import './index.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookNowClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Hero onBookNowClick={handleBookNowClick} />
      <Packages />
    </div>
  )
}

export default App