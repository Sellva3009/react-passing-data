import React, { useContext } from 'react'
import { cartContext } from '../CartContext';

const ShoppingCart = () => {
    const { cart, removeItem } = useContext(cartContext);

    return (
    <div>
        <h2>ShoppingCart</h2>
        <ul>
        {cart.map((item, index) => (
            <li key={index}>
                <p>{item.name}</p>
                <button onClick={() => removeItem(item)}>Remove Item</button>
            </li>
        ))}
        </ul>
    </div>
    );
}

export default ShoppingCart