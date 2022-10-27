import React from 'react';


const Infocard = ({img,cardtitle,carddetails,bgClass=''}) => {
    return (
        <div>
            <div class={`card lg:card-side bg-primary shadow-xl px-4 h-40 ${bgClass} `}>
                <figure className='pl-5'>
                    <img className='w-16 pt-5' src={img} alt="Album"/>
                    </figure>
                <div class="card-body">
                    <p class=" text-lg card-title ">{cardtitle}</p>
                    <p className='text-sm'>{carddetails}</p>
                </div>
            </div>
        </div>
    );
};

export default Infocard;