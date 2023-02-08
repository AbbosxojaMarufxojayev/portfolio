import React from 'react'
import "./Like.css"
import Empty from "../../components/empty/Empty"
import parashut from "../../assets/parashut.png"
import { useSelector } from "react-redux"

import { PRODUCTS__DATA } from "../../static"
import { keyboard } from '@testing-library/user-event/dist/keyboard'

function Like() {
  const elements = PRODUCTS__DATA
  const like = useSelector(s => s.heart)


  return (
    <div className='container like'>
      {
        like.length === 0 ?
        <Empty url={parashut} text={"Sevimli mahsulotlar yo'q"}/>
        :
        <div className='liked__ones'>
          {
            like?.map((i, inx)=> <div className='perviy__part' key={inx}><img src={i?.urls[0]} alt="" /></div>)
          }
          {
            like?.map((el, inx)=> <div key={inx} className='ftoroy__part'><p>{el?.title}</p></div>)
          }
          {
            like?.map((item, inx)=> <div key={inx} className='tretiy__part'><del>{item?.price} so'm</del> <p>{Math.floor(item?.price / 1.4)} so'm</p></div> )
          }
          {
            like?.map((items, inx)=> <div key={inx} className='tortinchi_qism'><button className='add'>Savatchag qo'shish</button> <button className='remove'>Olib tashlash</button></div> )
          }
        </div>
      }
    </div>
  )
}

export default Like