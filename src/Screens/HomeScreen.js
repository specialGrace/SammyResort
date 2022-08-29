import React from 'react'

import HomePageBanner from '../components/HomePageBanner/Banner'
import HomePageServices from '../components/HomePageServices/Services'
import FeatureRooms from '../components/FeatureRooms/FeaturedRooms'




function HomeScreen() {
  return (
    <div>
      <HomePageBanner />
      <HomePageServices />
      <FeatureRooms />
    </div>
  )
}

export default HomeScreen