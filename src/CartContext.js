import React, { createContext, useState } from 'react'

export const cartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        setCart([...cart, item]);
    }

    const removeItem = (item) => {
        setCart(cart.filter((i) => i !== item));
    }

    return (
      <cartContext.Provider value={{ cart, addItem, removeItem }}>
        {children}
      </cartContext.Provider>
    );
}

export default CartProvider