import React from 'react'
import "./SingleRoute.css"
import { PRODUCTS__DATA } from "../../static"
import { useDispatch, useSelector } from "react-redux"
import { ADD_TO_LIKE, REMOVE_LIKE } from "../../context/action/actionType"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { BsHeart } from "react-icons/bs"

function SingleRoute() {
    const dispatch = useDispatch()
    const likes = useSelector(s=>s.heart)

    const addHeart = (item)=>{
        let index = likes.findIndex(i=> i.id === item.id)
        if(index > -1){
          return
        }
    
        dispatch({type: ADD_TO_LIKE, payload: item})
      }

    const params = useParams()
    const oneItem = PRODUCTS__DATA?.find(el => el.id === params.id)
  return (
    <div className='single_route'>
        <div className="first__part">
            <div className="inner__big__part1">
                <div className="img__part__inner"><img src={oneItem?.urls[0]} alt="" /></div>
                <div className="more__images__container">
                    <div className="more__img__card"><img src={oneItem?.urls[0]} alt="" /></div>
                    <div className="more__img__card"><img src={oneItem?.urls[1]} alt="" /></div>
                </div>
            </div>
        </div>
        <div className="second__part">
            <h1 className='name__single'>{oneItem?.title}</h1>
            <div className="description">{oneItem?.desc[0]}</div>
            <div className="description">{oneItem?.desc[1]}</div>
            <div className="description">{oneItem?.desc[3]}</div>
            <div className="description">{oneItem?.desc[4]}</div>
            <div className="description">{oneItem?.desc[5]}</div>
            <div className="description">{oneItem?.desc[6]}</div>
            <div className="description">{oneItem?.desc[7]}</div>
        </div>
        <div className="third__part">
            <p className="price__single">{oneItem?.price} so'm</p>
            <div className="buttons">
                <button className="buy">Sotib olish</button>
                <button onClick={()=> addHeart(oneItem)} className="liked">Sevimlilar <BsHeart/></button>
                <button className="to__cart">Savatchaga qo'shish</button>
            </div>
            <p className="dostavka">Yetkazib berish xizmati bepul!</p>
        </div>
    </div>
  )
}

export default SingleRoute