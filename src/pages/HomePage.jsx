import React from 'react'
import HeroSection from '../components/homeComponents/heroSection/HeroSection'
import HeroContent from '../components/homeComponents/HeroContent'
import HeroAwardSection from '../components/homeComponents/HeroAwardSection'
import HeroFeatures from '../components/homeComponents/HeroFeatures'

const HomePage = () => {
  return (
    <div>
        <HeroSection/>
        <HeroAwardSection/>
        <HeroFeatures/>
        <HeroContent/>
    </div>
  )
}

export default HomePage