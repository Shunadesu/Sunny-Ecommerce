import React from 'react'
import Ndata from "./Ndata"
const Cart = () => {
  return (
    <>
      <div className="content products">
        {
          Ndata.map((value, index)=>{
            return(
              <div className="box" key={index}>
                <div className="imgDiv">
                  <img src={value.cover} alt="" />
                </div>
                <div className="contentDiv">
                  <h4>{value.name}</h4>
                  <p>{value.price}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Cart