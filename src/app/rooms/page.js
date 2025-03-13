// // mainroom pages
// "use client";
// import React from 'react'
// import MenuCard from '../components/MenuCard';
// import HotelCard from '../(public)/components/HotelCard';

// const Rooms = () => {
//     return (
//         <>
//             <MenuCard
//                 imageUrl="/assets/image/Rishikesh-Room.jpg"
//                 title="About Rooms"
//                 description="Experience minimalist serenity in Rishikesh’s ashram accommodations. Rooms are clean, basic, and designed to foster introspection. Many offer river or mountain views, with natural light and the sound of the Ganges as your soundtrack."
//             />
//             <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 container mx-auto px-4 lg:my-10 my-5">
//                 <HotelCard />
//             </div>

//         </>
//     )
// }

// export default Rooms

"use client";
import React from 'react'
import MenuCard from '../components/MenuCard';
import HotelCard from '../(public)/components/HotelCard';
import { usePathname } from 'next/navigation'; // Import usePathname


const Rooms = () => {
    const pathname = usePathname();
    return (
        <>
            <MenuCard
                imageUrl="/assets/image/Rishikesh-Room.jpg"
                title="About Rooms"
                description="Experience minimalist serenity in Rishikesh’s ashram accommodations. Rooms are clean, basic, and designed to foster introspection. Many offer river or mountain views, with natural light and the sound of the Ganges as your soundtrack."
            />
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 container mx-auto px-4 lg:my-10 my-5">
                <HotelCard />
            </div>

        </>
    )
}

export default Rooms