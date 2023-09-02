import React, {createContext, useState, useEffect} from 'react';


//create context

export const CartContext = createContext()

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  //add cart
  const addToCart =  (product, id) => {
    const newItem = {...product, amount: 1}
    //cek jika item ada di keranjang
    const cartItem = cart.find(item => {
      return item.id === id;
    });
    //jika item ada di keranjang 
    if (cartItem) {
      const newCart = [...cart].map(item=>{
        if (item.id === id) {
          return {...item, amount: cartItem.amount + 1};
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem])
    }
  } 


  //remove cart
  const removeFromCart= (id) =>{
    const newCart = cart.filter(item=> {
      return item.id !== id;
    });
    setCart(newCart);
  }

  //clear cart
  const clearCart=()=>{
    setCart([]);
  };

  return <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>{children}</CartContext.Provider>;
};

export default CartProvider;
