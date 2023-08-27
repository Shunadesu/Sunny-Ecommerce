import React from 'react'
import TopData from './TopData'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
const TopCart = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: true,
        arrows: false,
        autoplay: true,
        speed: 500,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
      }
  return (
    <div 
    >
    <Slider {...settings}>
    {
        TopData.map((value,index) => {
            return(
                <div className="box products" key={index} style={{
                  width: 288 + "px",
                  display: "block"
                }}>
                    <div className="nameTop flex">
                        <span className='topLeft'>{value.para}</span>
                        <span className='topRight'>{value.desc}</span>
                    </div>
                    <div className="imgDiv">
                        <img src={value.cover} alt="" />
                    </div>
                </div>
            )
        })
        
    }
    </Slider>
    </div>
  )
}

export default TopCart