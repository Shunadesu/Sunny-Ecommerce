import React from 'react'
import {FiCompass} from "react-icons/fi"
import {FcCalendar} from "react-icons/fc"

const Head = () => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
  return (
    <section className="head">
        <div className="pagePadding">
            <div className="container flex">
                <div className="left flex">
                    <div className="headPhone flex">
                        <i className="fa fa-phone"></i>
                        <label>+8452 337 2202</label>
                    </div>
                    <div className="headEmail flex">
                        <i className="fa fa-envelope"></i>
                        <label>namp280918@gmail.com</label>
                    </div>
                </div>

                <div className="right flex">
                    <div className="iconContent">
                        <span className="icon"><FiCompass /></span>
                        <span>HCM City</span>
                    </div>
                    <div className="iconContent">
                        <span className="icon"><FcCalendar /></span>
                        <span>{date}/{month}/{year}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Head