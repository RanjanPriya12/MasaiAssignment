import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { CartContext } from '../Context/CartContext';
import { ThemeContext } from '../Context/ThemeContext';
import ProductCount from './ProductCount';


function Navbar() {
   
    const {isLight,toggleTheme}=useContext(ThemeContext);
    const {isAuthorized, logIn, logOut}=useContext(AuthContext);
    const {buy}=useContext(CartContext);
  return (
    <div style={{display:"flex",
    justifyContent:"end",
    margin:"10px",
    fontSize:"30px",
    padding:"15px",
    border:"1px solid red"}}>

     <div>
     <ProductCount/>
     </div>

<div>
  <button style={{marginLeft:"15px", padding:"5px", fontSize:"18px"}} onClick={buy}>Buy</button>
  <button style={{marginLeft:"15px", padding:"5px", fontSize:"18px"}} onClick={toggleTheme}>{`${isLight?'Dark':'Light'}`}</button>
</div>

     <div>
     <button style={{marginLeft:"15px", padding:"5px", fontSize:"18px"}}
     onClick={()=>{
      if(isAuthorized)
      logOut();
      else
          
          logIn("Priya","Ranjan");
     }}
     >{isAuthorized ? "logOut":"Login"}</button>
     </div>
    
    
    
    </div>
    
  )
}

export default Navbar;