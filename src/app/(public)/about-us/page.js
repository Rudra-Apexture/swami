import React from 'react'
import Inspiration from '../components/Inspiration';
import OurStory from '../components/OurStory';
import MeetTeam from '../components/MeetTeam';
import OurClient from '../components/OurClients';
import MenuCard from '@/app/components/MenuCard';

const page = () => {

  return (
    <>
      {/* Add your page content here */}
      <MenuCard
        imageUrl="/assets/image/Rishikesh-01.jpg"
        title="About Us"
        description="Nestled in the serene embrace of Rishikesh, where the sacred Ganges whispers ancient wisdom and the Himalayas stand as silent guardians ."
      />
      <Inspiration />
      {/* <OurStory /> */}
      <MeetTeam />
      <OurClient />
    </>
  )
}

export default page