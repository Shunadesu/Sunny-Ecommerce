import React from 'react'
import Home from '../components/Mainpages/Home'
import FlashDeal from '../components/FlashDeal/FlashDeal'
import TopCate from '../components/Top/topCate'
import NewArrivals from '../components/NewArrivals/NewArrivals'
import Discount from '../components/Discount/Discount'
import Shops from '../components/Shops/Shops'
import Annocument from '../components/Annocuments/Annocument'
import Wrapper from '../components/Wrapper/Wrapper'

const Pages = ({productItems, cartItem, addToCart, shopItems}) => {
  return (
    <div>
        <Home cartItem={cartItem} />
        <FlashDeal productItems={productItems} addToCart ={addToCart} />
        <TopCate />
        <NewArrivals />
        <Discount />
        <Shops shopItems={shopItems} addToCart={addToCart}/>
        <Annocument/>
        <Wrapper/>
    </div>
  )
}

export default Pages