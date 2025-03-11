import MenuCard from '@/app/components/MenuCard'
import React from 'react'
import ContactUs from '@/app/components/ContactUs'

const page = () => {
    return (
        <>
            <MenuCard
                imageUrl="/assets/image/room1.jpg"
                title="Contact Us"
                description="Note: Responses may take 24–48 hours. For urgent matters, call during listed hours. Embrace patience, aligning with ashram values will help you determine"
            />

            <ContactUs />
        </>
    )
}

export default page
