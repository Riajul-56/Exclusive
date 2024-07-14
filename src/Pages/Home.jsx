import React from 'react'
import Banner from '../Components/Banner'
import Flashsales from '../Components/Flashsales'
import BCategories from '../Components/BCategories'
import BestSelling from '../Components/BestSelling'
import Offer from '../Components/Offer'
import ExploreProducts from '../Components/ExploreProducts'
import NewArrival from '../Components/NewArrival'
import CustomerService from '../Components/CustomerService'

const Home = () => {
  return (
   <>
   <Banner/>
   <Flashsales/>
   <BCategories/>
   <BestSelling/>
   <Offer/>
   <ExploreProducts/>
   <NewArrival/>
   <CustomerService/>
   </>
  )
}

export default Home
