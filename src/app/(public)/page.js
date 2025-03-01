// src/app/(public)/page.js
import HeroSection from './components/Hero-section';
import Serving from './components/Serving';
import RoomHeader from './components/RoomHeader';
import HotelCard from './components/HotelCard';
import Wellness from './components/Wellness';
import Ashram from './components/Ashram';
import Slider from './components/Slider';
import Review from './components/Review';
import Ganga from './components/Ganga';

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
];

// Home_Pages
export default function Home() {
  return (
    <>
      <HeroSection />
      <Serving />
      <RoomHeader />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 container mx-auto px-4">
        {roomsData.map((room) => (
          <HotelCard key={room.id} room={room} />
        ))}
      </div>
      <Wellness />
      <Ashram />
      <Slider />
      <Review />
      <Ganga />
    </>
  );
}