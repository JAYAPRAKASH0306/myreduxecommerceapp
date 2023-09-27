import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductListItems from '../components/ProductListItems';
import {
  modifyItem,
  removeItem,
  incrementItem,
  decrementItem,
} from '../Redux/Reducer/Cart';

function CartPage() {
  const cartItems = useSelector((state) => state.cart.list);
  const dispatch = useDispatch();
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.count;
    }, 0);
  };


  const handleIncrement = (item) => {
    dispatch(incrementItem({ id: item.id }));
  };

  const handleDecrement = (item) => {
    dispatch(decrementItem({ id: item.id }));
  };

  const handleRemove = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return (
    <>
      {cartItems.map((item) => (
        <ProductListItems
          key={item.id}
          {...item}
          incrementItem={() => handleIncrement(item)}
          decrementItem={() => handleDecrement(item)}
          removeItem={() => handleRemove(item.id)}
        />
      ))}
            <p>Total Price: Rs. {calculateTotal()}</p>

    </>
  );
}

export default CartPage;
