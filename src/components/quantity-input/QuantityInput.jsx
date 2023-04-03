import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../features/cart/cartSlice';

function QuantityInput({ modifyCartInstantly }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  function addItem() {
    if (modifyCartInstantly) {
      dispatch(addItemToCart());
    }
    setQuantity(prevQuantity => prevQuantity + 1);
  }

  function decreaseItem() {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  }

  return (
    <div className='bg-lightGray flex font-bold text-sm'>
      <button
        onClick={decreaseItem}
        className='bg-transparent p-4 text-gray/50 lg:hover:text-orange active:text-orange lg:cursor-pointer'
      >
        -
      </button>
      <span className='text-darkGray p-4'>{quantity}</span>
      <button
        onClick={addItem}
        className='bg-transparent p-4 text-gray/50 lg:hover:text-orange active:text-orange lg:cursor-pointer'
      >
        +
      </button>
    </div>
  );
}

export default QuantityInput;
