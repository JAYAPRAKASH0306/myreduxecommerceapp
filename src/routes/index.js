import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from "../containers/Home"


function RouterLists() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="*" element={<Home/>}></Route>

    </Routes>
    </BrowserRouter>
  )
}

export default RouterLists