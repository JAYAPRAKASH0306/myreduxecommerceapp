import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from '../Redux/Reducer/Cart'; // Update the import path

function CartPage() {
  const cartItems = useSelector(state => state.cart.list);
  const dispatch = useDispatch();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity; // Corrected from item.count to item.quantity
    }, 0);
  };

  const handleIncrement = itemId => {
    dispatch(incrementQuantity(itemId));
  };

  const handleDecrement = itemId => {
    dispatch(decrementQuantity(itemId));
  };

  const handleRemove = itemId => {
    dispatch(removeItem(itemId));
  };

  return (
    <>
      {cartItems.map(item => (
        <div className='d-flex m-4 align-items-center justify-content-center' key={item.id}>
          <div className='mt-2 me-4'>
            <img
              src={item.thumbnail} // Corrected from props.thumbnail
              height={150}
              width={180}
              alt={item.title} // Corrected from props.title
              className='border-radius-9'
            />
          </div>
          <h5 className='card-title me-4'>{item.title}</h5>
          <h6 className='mt-2 me-4'>Price Rs: {item.price}</h6>
          <h6 className='mt-2 me-4'>Rating: {item.rating}</h6>
          <button className='btn btn-danger ms-3' onClick={() => handleIncrement(item.id)}>
            +
          </button>
          <span className='ms-3'>Quantity {item.quantity}</span>
          <button className='btn btn-danger ms-3' onClick={() => handleDecrement(item.id)}>
            -
          </button>
          <button className='btn btn-danger ms-3' onClick={() => handleRemove(item.id)}>
            Remove
          </button>
        </div>
      ))}
      <p>Total Price: Rs. {calculateTotal()}</p>
    </>
  );
}

export default CartPage;
