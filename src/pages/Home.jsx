








import React from 'react'
import HeroSection from '../components/HeroSection'

import WelcomeSection from '../components/WelcomeSection'
import ServicesOfferSection from '../components/ServicesOfferSection'
import ProfessionalCTASection from '../components/Ctr'
import WhoWeAreSection from '../components/WhoWeAreSection'
import HowServicesWorkSection from '../components/HowServicesWorkSection'
import AboutCallbackSection from '../components/AboutCallbackSection'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <WelcomeSection/>
      <ServicesOfferSection/>
      <ProfessionalCTASection/>
      <WhoWeAreSection/>
      <HowServicesWorkSection/>
      <AboutCallbackSection/>

    </div>
  )
}

export default Home