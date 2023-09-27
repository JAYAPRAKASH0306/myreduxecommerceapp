import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProductCard(props) {
  
  const Navigate=useNavigate()
  return (
    <div className='card m-2 cursor-pointer' style={{width:300}} role='button' onClick={()=>Navigate(`/products/${props.id}`)}>
       <div className='mt-2'> <img src={props.thumbnail} height={150}width={180} alt={props.tittle}className='broder-radius-9'/>
    </div>
    <div className='card-body'>
      <h5 className='card-title'>{props.title}</h5>
      <h6 className='mt-2'>Price Rs: {props.price}</h6>
      <h6 className='mt-2'>Rating:{props.rating}</h6>
       <div className='mt-4' >{props.stock>0?<button className='btn btn-success'>Add to Cart</button>
       :<button className='btn btn-outline-danger'>Out of Stock</button>}</div>
    </div>
    </div>
  )
}

export default ProductCard