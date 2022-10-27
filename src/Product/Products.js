import React from 'react';

const Products = ({product}) => {
    
    
    return (
        <div>
            <div>
                    <div class="card h-96  bg-base-100 shadow-xl ">
                        <figure><img className='h-32 w-32 p-3 hover:h-48 hover:w-48'src={product.picture} alt='' /></figure>
                        <div class="card-body">
                            <h2 class={product.title}>Shoes!</h2>
                            <p>{product.text}</p>
                            <h2 className='card-end'>{product.price}</h2>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Products;