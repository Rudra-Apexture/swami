// // components/AshramServices.jsx
// import React from 'react';
// import { FaWifi, FaOm, FaDonate } from 'react-icons/fa';

// const AshramServices = () => {
//     const servicesData = [
//         {
//             title: 'Free Wi-Fi Available',
//             description: 'Sahajanand wellness is ready give all information regarding Ashram from the internet. Free wifi is available 24 hr at the building in every floor.',
//             icon: <FaWifi size={40} className="text-orange-500" />,
//         },
//         {
//             title: 'Bhagwat and Aarti',
//             description: 'For those moments of liesure, or when Bhagwat and Puja has to be organize outside the confines of a corporate environment. We promise you, the experience will be worth repeating, over and over again.',
//             icon: <FaOm size={40} className="text-orange-500" />,
//         },
//         {
//             title: 'Donation and Efficient',
//             description: 'All the activities of the trust are run by donations. Trust provides lodging and food to the pilgrims and they are encouraged to make donations for the charity work carried out by the trust. Trust accepts these donations to carry out its activities.',
//             icon: <FaDonate size={40} className="text-orange-500" />,
//         },
//     ];

//     return (
//         <div className="container mx-auto py-12">
//             <h2 className="md:text-4xl text-2xl font-bold text-center">
//                 Shree Swaminarayan <span className='bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent'>
//                     Ashram
//                 </span>
//             </h2>
//             <p className='text-gray-700 font-medium text-lg text-center mt-3'>Gateway of spiritual life</p>
//             <div className="grid md:grid-cols-3 gap-8 mt-10 ">
//                 {servicesData.map((service, index) => (
//                     <div
//                         key={index}
//                         className="bg-white rounded-lg shadow-md border border-gray-500 p-6 text-center"
//                     >
//                         <div className="flex justify-center mb-4">
//                             {service.icon}
//                         </div>
//                         <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
//                         <p className="text-gray-700">{service.description}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default AshramServices;


'use client';
import React from 'react';
import { FaWifi, FaOm, FaDonate } from 'react-icons/fa';

const AshramServices = () => {
    const servicesData = [
        {
            title: 'Free Wi-Fi Available',
            description: 'Sahajanand wellness provides all information regarding the Ashram from the internet. Free WiFi is available 24 hours a day on every floor of the building.',
            icon: <FaWifi size={24} className="text-orange-500" />,
            bgColor: 'bg-orange-50',
            borderColor: 'border-orange-200',
        },
        {
            title: 'Bhagwat and Aarti',
            description: 'For those moments of leisure, or when Bhagwat and Puja needs to be organized outside the confines of a corporate environment. We promise you, the experience will be worth repeating.',
            icon: <FaOm size={24} className="text-orange-500" />,
            bgColor: 'bg-orange-50',
            borderColor: 'border-orange-200',
        },
        {
            title: 'Donation and Charity',
            description: 'All the activities of the trust are run by donations. We provide lodging and food to pilgrims who are encouraged to make donations for our charity work. Your contributions help us serve the community.',
            icon: <FaDonate size={24} className="text-orange-500" />,
            bgColor: 'bg-orange-50',
            borderColor: 'border-orange-200',
        },
    ];

    return (
        <section className="relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-medium mb-4">
                        Shree Swaminarayan <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Ashram</span>
                    </h2>
                    <p className="text-gray-700  text-lg">Gateway to Spiritual Enlightenment</p>
                </div>

                {/* Services Cards */}
                <div className="grid lg:grid-cols-3 gap-8 text-small">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className={`group relative ${service.bgColor} border ${service.borderColor} rounded-2xl p-8 transition-all duration-300 hover:-translate-y-3.5`}
                        >
                            <div className="mb-6 relative">
                                <div className="flex items-center mb-4">
                                    <div className="p-3 bg-white rounded-full mr-4 transition-colors duration-300 group-hover:bg-main">
                                        {React.cloneElement(service.icon, {
                                            className: `transition-all duration-500 ease-in-out ${service.icon.props.className} group-hover:text-white group-hover:rotate-360`,
                                        })}

                                    </div>
                                    <h3 className="text-xl font-medium text-gray-800 transition-colors duration-300 group-hover:text-main">
                                        {service.title}
                                    </h3>
                                </div>
                            </div>

                            <p className="text-gray-700 relative z-10">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AshramServices;

