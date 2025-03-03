import React from 'react'
import HotelCard from '../components/HotelCard';

const roomsData = [
    {
        id: 1,
        name: "Economy GowSeva",
        details: "Ashram Non AC Rooms",
        description: "Comfortable room to stay and enjoy the premine facilities. Both a bicycle rental service and a car rental service are available",
        price: 1200,
        images: [
            "/assets/image/room1.jpg",
            "/assets/image/room2.jpg",
            "/assets/image/room3.jpg",
        ],
        facilities: {
            wifi: true,
            bath: true,
            room: true,
        },
    },
    {
        id: 2,
        name: "Normal GowSeva",
        details: "Ashram Non AC Rooms",
        description: "Non-Ac rooms. swaminarayan ashram is 4.1km from the Yog Nagari Rishikesh railway station, as well as easy to get transport for station",
        price: 1500,
        images: [
            "/assets/image/room4.jpg",
            "/assets/image/room5.jpg",
            "/assets/image/room6.jpg",
        ],
        facilities: {
            wifi: true,
            bath: true,
            room: true,
        },
    },
    {
        id: 3,
        name: "Semi Deluxe Brahmbhoj",
        details: "Ashram AC Room",
        description: "The daily breakfast offers continental or vegetarian options you have selected. Hotwater is available is bathroom.",
        price: 2100,
        images: [
            "/assets/image/room7.jpg",
            "/assets/image/room8.jpg",
            "/assets/image/room9.jpg",
        ],
        facilities: {
            wifi: true,
            bath: true,
            room: true,
            air: true,
        },
    },
    {
        id: 4,
        name: "VidhyaDaan [Premium Room ] 2",
        details: "Ashram AC Room",
        description: "We must inform all the devotees that this is not a hotel but a dharmshala run by a religious trust (Sahajanand Wellness) for serving the pilgrims and saints. Therefore, we don't provide any television or entertainment features. We are unable to provide room service too. Food is provided only in the langar hall all the three times. Visitors are thus requested to help maintain the serenity of the ashram. The whole idea of providing online room booking is to make proper arrangements in advance because ashram",
        price: 2400,
        images: [
            "/assets/image/blue-room.jpg",
            "/assets/image/room8.jpg",
        ],
        facilities: {
            wifi: true,
            bath: true,
            room: true,
            air: true,
        },
    },
    {
        id: 5,
        name: "AannaDan [Family Room) 4",
        details: "Ashram AC Room",
        description: "We must inform all the devotees that this is not a hotel but a dharmshala run by a religious trust (Sahajanand Wellness) for serving the pilgrims and saints. Therefore, we don't provide any television or entertainment features. We are unable to provide room service too. Food is provided only in the langar hall all the three times. Visitors are thus requested to help maintain the serenity of the ashram. The whole idea of providing online room booking is to make proper arrangements in advance because ashram",
        price: 3600,
        images: [
            "/assets/image/red-room.jpg",
            "/assets/image/tworoom.jpg",
            "/assets/image/dubbleblue.jpg",
            "/assets/image/red-blue.jpg",
        ],
        facilities: {
            wifi: true,
            bath: true,
            room: true,
            air: true,
        },
    },
    {
        id: 6,
        name: "Aarti Donation 2/4",
        details: "Ashram AC Room",
        description: "We must inform all the devotees that this is not a hotel but a dharmshala run by a religious trust (Sahajanand Wellness) for serving the pilgrims and saints. Therefore, we don't provide any television or entertainment features. We are unable to provide room service too. Food is provided only in the langar hall all the three times. Visitors are thus requested to help maintain the serenity of the ashram. The whole idea of providing online room booking is to make proper arrangements in advance because ashram",
        price: 4500,
        images: [
            "/assets/image/aarti-room.jpg",
            "/assets/image/red-lazarus.jpg",
            "/assets/image/blue-lazarus.jpg",
            "/assets/image/red-blue.jpg",
        ],
        facilities: {
            wifi: true,
            bath: true,
            air: true,
        },
    },
];

const Room = () => {

    const title = "Welcome to Our Luxurious Rooms";
    const backgroundImage = "/assets/image/rooms.jpg"; // Replace with your actual image path

    return (
        <>
            <div
                className="relative h-72 bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url('${backgroundImage}')` }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark Overlay */}
                <h1 className="
          text-white 
          text-4xl  
          font-bold
          bg-opacity-75 
          shadow-lg
          text-center
          relative z-10 ">
                    {title}
                </h1>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 container mx-auto px-4 mt-10">
                {roomsData.map((room) => (
                    <HotelCard key={room.id} room={room} />
                ))}
            </div>
        </>
    )
}

export default Room