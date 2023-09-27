import React from 'react';
import { useParams } from 'react-router-dom';
import { Products } from '../Data/Products';
import { useDispatch } from 'react-redux';
import { addItem } from '../Redux/CartSlice'; // Corrected import path

function ProductsList() {
  const params = useParams();
  const dispatch = useDispatch();
  const product = Products.find((e) => e.id === parseInt(params.id));

  const addToCart = () => {
    // Dispatch the addItem action with the product as payload
    dispatch(addItem(product));
  };

  return (
    <div className='card m-2'>
      <div className='mt-2'>
        <img
          src={product.thumbnail}
          height={350}
          width={400}
          alt={product.title}
          className='border-radius-9'
        />
      </div>
      <div className='mt-3 card-body'>
        <h5 className='card-title'>{product.title}</h5>
        <h6 className='mt-2'>Price Rs: {product.price}</h6>
        <h6 className='mt-2'>Rating: {product.rating}</h6>
        <div className='mt-4'>
          {product.stock > 0 ? (
            <>
              <button className='btn btn-success'>Buy Now</button>
              <button
                className='ms-2 btn btn-success'
                onClick={addToCart}
              >
                Add to Cart
              </button>
            </>
          ) : (
            <button className='btn btn-outline-danger'>Out of Stock</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
