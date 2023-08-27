import React from 'react'
import Cart from './Cart'
import {FcGlobe} from 'react-icons/fc'
import "./newArrivals.css"

const NewArrivals = () => {
  return (
    <>
        <section className='newArrivals background'>
        <div className="container pagePadding">
                <div className="heading flex">
                    <div className="leftContent flex">
                        <FcGlobe className='icon'/>
                        <h2>New Arrivals</h2>
                    </div>
                    <div className="rightContent flex">
                        <span>View All</span>
                        <i className="fa fa-caret-right"></i>
                    </div>
                </div>

                <Cart />
            </div>
        </section>
    </>
  )
}

export default NewArrivals