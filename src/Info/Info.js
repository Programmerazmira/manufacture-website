import React from 'react';
import Infocard from './Infocard';
import clock from '../images/time.png'
import cart from '../images/cart.png'
import team from '../images/team.png'
import experience from '../images/experience.png'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
            <Infocard cardtitle={'CUSTOMER SUPPORT'} bgClass='bg-gradient-to-r from-secondary to-primary' carddetails={'ENJOY 24/7 CUSTOMER SERVICE'} img={clock}></Infocard>
            <Infocard cardtitle={'NO MOQ'} bgClass='bg-gradient-to-r from-secondary to-primary' carddetails={'NO MINIMUM ORDER'} img={cart}></Infocard>
            <Infocard cardtitle={'R&D TEAM'} bgClass='bg-gradient-to-r from-primary to-secondary' carddetails={'MEET SPECIAL REQUIRMENT'} img={team}></Infocard>
            <Infocard cardtitle={'10 YEARS EXPERIENCE'} bgClass='bg-gradient-to-r from-primary to-secondary' carddetails={'DESIGNER TEAM & ARTWORKS'} img={experience}></Infocard>

        </div>
    );
};

export default Info;