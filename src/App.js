import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Screen from "./components/Screen"
import Header from "./components/Header/Header"
import Interview from "./components/Interview/Interview"
import DesktopInterview from "./components/Interview/DesktopInterview"

const App = () => {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/tmp/hermantaylorsvision.com/" element={<Screen/>} />
        </Routes>
      </BrowserRouter> */}
      {/* <Header></Header> */}
      <Interview></Interview>
    </>
  )
}

export default App