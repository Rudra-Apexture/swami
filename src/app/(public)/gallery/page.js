import MenuCard from '@/app/components/MenuCard'
import React from 'react'
import AsharamGallery from '../components/AsharamGallery'

const page = () => {
    return (
        <>
            <MenuCard
                imageUrl="/assets/image/neatureGallery.jpg"
                title="Ashram Gallery"
                description="Designed to inspire introspection and connection to ashram values. Often minimalist, with rotating exhibits or permanent installations. Check for guided tours or self-exploration options."
            />
            <AsharamGallery />  
        </>
    )
}

export default page
