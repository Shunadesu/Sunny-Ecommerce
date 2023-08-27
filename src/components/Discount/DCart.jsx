import React from 'react'
import DData from './DData'
const DCart = () => {
  return (
    <div className='disContent'>
    {
        DData.map((value, index)=>{
            return(
                <div className="box products">
                    <div className="imgDiv">
                      <img src={value.cover} alt="" />
                    </div>
                    <div className="contentDiv">
                      <h3>{value.name}</h3>
                      <div className="valueDiscount flex">
                        <p className='price'>{value.price}</p>
                        <p className='dis'>{value.disprice}</p>
                      </div>
                    </div>
                </div>
            )
        })
    }
    </div>
  )
}

export default DCart