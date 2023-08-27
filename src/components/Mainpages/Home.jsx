import React from 'react'
import Categories from './Categories'
import SlideCard from './SlideCard'
import './home.css'
import SliderHome from './Slider'

const Home = () => {
  return (
    <section className='home'>
      <div className="container pagePadding flex">
        <Categories />
        <SliderHome />
      </div>
    </section>
  )
}

export default Home