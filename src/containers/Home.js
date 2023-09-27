import React from 'react'
import Header from '../components/Header'
import { Route, Routes } from 'react-router-dom'
import Dashboard from "../containers/Dashboard"
import ProductsList from './ProductsList'
import CartPage from './CartPage'


function Home() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/products/:id" element={<ProductsList/>}></Route>
        <Route path="/cart" element={<CartPage/>}></Route>
      </Routes>
    </div>
  )
}

export default Home