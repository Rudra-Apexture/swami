import React from 'react'
import MenuCard from '@/app/components/MenuCard'
import RishikeshHistory from '../components/RishikeshHistory'
import TriveniGhat from '../components/TriveniGhat'

const page = () => {
    return (
        <>
            <MenuCard
                imageUrl="/assets/image/Feature-Image.png"
                title="Rishikesh City"
                description="Rishikesh is a global hub for yoga and meditation, home to iconic ashrams like Parmarth Niketan and Sivananda Ashram."
            />
            <RishikeshHistory />
            <TriveniGhat />
        </>
    )
}

export default page 