import React, { useContext } from 'react'
import { cartContext } from '../CartContext';

const ProductList = () => {
    const { addItem } = useContext(cartContext);

    const products = [
      { id: 1, name: "Product 1" },
      { id: 2, name: "Product 2" },
      { id: 3, name: "Product 3" },
    ];


    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                      <p>{product.name}</p>
                      <button onClick={() => addItem(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList