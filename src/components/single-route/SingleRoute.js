import React from 'react'
import "./SingleRoute.css"
import { PRODUCTS__DATA } from "../../static"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

function SingleRoute() {
    const params = useParams()
    const oneItem = PRODUCTS__DATA?.find(el => el.id === params.id)
  return (
    <div className='single_route'>
        <div className="first__part__single_route">
            <div className="top__part"><img src={oneItem?.urls[0]} alt="" /></div>
            <div className="bottom__part">
                <div className="bottom__container">
                    <div className="bottom__card"><img src={oneItem?.urls[1]} alt="" /></div>
                    <div className="bottom__card"><img src={oneItem?.urls[2]} alt="" /></div>
                    <div className="bottom__card"><img src={oneItem?.urls[3]} alt="" /></div>
                    <div className="bottom__card"><img src={oneItem?.urls[4]} alt="" /></div>
                </div>
            </div>
        </div>
        <div className="second__part__single_route">
            <p className='name__pro'>{oneItem?.title}</p>
            <p className='inform'>{oneItem?.desc[0]}</p>
            <p className='inform'>{oneItem?.desc[1]}</p>
            <p className='inform'>{oneItem?.desc[2]}</p>
            <p className='inform'>{oneItem?.desc[3]}</p>
            <p className='inform'>{oneItem?.desc[4]}</p>
            <p className='inform'>{oneItem?.desc[5]}</p>
            <p className='inform'>{oneItem?.desc[6]}</p>
            <p className='inform'>{oneItem?.desc[7]}</p>
            <p className='inform'>{oneItem?.desc[8]}</p>

            <br />
            <br />
            <button className='back__to__home'><Link to={"/"}>Asosiy sahifaga</Link></button>
        </div>
    </div>
  )
}

export default SingleRoute