import React, {useState} from 'react'

const Categories = () => {

  const Data =[
    {
      cateImg: "./images/category/cat1.png",
      cateName: 'Fashion', 
    },

    {
      cateImg: "./images/category/cat2.png",
      cateName: 'Electronic', 
    },

    {
      cateImg: "./images/category/cat3.png",
      cateName: 'Car', 
    },

    {
      cateImg: "./images/category/cat4.png",
      cateName: 'Home & Garden', 
    },

    {
      cateImg: "./images/category/cat5.png",
      cateName: 'Gift', 
    },

    {
      cateImg: "./images/category/cat6.png",
      cateName: 'Music', 
    },

    {
      cateImg: "./images/category/cat7.png",
      cateName: 'Health & Beauty', 
    },

    {
      cateImg: "./images/category/cat8.png",
      cateName: 'Pets', 
    },

    {
      cateImg: "./images/category/cat9.png",
      cateName: 'Baby Toys', 
    },
    
    {
      cateImg: "./images/category/cat10.png",
      cateName: 'Groceries', 
    },

    {
      cateImg: "./images/category/cat11.png",
      cateName: 'Books', 
    },
  ]

  // window.addEventListener("scroll", function(){
  //   const search = document.querySelector(".category");
  //   if(this.window.scrollX > 1){
  //     search.classList.add("mtop");
  //   }
  //   else{
  //     search.classList.remove("mtop");
  //   }
    
  // })
  const [width, setWidth] = useState(window.innerWidth)
  window.addEventListener('resize', function(event){
    setWidth(window.innerWidth);
  })

  return (
      <div className={width <= 768 ? "category" : "category mtop"}>
      {
        Data.map(({cateImg, cateName}, index) => {
          return(
            <div className="box flex">
              <div className="imgDiv">
                <img src={cateImg} alt="" />
              </div>
              <span className=''>{cateName}</span>
            </div>
          )
        })
      }
      </div>
  )
}

export default Categories