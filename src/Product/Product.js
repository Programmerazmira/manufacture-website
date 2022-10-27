import React from 'react';
import Products from './Products';
import cartman from '../images/cartman.jpg';
import drumBreake from '../images/drum-breake.jpg';
import engineTiming from '../images/engine-timing.jpg';
import farrier from '../images/farrier.jpg';
import vastar from '../images/Vastar .jpg';
import teng from '../images/teng.jpg';


const Product = () => {
    const products=[
            {
              _id: 1,
              picture: cartman,
              title: "Cartman Tools ",
              text: "<ReferenceError: text is not defined>",
              price: "$2,606.19"
            },
            {
                _id: 2,
                picture: drumBreake,
                title: "Drum Breake Tools",
                text: "<ReferenceError: text is not defined>",
                price: "$2,606.19"
            },
            {
                _id: 3,
                picture: engineTiming,
                title: "Engine Timing Tools",
                text: "<ReferenceError: text is not defined>",
                price: "$2,606.19"
            },
            {
                _id: 4,
                picture: farrier,
                title: "Farrier Tools",
                text: "<ReferenceError: text is not defined>",
                price: "$2,606.19"
            },
            {
                _id: 5,
                picture: vastar,
                title: "Vastar Tools",
                text: "<ReferenceError: text is not defined>",
                price: "$2,606.19"
            },
            {
                _id: 6,
                picture:teng,
                title: "Teng Tools",
                text: "<ReferenceError: text is not defined>",
                price: "$2,606.19"
            }
          ];
  

    return (
        <div>
            <div className='text-center mt-24 '>
                <h1 className='text-3xl text-bold text-neutral'>FEATURED PRODUCT</h1>
                <p className='mx-52'>
                    Car Manufature Tools offers you comprehensive automotive tools and equipment options that ranges to different applications such as air-condition, engine, chassis repair, brake, timing, and other automotive service and general tools.</p>
                <div className='grid grid-cols-3 gap-4 p-12'>
                    {
                        products.map(product=><Products
                        key={product._id}
                        product={product}
                        ></Products>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;