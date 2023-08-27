import React from 'react'
import FlashCard from './FlashCard'
const FlashDeal = ({productItems, addToCart}) => {
  return (
    <section className='flash background'>
        <div className="container pagePadding">
            <div className="heading flex">
                <i className='fa fa-bolt'></i>
                <h1>Flash Deals</h1>
            </div>
            <FlashCard productItems={productItems} addToCart={addToCart} />
        </div>
    </section>
  )
}

export default FlashDeal