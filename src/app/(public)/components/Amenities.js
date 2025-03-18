// import { FaPhoneAlt } from "react-icons/fa";
// import { MdLocalLaundryService } from "react-icons/md";
// import { AiOutlineWifi } from "react-icons/ai";
// import { BsCameraVideo } from "react-icons/bs";

// const services = [
//     {
//         icon: <FaPhoneAlt className="text-4xl text-main" />,
//         title: "AC",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis pulvinar."
//     },
//     {
//         icon: <MdLocalLaundryService className="text-4xl text-main" />,
//         title: "Common Area",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis pulvinar."
//     },
//     {
//         icon: <AiOutlineWifi className="text-4xl text-main" />,
//         title: "Geyser",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis pulvinar."
//     },
//     {
//         icon: <BsCameraVideo className="text-4xl text-main" />,
//         title: "Laundry",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis pulvinar."
//     },
//     {
//         icon: <BsCameraVideo className="text-4xl text-main" />,
//         title: "Common Area",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis pulvinar."
//     },
//     {
//         icon: <BsCameraVideo className="text-4xl text-main" />,
//         title: "Front Desk",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis pulvinar."
//     },
//     {
//         icon: <BsCameraVideo className="text-4xl text-main" />,
//         title: "Towels",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis pulvinar."
//     },
//     {
//         icon: <BsCameraVideo className="text-4xl text-main" />,
//         title: "Common Washroom",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis pulvinar."
//     }
// ];

// export default function RoomServices() {
//     return (
//         <div className="container mx-auto px-6 py-12">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
//                 {services.map((service, index) => (
//                     <div key={index} className="flex flex-col items-center">
//                         <div className="mb-4">{service.icon}</div>
//                         <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
//                         <p className="text-gray-600 mt-2">{service.description}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// import Image from "next/image";

// const services = [
//     {
//         image: "/assets/icons/ac.svg",
//         title: "AC",
//         description: "Ashrams offer serene, minimalist accommodations focused on spiritual growth. Basic amenities typically include shared dormitories, meditation halls, vegetarian meals, and yoga spaces."
//     },
//     {
//         image: "/assets/icons/CommonArea.svg",
//         title: "Common Area",
//         description: "Designed for connection and introspection, these spaces prioritize simplicity, natural materials, and minimal distractions. Airflow often relies on natural ventilation, aligning with eco-friendly values."
//     },
//     {
//         image: "/assets/icons/Geyser.svg",
//         title: "Geyser",
//         description: "Ashrams often prioritize simplicity, so hot water access varies. Some provide geysers (water heaters) in shared or private bathrooms, especially in colder regions."
//     },
//     {
//         image: "/assets/icons/Laundry.svg",
//         title: "Laundry",
//         description: "Many encourage self-sufficiency; guests may need to wash clothes manually. Modern ashrams might offer laundry services for a fee. Confirm availability in advance, as traditional centers."
//     },
//     {
//         image: "/assets/icons/CommonAreas.svg",
//         title: "Common Area",
//         description: "Designed for connection and introspection, these spaces prioritize simplicity, natural materials, and minimal distractions. Airflow often relies on natural ventilation, aligning with eco-friendly values."
//     },
//     {
//         image: "/assets/icons/FrontDesk.svg",
//         title: "Front Desk",
//         description: "Service is often minimal, with limited hours and volunteer staff. Some may lack a formal desk, relying on self-check-in or community help. Confirm availability beforehand if front desk assistance is critical. "
//     },
//     {
//         image: "/assets/icons/Towels.svg",
//         title: "Towels",
//         description: "Ashrams may provide basic towels, but availability varies. Many encourage guests to bring their own to align with minimalist, eco-conscious values.Check the ashram’s policy in advance Pack a lightweight. "
//     },
//     {
//         image: "/assets/icons/CommonWashroom.svg",
//         title: "Common Washroom",
//         description: "Cleanliness is prioritized, but amenities are simple. Expect minimal privacy and bring a toiletries kit if preferred. Modern ashrams may offer upgraded facilities; traditional ones emphasize austerity."
//     }
// ];
// export default function AshramServices() {
//     return (
//         <div className="container mx-auto px-4 py-10">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
//                 {services.map((service, index) => (
//                     <div key={index} className="flex border border-main p-4 rounded-xl shadow-lg flex-col items-center">
//                         <div className="mb-4">
//                             <Image src={service.image} alt={service.title} width={60} height={60} className="object-cover" />
//                         </div>
//                         <h3 className="text-lg font-bold text-main">{service.title}</h3>
//                         <p className="text-gray-700 mt-2">{service.description}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// import Image from "next/image";

// const services = [
//     {
//         image: "/assets/icons/ac.svg",
//         title: "AC",
//         description: "Ashrams offer serene, minimalist accommodations focused on spiritual growth. Basic amenities typically include shared dormitories, meditation halls, vegetarian meals, and yoga spaces."
//     },
//     {
//         image: "/assets/icons/CommonArea.svg",
//         title: "Common Area",
//         description: "Designed for connection and introspection, these spaces prioritize simplicity, natural materials, and minimal distractions. Airflow often relies on natural ventilation, aligning with eco-friendly values."
//     },
//     {
//         image: "/assets/icons/Geyser.svg",
//         title: "Geyser",
//         description: "Ashrams often prioritize simplicity, so hot water access varies. Some provide geysers (water heaters) in shared or private bathrooms, especially in colder regions."
//     },
//     {
//         image: "/assets/icons/Laundry.svg",
//         title: "Laundry",
//         description: "Many encourage self-sufficiency; guests may need to wash clothes manually. Modern ashrams might offer laundry services for a fee. Confirm availability in advance, as traditional centers."
//     },
//     {
//         image: "/assets/icons/CommonAreas.svg",
//         title: "Common Area",
//         description: "Designed for connection and introspection, these spaces prioritize simplicity, natural materials, and minimal distractions. Airflow often relies on natural ventilation, aligning with eco-friendly values."
//     },
//     {
//         image: "/assets/icons/FrontDesk.svg",
//         title: "Front Desk",
//         description: "Service is often minimal, with limited hours and volunteer staff. Some may lack a formal desk, relying on self-check-in or community help. Confirm availability beforehand if front desk assistance is critical."
//     },
//     {
//         image: "/assets/icons/Towels.svg",
//         title: "Towels",
//         description: "Ashrams may provide basic towels, but availability varies. Many encourage guests to bring their own to align with minimalist, eco-conscious values. Check the ashram's policy in advance. Pack a lightweight."
//     },
//     {
//         image: "/assets/icons/CommonWashroom.svg",
//         title: "Common Washroom",
//         description: "Cleanliness is prioritized, but amenities are simple. Expect minimal privacy and bring a toiletries kit if preferred. Modern ashrams may offer upgraded facilities; traditional ones emphasize austerity."
//     }
// ];
// export default function AshramServices() {
//     return (
//         <div className="py-10 bg-white">
//             <div className="container mx-auto">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-8 px-4">
//                     {services.map((service, index) => (
//                         <div key={index} className="flex rounded-xl lg:flex-row flex-col lg:items-start items-center lg:space-x-6 group cursor-pointer">
//                             <div className="size-16 flex-shrink-0 bg-orange-50 rounded-full flex items-center justify-center group-hover:bg-orange-300 transition-colors">
//                                 <Image
//                                     src={service.image}
//                                     alt={service.title}
//                                     width={40}
//                                     height={40}
//                                     className="object-contain"
//                                     property="true"
//                                 />
//                             </div>
//                             <div className="flex-1 text-center lg:text-left">
//                                 <h3 className="md:text-2xl text-xl font-medium text-prime mb-2 mt-4 lg:mt-0">{service.title}</h3>
//                                 <div className="h-1  w-20 bg-main mb-3 lg:block hidden"></div>
//                                 <p className="text-gray-700 text-lg leading-relaxed">{service.description}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//             </div>



//         </div>
//     );
// }

import Image from "next/image";

const services = [
    {
        image: "/assets/icons/ac.svg",
        title: "AC",
        description: "Ashrams offer serene, minimalist accommodations focused on spiritual growth. Basic amenities typically include shared dormitories, meditation halls, vegetarian meals, and yoga spaces."
    },
    {
        image: "/assets/icons/CommonArea.svg",
        title: "Common Area",
        description: "Designed for connection and introspection, these spaces prioritize simplicity, natural materials, and minimal distractions. Airflow often relies on natural ventilation, aligning with eco-friendly values."
    },
    {
        image: "/assets/icons/Geyser.svg",
        title: "Geyser",
        description: "Ashrams often prioritize simplicity, so hot water access varies. Some provide geysers (water heaters) in shared or private bathrooms, especially in colder regions."
    },
    {
        image: "/assets/icons/Laundry.svg",
        title: "Laundry",
        description: "Many encourage self-sufficiency; guests may need to wash clothes manually. Modern ashrams might offer laundry services for a fee. Confirm availability in advance, as traditional centers."
    },
    {
        image: "/assets/icons/CommonAreas.svg",
        title: "Common Area",
        description: "Designed for connection and introspection, these spaces prioritize simplicity, natural materials, and minimal distractions. Airflow often relies on natural ventilation, aligning with eco-friendly values."
    },
    {
        image: "/assets/icons/FrontDesk.svg",
        title: "Front Desk",
        description: "Service is often minimal, with limited hours and volunteer staff. Some may lack a formal desk, relying on self-check-in or community help. Confirm availability beforehand if front desk assistance is critical."
    },
    {
        image: "/assets/icons/Towels.svg",
        title: "Towels",
        description: "Ashrams may provide basic towels, but availability varies. Many encourage guests to bring their own to align with minimalist, eco-conscious values. Check the ashram's policy in advance. Pack a lightweight."
    },
    {
        image: "/assets/icons/CommonWashroom.svg",
        title: "Common Washroom",
        description: "Cleanliness is prioritized, but amenities are simple. Expect minimal privacy and bring a toiletries kit if preferred. Modern ashrams may offer upgraded facilities; traditional ones emphasize austerity."
    }
];

export default function AshramServices() {
    return (
        <div className="py-10 bg-white">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-8 px-4">
                    {services.map((service, index) => (
                        <div key={index} className={`flex lg:flex-row flex-col lg:items-start items-center lg:space-x-6 ${index % 2 !== 0 ? 'lg:border-l lg:border-slate-300 p-0 lg:pl-6' : ''}`}>
                            {/* Images */}
                            <div className="size-16 flex-shrink-0 bg-orange-50 rounded-full flex items-center justify-center transition-colors">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    width={40}
                                    height={40}
                                    className="object-cover"
                                    property="true"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1 text-center lg:text-left">
                                <h3 className="md:text-2xl text-xl font-medium text-prime mb-2 mt-4 lg:mt-0">{service.title}</h3>
                                <div className="h-1 w-20 bg-main mb-3 lg:block hidden"></div>
                                <p className="text-gray-700 text-lg leading-relaxed">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
}