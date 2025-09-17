import { useState } from 'react'
import Hero from './components/Hero'
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
      
    </div>
  )
}

export default App