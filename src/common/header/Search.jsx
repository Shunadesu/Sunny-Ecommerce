import React from 'react'
import logo from '../../components/assets/images/logo.svg'
import {Link} from 'react-router-dom'

const Search = ({cartItem}) => {

  window.addEventListener("scroll", function(){
    const search = document.querySelector(".search");
    search.classList.toggle("active",window.scrollY > 100);
  })



  return (
    <section className="search width">
      <div className="container pagePadding flex">
        <Link to ="/">
          <div className="logo width">
            <img src={logo} alt="logo" />
          </div>
        </Link>

        <div className="search-box flex">
          <i className="fa fa-search"></i>
            <input type="text" placeholder='Search and hit enter ... ' />
            <span>All Category</span>
        </div>

        <div className="icon flex">
            <Link to ="/user">
              <i className='fa fa-user icon_circle'></i>
            </Link>
          <div className="cart">
            <Link to ="/cart">
                <i className='fa fa-shopping-bag icon-circle'></i>
                  <span>{cartItem.length === 0 ? "0" : cartItem.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Search