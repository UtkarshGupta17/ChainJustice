import React from 'react';
import Header from './components/Header';
import SlidingBar from './SlidingBar';

const emergencyContacts = [
    { name: 'Police', number: '100' },
    { name: 'Fire Brigade', number: '101' },
    { name: 'Ambulance', number: '102' },
    { name: 'Disaster Management', number: '108' },
    { name: 'Women Helpline', number: '1091' },
    { name: 'Child Helpline', number: '1098' },
    { name: 'Anti-Terrorism Squad', number: '1099' },
    // Add other emergency contacts here
];

const EmergencyContacts = () => {
    return (
        <>
            <Header />
            <SlidingBar/>
            <div className="min-h-screen py-6 flex items-center justify-center">
                <div className="relative w-full h-[80%] sm:max-w-5xl">
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-lg sm:p-20 h-full overflow-y-auto">
                        <div className="space-y-8">
                            <h2 className="text-2xl font-semibold leading-7 text-gray-900">Emergency Contacts</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">Here are some important emergency contact numbers you may need.</p>
                            <div className="space-y-6">
                                {emergencyContacts.map((contact, index) => (
                                    <div key={index} className="flex items-center justify-between p-4 border-b border-gray-200">
                                        <div className="text-sm font-medium text-gray-900">
                                            {contact.name}
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <span className="text-m text-gray-600">{contact.number}</span>
<<<<<<< HEAD
                                            <a 
                                                href={`tel:${contact.number}`} 
                                                className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-500 text-sm" 
                                                aria-label={`Call ${contact.name}`}
                                            >
                                                <p>Call Now</p> 📞
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
=======
                                            
                                               <a href={`tel:${contact.number}`}
                                            className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-500 text-sm"
                                            aria-label={`Call ${contact.name}`}
                                            >
                                            <p>Call Now</p> 📞
                                        </a>
                                    </div>
                                    </div>
                                ))}
>>>>>>> 7f88cd834d14c5e601a48bf31cb97ce3f11e1c44
                        </div>
                    </div>
                </div>
            </div>
<<<<<<< HEAD
=======
        </div >
>>>>>>> 7f88cd834d14c5e601a48bf31cb97ce3f11e1c44
        </>
    );
}

<<<<<<< HEAD
export default EmergencyContacts;
=======
export default EmergencyContacts;
>>>>>>> 7f88cd834d14c5e601a48bf31cb97ce3f11e1c44
