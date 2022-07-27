import React from 'react';
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";

function Cart() {
    const {addToCart}=useContext(CartContext);
  return (
    <div 
    style={{
        width:"300px",
        height:"300px",
        padding:"10px",
        backgroundColor:"teal",
    }}
    >
        <button onClick={addToCart}>Add to Cart</button>
    </div>
  )
}

export default Cart;