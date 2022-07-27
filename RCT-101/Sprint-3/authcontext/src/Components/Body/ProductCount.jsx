import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

function ProductCount() {
    const {cart}=useContext(CartContext);
  return (
    <div>
        Cart :{cart}
    </div>
  )
}

export default ProductCount;