import React from 'react'
import Categ from './Categ'
import {FcCellPhone} from 'react-icons/fc'
import ShopCart from './ShopCart'
import './shops.css';
const Shops = ({shopItems, addToCart}) => {
  return (
    <section className='shops background'>
        <div className="container pagePadding flex">
            <div className="sleftContent">
                <Categ />
            </div>

            <div className="srightContent">
                <div className="heading flex">
                    <div className="leftContent flex">
                        <FcCellPhone className='icon'/>
                        <h2>Mobile Phones</h2>
                    </div>
                    <div className="rightContent flex">
                        <span>View All</span>
                        <i className="fa fa-caret-right"></i>
                    </div>
                </div>
                <div className="shopContent">
                    <ShopCart shopItems={shopItems} addToCart={addToCart}/>
                </div>
            </div>
            
        </div>
        
    </section>
  )
}

export default Shops