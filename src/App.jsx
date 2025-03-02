import { useState } from 'react'

import './App.css'
import Navbar from './Components/navbar'
import HeroSection from './Components/Hero'
import WhoWeAre from './Components/Who_we_are'
import FrontOfficeSection from './Components/FrontOfficeSection'
import InfiniteScrollComponent from './Components/InfiniteScrollComponent'
import Clients from './Components/Clients'
import ContactForm from './Components/ContactForm'
import StatsAndFooter from './Components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="w-full h-screen bg-custom-gradient">
      <Navbar/>
      <HeroSection/>
    </div> 
    <div className='w-full h-screen'>
      <WhoWeAre/>
    </div>
    <div className="w-full h-screen">
      <FrontOfficeSection/>
    </div>
    <div className = "w-full h-screen">
      <InfiniteScrollComponent/>
    </div>
    <div className>
     <Clients/>
    </div>
    <div className>
     <ContactForm/>
    </div>
    <div className>
     <StatsAndFooter/>
    </div>
    </>
  )
}

export default App
