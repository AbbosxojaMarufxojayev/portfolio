import React from 'react'
import Empty from '../../components/empty/Empty'
import "./Cart.css"
import savatcha from "../../assets/savatcha.png"

function Cart() {
  return (
    <div className='container cart'>
      <Empty url={savatcha} text={"Savatchangiz bo'sh"}/>
    </div>
  )
}

export default Cart