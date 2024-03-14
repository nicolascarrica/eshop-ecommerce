import React from 'react'
import Slider from '../../components/slider/Slider'
import NavigateButtons from '../../components/navigateButtons/NavigateButtons'
import RandomProducts from '../../components/randomProducts/RandomProducts'

const Home = () => {
  return (
    <div>
      <Slider />
      <NavigateButtons />
      <RandomProducts count={4} />
    </div>
  )
}

export default Home
