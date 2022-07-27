import { useContext } from "react";
import { createContext, useState } from "react";
import { AuthContext } from "./AuthContext";

export const CartContext=createContext();

export const CartContextProvider=({children})=>{
    const [cart,setCart]=useState(0);
    const {isAuthorized}=useContext(AuthContext);

    const addToCart=()=>{
        setCart(cart+1);
    }

    const buy=()=>{
        if(isAuthorized){
            console.log('Can Buy Products');
            alert('User Can buy Products');
        }else{
            console.log('Can not buy a Product without logIn');
            alert('User Can not buy a product without login');
        }
    }
    return <CartContext.Provider value={{cart, addToCart,buy}}>{children}</CartContext.Provider>
}