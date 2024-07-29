// components/SlidingBar.js
import React from 'react';

const newsItems = [
    'Emergency Contacts: Police - 100, Fire Brigade - 101, Ambulance - 102',
    'New FIR guidelines issued. Check your nearest police station for details.',
    'Women Helpline: 1091, Child Helpline: 1098',
    'Senior Citizen Helpline: 1291',
    'Traffic Helpdesk: 103',
    'Cyber Crime Helpline: 155260',
    'Check the status of your FIR online at your state police website.',
    'Download the latest safety apps endorsed by the police department.',
    'Report any missing persons immediately to the nearest police station.',
    'New traffic regulations are now in effect. Follow the rules to avoid penalties.',
];

const SlidingBar = () => {
    return (
        <div className="bg-blue-600 py-2 overflow-hidden">
            <div className="marquee">
                <div className="marquee-content">
                    {newsItems.map((item, index) => (
                        <span key={index} className="text-white text-sm mx-4">{item}</span>
                    ))}
                    {newsItems.map((item, index) => (
                        <span key={index} className="text-white text-sm mx-4">{item}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SlidingBar;
