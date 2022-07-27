import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Cart from './Cart';

function Product() {
  const { isAuthorized}=useContext(AuthContext);
  return (
    <div>
      Product1 :{isAuthorized?'Logged-In':'Logged-Out'}
      <Cart/>
    </div>
  )
}

export default Product;