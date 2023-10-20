import React from 'react'
import CsHeaderStyle from "./CsHeaderStyle.module.css"

const ComingSoon = () => {
  const bookTitleCon = CsHeaderStyle.bookTitleCon
  const subBookTitleCon = CsHeaderStyle.subBookTitleCon
  const bookCoverCon = CsHeaderStyle.bookCoverCon
  const bookCover = CsHeaderStyle.bookCover
  const quoteCon = CsHeaderStyle.quoteCon
  const quoteMarkUp = CsHeaderStyle.quoteMarkUp
  const quoteMarkDown = CsHeaderStyle.quoteMarkDown
  const orderBtn = CsHeaderStyle.orderBtn
  const ComingSoonMainCon = CsHeaderStyle.ComingSoonMainCon
  const bookQuoteWrap = CsHeaderStyle.bookQuoteWrap
  const subBookTitle = CsHeaderStyle.subBookTitle
  const leftFireBolt = CsHeaderStyle.leftFireBolt



  return (
    <div className={ComingSoonMainCon}> 
        <div className={bookTitleCon}>
            <div className={subBookTitleCon}>
            <img src='/assets/book-title.png' alt='Book Title' className={subBookTitle}/>
            </div>
        </div>
        <div className={bookCoverCon}>
          <img className={leftFireBolt} src='/assets/fire-bolt-left-side.png' alt='fire bolt'/>
          <img className={bookCover} src='/assets/book-cover-with-fire-bottom.png' alt='Book Cover'/>
        <div className={bookQuoteWrap}>
        <div className={quoteCon}>
          <img className={quoteMarkUp} src='/assets/quote-corner.png' alt='quote'/>
          <h2>ENIM AD</h2>
          <p>For more than 30 years, people like you have been elevating their careers with Cisco Certifications. Learn how these IT professionals</p>
          <img className={quoteMarkDown} src='/assets/quote-corner.png' alt='quote'/>
        </div>
        <div className={quoteCon}>
          <img className={quoteMarkUp} src='/assets/quote-corner.png' alt='quote'/>
          <h2>ENIM AD</h2>
          <p>For more than 30 years, people like you have been elevating their careers with Cisco Certifications. Learn how these IT professionals</p>
          <img className={quoteMarkDown} src='/assets/quote-corner.png' alt='quote'/>
        </div>
        <button className={orderBtn}>ORDER NOW</button>
        </div>
        </div>
    </div>
  )
}

export default ComingSoon