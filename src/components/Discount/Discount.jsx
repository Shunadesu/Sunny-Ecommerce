import React from 'react'
import {FcBearish} from 'react-icons/fc'
import DCart from './DCart'
import './discount.css'
const Discount = () => {
  return (
    <>
    <section className='disCount background'>
        <div className="container pagePadding">
            <div className="heading flex">
                    <div className="leftContent flex">
                        <FcBearish className='icon'/>
                        <h2>Big Discount</h2>
                    </div>
                    <div className="rightContent flex">
                        <span>View All</span>
                        <i className="fa fa-caret-right"></i>
                    </div>
            </div>

            <DCart />
        </div>
    </section>
    </>
  )
}

export default Discount