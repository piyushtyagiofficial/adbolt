import { useState } from 'react'
import Hero from './components/Hero'
import Packages from './components/Packages'
import WhyChooseUs from './components/WhyChooseUs'
import FAQ from './components/FAQ'
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
      <WhyChooseUs />
      <FAQ />
    </div>
  )
}

export default App