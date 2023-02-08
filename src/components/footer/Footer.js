import React from 'react'
import "./Footer.css"
import appStore from "../../assets/footerRasmlar/appStore.svg"
import google from "../../assets/footerRasmlar/google.svg"
import appGallery from "../../assets/footerRasmlar/appGallery.svg"

function Footer() {
  return (
    <div className='footer'>
        <div className="container">
            <div className="footer__container">
                <div className="footer__top">
                  <div className="first__part1">
                    <h2>Bizning mobil ilovamiz AppGallery, AppStore va Google-Play da </h2>
                    <div className="icons__container">
                      <div className='play__market1'><img src={appStore} alt="" /></div>
                      <div className='play__market2'><img src={google} alt="" /></div>
                      <div className='play__market3'><img src={appGallery} alt="" /></div>
                    </div>
                  </div>
                  <div className="second__part1"></div>
                </div>
                <hr className="line" />
                <div className="footer__middle"></div>
                <div className="footer__bottom"></div>
            </div>
        </div>
    </div>
  )
}

export default Footer