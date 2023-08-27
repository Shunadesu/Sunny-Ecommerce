import React, {useState} from 'react'
import Slider from 'react-slick'

const NextArrow = (props) =>{
    const {onClick} = props
    return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
    )
}
const PrevArrow = (props) =>{
  const {onClick} = props
  return (
  <div className='control-btn' onClick={onClick}>
    <button className='prev'>
      <i className="fa fa-long-arrow-alt-left"></i>
    </button>
  </div>
  )
}

const FlashCard = ({productItems, addToCart}) => {
  const [count, setCount] = useState(0)
  
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e)=>{
    setIsActive((current)=> !current)
    setCount(count+1);
  }
  const handleMinusClick = (e)=>{
    setIsActive((current)=> !current)
    setCount(count-1);
  }
  // const increment = () =>{
    
  // }
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };
  return (
    <>
    <Slider {...settings}>
    {
      productItems.map((productItems) => {
        return (
        <div className="box">
          <div className="products">
            <div className="imgContent">
              <span className="discount">{productItems.discount}%OFF</span>
              <div className="imgDiv">
                <img src={productItems.cover} alt="" />
              </div>
              <div className="products-like">
                <label>{count}</label>
                <br />
                {
                isActive ? 
                <i className= {`fa fa-heart ${isActive ? 'isred' : ''}`}
                 onClick={handleMinusClick}
                ></i>
                :
                <i className= {`fa-regular fa-heart ${isActive ? 'isred' : ''}`}
                 onClick={handleClick}
                ></i> 
                } 
              </div>
            </div>
            <div className="products-details">
              <h3>{productItems.name}</h3>
              <div className="rate">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <div className="price">
                <h4>{productItems.price}.00</h4>
                <button onClick={ () => addToCart(productItems) }>
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        )
      })
    }
    </Slider>
    </>
  )
}

export default FlashCard
