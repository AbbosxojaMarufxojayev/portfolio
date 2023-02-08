import React from 'react'
import "./Products.css"
import { BsHeart } from "react-icons/bs"

import {PRODUCTS__DATA} from "../../static"
import { useDispatch } from "react-redux"
import { ADD_TO_LIKE } from "../../context/action/actionType"
import { Link } from "react-router-dom"

function Products() {
  const dispatch = useDispatch()
  return (
    <div>
      <div className="products__container">
      {
        PRODUCTS__DATA?.map((items, inx)=> <div key={inx} className="products__cards">
        <div className="products_img__part"><Link to={`products/${items?.id}`}><img src={items?.url} alt="" /></Link><div className="like__icon"><BsHeart onClick={()=> dispatch({type: ADD_TO_LIKE, payload: items})}/></div></div>
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