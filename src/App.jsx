import { useState } from 'react'
import Hero from './components/Hero'
import Packages from './components/Packages'
import WhyChooseUs from './components/WhyChooseUs'
import FAQ from './components/FAQ'
import CompanyAbout from './components/CompanyAbout'
import EnquiryModal from './components/EnquiryModal'
import Header from './components/Header'
import Footer from './components/Footer'
import Offer from './components/Offer'
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
      <Offer />
      <Header onBookNowClick={handleBookNowClick} />
      <Hero onBookNowClick={handleBookNowClick} />
      <Packages />
      <WhyChooseUs />
      <FAQ />
      <CompanyAbout />
      <EnquiryModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <Footer />
    </div>
  )
}

export default App