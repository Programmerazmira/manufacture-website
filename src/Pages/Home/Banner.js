import React from 'react';
import car from '../../images/expensive-cars.png'

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen  ">
                <div class="hero-content flex-col lg:flex-row-reverse  ">
                    <img src={car} class="max-w-xl rounded-lg m-12 " alt='' />
                    <div className='px-12'>
                        <h2 class="text-4xl  font-bold">  Special Car Manufacture Tools</h2>
                        <p class="py-6">Car Manufacture Tools carries automotive tools for virtually every vehicle use and project application. Service tools by Sunbright are designed by 10+ years field experts creating uniformed and professional tools that guarantees to impress and meet customers’ satisfaction.</p>
                        <a href='./login' class="btn text-white bg-gradient-to-r from-accent to-secondary">Get started</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;