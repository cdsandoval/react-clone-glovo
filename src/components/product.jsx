/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { useIncreaseQuantity,useDecreaseQuantity,  useRemoveCart, useAdd } from "../action-hook";
import { useProductfromCart } from "../selector";
import Counter from "./counter";


function Product({cart}){
    const removeCart = useRemoveCart();
    const Add = useAdd();
    const increaseQuantity = useIncreaseQuantity();
    const decreaseQuantity = useDecreaseQuantity();
    const product = useProductfromCart(cart.id);

        
    
    function handleIncrease() {
        if( product === null){
            Add(cart.id)
        }else{
            increaseQuantity(cart.id);

        }      
      }
    
      function handleDecrease() {
        if (product.quantity === 1) {
          removeCart(cart.id);
        } else {
          decreaseQuantity(cart.id);
        }
      }

    return(
        <div>
            <h3>{cart.name}</h3>
            <p>{cart.description}</p>
            <span>{cart.price}</span>
            <Counter handleDecrease={handleDecrease} handleIncrease={handleIncrease} />
        </div>
    )
}

export default Product;