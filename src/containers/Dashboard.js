import React from 'react'
import { Products } from '../Data/Products'
import ProductCard from '../components/ProductCard'

function Dashboard() {
  return (
    <div className='d-flex flex-wrap justify-content-center p-3'>
      {Products.map((prod) => (
        <ProductCard key={prod.id} {...prod} />
      ))}
    </div>
  )
}

export default Dashboard
