import MenuCard from '@/app/components/MenuCard'
import React from 'react'
import Inquiry from '../components/Inquiry'

const page = () => {
    return (
        <>
            <MenuCard
                imageUrl="/assets/image/rooms.jpg"
                title="SEND-INQUIRY"
                description="Fill out the form below, and our team will respond within [24 hours/days]. Whether you’re seeking pricing, customization, or answers—we’re here to help! "
            />

            <Inquiry />

        </>
    )
}

export default page
