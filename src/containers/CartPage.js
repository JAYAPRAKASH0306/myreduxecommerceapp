import React from 'react'
import { useSelector }from 'react-redux'

function CartPage() {
  const list =useSelector((state)=>state.cart.list)

  return (
    <div>
      Cart{list[0].id}</div>
  )
}

export default CartPage