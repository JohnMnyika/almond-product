import React from 'react';
import { useRouter } from 'next/router';

const ProductDetails = () => {
    const router = useRouter();
    const { id } = router.query;

    // Replace this with actual product data fetching logic
    const product = {
        id,
        name: 'Product Name',
        description: 'Product description goes here...',
        price: 29.99,
        // Add more product details as needed
    };

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            {/* Add a button to add the product to the cart or purchase */}
        </div>
    );
};

export default ProductDetails;
