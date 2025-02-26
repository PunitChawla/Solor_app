import { useState } from 'react'

import './App.css'
import Navbar from './Components/navbar'
import HeroSection from './Components/Hero'
import WhoWeAre from './Components/Who_we_are'
import FrontOfficeSection from './Components/FrontOfficeSection'
import InfiniteScrollComponent from './Components/InfiniteScrollComponent'
import Clients from './Components/Clients'
import ContactForm from './Components/ContactForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="w-full h-screen bg-custom-gradient">
      <Navbar/>
      <HeroSection/>
    </div> 
      <WhoWeAre/>
    <div>
    </div>
    <div className="">
      <FrontOfficeSection/>
    </div>
    <div className>
      <InfiniteScrollComponent/>
    </div>
    <div className>
     <Clients/>
    </div>
    <div className>
     <ContactForm/>
    </div>
    </>
  )
}

export default App
