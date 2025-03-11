import React from 'react'
import RoomBooking from '../components/RoomBooking'
import MenuCard from '@/app/components/MenuCard'

const page = () => {
    return (
        <>
            <MenuCard
                imageUrl="/assets/image/room4.jpg"
                title="Search My Booking List"
                description="An ashram is a spiritual retreat or communal living space rooted in Hindu traditions, often offering meditation, yoga, spiritual teachings, and simple living."
            />
            <RoomBooking />
        </>
    )
}

export default page
