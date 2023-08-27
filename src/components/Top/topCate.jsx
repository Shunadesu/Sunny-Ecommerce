import React from 'react'
import './top.css'
import TopCart from './TopCart'
const topCate = () => {
  return (
    <>
        <section className='topCate background'>
            <div className="container pagePadding">
                <div className="heading flex">
                    <div className="leftContent flex">
                        <i className="fa fa-border-all"></i>
                        <h2>Top Category</h2>
                    </div>
                    <div className="rightContent flex">
                        <span>View All</span>
                        <i className="fa fa-caret-right"></i>
                    </div>
                </div>

                <TopCart />
            </div>
        </section>
    </>
  )
}

export default topCate