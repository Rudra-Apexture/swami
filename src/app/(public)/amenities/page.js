import MenuCard from '@/app/components/MenuCard'
import React from 'react'
import Amenities from '../components/Amenities'

const page = () => {
    return (
        <>
            <MenuCard
                imageUrl="/assets/image/family_room.jpg"
                title="Amenities"
                description="Ashrams offer serene simplicity: modest rooms, communal yoga/meditation spaces, and sattvic meals for spiritual rejuvenation. Embrace minimalism, mindfulness, and sacred connection."
            />
            
            <Amenities />
        </>
    )
}

export default page