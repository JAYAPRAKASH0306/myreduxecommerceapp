import React from 'react'
import { useDispatch, useSelector }from 'react-redux'
import ProductListItems from '../components/ProductListItems'
import { modifyItem } from '../Redux/Reducer/Cart'

function CartPage() {
  const list =useSelector((state)=>state.cart.list)
  const dispatch=useDispatch()
  const incrementItem=()=>{
  dispatch(modifyItem({...item,count:item.count+1}))
  }

  return (
<>
{list.map((item)=> <ProductListItems{...item} key={item.id} 
incrementItem={()=>incrementItem(item)} />)}

</>  

)
}

export default CartPage