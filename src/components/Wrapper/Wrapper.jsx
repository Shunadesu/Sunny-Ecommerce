import React from 'react'
import "./wrapper.css"
import Wdata from './Wdata'
const Wrapper = () => {
  return (
    <section className='wrapper background'>
        <div className="container pagePadding">
            {
                Wdata.map((value,index)=>{
                    return(
                        <div className="products" key={index}>
                            <div className="imgDiv icon-circle">
                                <i>{value.cover}</i>
                            </div>
                             <h3>{value.title}</h3>
                             <p>{value.decs}</p>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Wrapper