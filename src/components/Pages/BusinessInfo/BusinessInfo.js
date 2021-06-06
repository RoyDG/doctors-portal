import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
const infoData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faClock,
        background: 'Info'
    },
     {
        title: 'Visit our location',
        description: 'Brooklyn, NY 10003, USA',
        icon: faMapMarker,
        background: 'Secondary'
    },
     {
        title: 'Call us now',
        description: '+15698374652',
        icon: faPhone,
        background: 'Info'
    }
]

const BusinessInfo = () => {
    return (
        <section className = "row">
            {
                infoData.map( info => <InfoCard info = {info}></InfoCard> )
            }
        </section>
    );
};

export default BusinessInfo;