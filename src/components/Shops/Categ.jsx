import React, {useState} from 'react'

const Categ = () => {
    const data = [
    {
      cateImg: "./images/category/apple-logo.png",
      cateName: "Apple",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Samsung",
    },
    {
      cateImg: "./images/category/cat-3.png",
      cateName: "Oppo",
    },
    {
      cateImg: "./images/category/vivo.png",
      cateName: "Vivo",
    },
    {
      cateImg: "./images/category/xiaomi.png",
      cateName: "Redmi",
    },
    {
      cateImg: "./images/category/sony.png",
      cateName: "Sony",
    },
    ]

    const SunnyData =[
      {
        cateImg: "./images/category/smartphone.png",
        cateName: "Cellphone",
      },
      {
        cateImg: "./images/category/shopee.png",
        cateName: "Shopee",
      },
      {
        cateImg: "./images/category/lazada.png",
        cateName: "Lazada",
      },
      {
        cateImg: "./images/category/amazon.png",
        cateName: "Amazone",
      },
      {
        cateImg: "./images/category/tik-tok.png",
        cateName: "TikTok",
      },
      {
        cateImg: "./images/category/sunny.png",
        cateName: "Sunny",
      },
    ]

  const [Active, setActive] = useState(true)
  return (
    <div className="cate products">
        <div className="cateHeading flex">
            <h1 onClick={()=>{
              if(Active) {
                setActive(false)
              }
              else {
                setActive(true)
              }
            }}>
              {
                Active ? "Brands" : "Shops"
              }
            <span className='sunnymargin'>|</span> 
            <span className='change'>
            {
              Active ? "Shops" : "Brands"
            }
            </span>
            
            </h1>
        </div>
        {
          Active ? 
        <>
          {
              data.map((value,index)=>{
                  return(
                      <div className="box flex">
                        <div className="imgDiv">
                          <img src={value.cateImg} alt="" />
                        </div>
                        <h3>{value.cateName}</h3>
                      </div>
                  )
              })
          }
        </>
        :
        <>
          {
              SunnyData.map((value,index)=>{
                  return(
                      <div className="box sunny flex">
                        <div className="imgDiv">
                          <img src={value.cateImg} alt="" />
                        </div>
                        <h3>{value.cateName}</h3>
                      </div>
                  )
              })
          }
        </>
        }
    </div>
  )
}

export default Categ