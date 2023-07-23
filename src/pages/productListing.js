import React from 'react';

const Products = () => {
    // Replace this with your actual product data from the database or JSON file
    const products = [
        { id: 1, name: 'Product 1', price: 10.99 },
        { id: 2, name: 'Product 2', price: 19.99 },
        // Add more products here
    ];

    return (
        <div>
            <h1>Product Listing</h1>
            {/* Display the list of products */}
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <a href={`/products/${product.id}`}>{product.name}</a>
                        <span>${product.price}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
