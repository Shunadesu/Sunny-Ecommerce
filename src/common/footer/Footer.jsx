import React from 'react'
import "./footer.css"
import logo from '../../components/assets/images/logo.svg'
import {Link} from 'react-router-dom'
import {SiGmail} from 'react-icons/si'

import {BsFacebook, BsLinkedin, BsInstagram} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
        <div className="container pagePadding">
            <div className="leftContent">
                <div className="logoContent">
                    <Link to ="/"><img src={logo} alt="" /></Link>
                </div>
                <div className="divContent">
                    <p>Sunny makes Bonik in 2 weeks, after working in Haru Sushi. Late night, to dawn maybe.. ye.. maybe to 5 or 6 am, by the tutorials on YouTube.</p>
                    <div className="aContent">
                        <div className="socialsMedia">
                            <a href="https://www.facebook.com/Sunny.pnhn"><BsFacebook className='icon'/></a>
                            <a href="mailto:namp280918@gmail.com"><SiGmail className='icon'/></a>
                        </div>
                        <div className="socialsMedia">
                            <a href="https://www.facebook.com/Sunny.pnhn"><BsLinkedin className='icon'/></a>
                            <a href="mailto:namp280918@gmail.com"><BsInstagram className='icon'/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rightContent">
                <div className="divContent">
                    <div className="headingContent">
                        <h2>About Us</h2>
                    </div>
                    <div className="liContent">
                        <li>Careers</li>
                        <li>Our Stores</li>
                        <li>Our Cares</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </div>
                </div>
                <div className="divContent">
                    <div className="headingContent">
                        <h2>Customer Care</h2>
                    </div>
                    <div className="liContent">
                        <li>Help Center</li>
                        <li>How to Buy</li>
                        <li>Track Your Order</li>
                        <li>Corporate & Bulk Purchasing</li>
                        <li>Returns & Refunds</li>
                    </div>
                </div>
                <div className="divContent">
                    <div className="headingContent">
                        <h2>Contact Us</h2>
                    </div>
                    <div className="liContent">
                        <li>70 Washington Square South, New York, NY 10012, United States</li>
                        <li>Email: uilib.help@gmail.com</li>
                        <li>Phone: +1 1123 456 780</li>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer