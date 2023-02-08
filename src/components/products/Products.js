import React from 'react'
import "./Products.css"
import { BsHeart } from "react-icons/bs"
import { AiFillHeart } from "react-icons/ai"

import {PRODUCTS__DATA} from "../../static"
import { useDispatch, useSelector } from "react-redux"
import { ADD_TO_LIKE } from "../../context/action/actionType"
import { Link } from "react-router-dom"

function Products() {
  const dispatch = useDispatch()
  const likes = useSelector(s=>s.heart)




  const addHeart = (item)=>{
    let index = likes.findIndex(i=> i.id === item.id)
    if(index > -1){
      return
    }

    dispatch({type: ADD_TO_LIKE, payload: item})
  }
  return (
    <div>
      <div className="products__container">
      {
        PRODUCTS__DATA?.map((items, inx)=> <div key={inx} className="products__cards">
        <div className="products_img__part"><Link to={`products/${items?.id}`}><img src={items?.url} alt="" /></Link>
        <div onClick={()=> addHeart(items)} className="like__icon">
          {
            likes?.some(i=> i.id === items.id) ? <AiFillHeart/> : <BsHeart/>
          }
        </div>
        </div>
        <div className="products_text__part">
          <p className="name">{items?.title}</p>
          <p className="price">{items?.price} so'm</p>
          <button className="credit__btn"><p className="credit__price">{Math.floor(items?.price / 12)} so'm x 12 oy</p></button>
          <button className="products__btn">{items?.icon} Add to Cart</button>
        </div>
      </div>)
      }
      </div>
    </div>
    
  )
}

export default Products