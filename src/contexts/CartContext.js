import React, { createContext, useState, useEffect } from "react";

//create context

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //item amount state
  const [itemAmount, setItemAmount] = useState(0)

  //total price
  const [total, setTotal] = useState(0);

  useEffect(()=> {
    const total = cart.reduce((accumulator, currentItem)=> {
      return accumulator + currentItem.price * currentItem.amount
    }, 0)
    setTotal(total);
  })





  useEffect(()=> {
    if(cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0)
      setItemAmount(amount);

    }
  }, [cart])



  //add cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    //cek jika item ada di keranjang
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    //jika item ada di keranjang
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  //remove cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  //clear cart
  const clearCart = () => {
    setCart([]);
  };

  //increase amount
  const increaseAmount = (id) => {
    const cartItem  = cart.find((item) => item.id === id);
    addToCart(cartItem
, id);
  };

  //decrease amount
  const decreaseAmount = (id) => {
    const cartItem
 = cart.find((item) => {
      return item.id === id;
    });
    if(cartItem) {
      const newCart = cart.map((item) => {
        if(item.id === id) {
          return {...item, amount: cartItem.amount -1}
        } else {
          return item;
        }
      })
      setCart(newCart)
    }
      if (cartItem.amount < 2) {
        removeFromCart(id);
      }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
