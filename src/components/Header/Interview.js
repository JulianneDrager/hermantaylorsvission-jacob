import React from 'react'
import StyleInterview from "./Interview.module.css"

const Interview = () => {
  const currentYear = new Date().getFullYear()
    const interviewSubCon = StyleInterview.interviewSubCon
    const interviewDisplay = StyleInterview.interviewDisplay
    const interviewCon = StyleInterview.interviewCon
    const leftCorner = StyleInterview.leftCorner
    const rightCorner = StyleInterview.rightCorner
    const goldWords = StyleInterview.goldWords
    const mailCon = StyleInterview.mailCon
    const mailBox = StyleInterview.mailBox
    const mailConh2 = StyleInterview.mailConh2
    const footerDesktop = StyleInterview.footerDesktop
    return (
    <div className={interviewCon}>
        <img className={leftCorner} src='/assets/left-corner-background.png'alt='left corner background'/>
        <div className={interviewSubCon}>
        <h1><span className={goldWords}>LIFE'S CHAPTER</span><br/>HERMAN'S EXCLUSIVE INTERVIEW</h1>
    <div className={interviewDisplay}></div>
    <div className={mailCon}>
      <img className={mailBox} src='/assets/email-icon.png' alt='mail box'/>
      <h2 className={mailConh2}>CONTACT </h2>
      <h2>HERMAN@GMAIL.COM</h2>
    </div>
    <footer className={footerDesktop}>COPY RIGHT @ {currentYear} DESIGNINGGLORY.COM </footer>
    </div>
    <img className={rightCorner} src='/assets/right-corner-background.png'alt='left corner background' />
    </div>
  )
}

export default Interview