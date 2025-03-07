import MenuCard from '@/app/components/MenuCard'
import React from 'react'
import MainTemple from '../components/MainTemple'
import Temples from '../components/Temples'

const page = () => {
    return (
        <>
            <MenuCard
                imageUrl="/assets/image/Rishikesh-temples.jpg"
                title="Main Temples"
                description="One of the oldest Shiva temples, near Lakshman Jhula. Features a 13-story spire and a sacred Shiva lingam. Known for its serene atmosphere and evening rituals."
            />
            <MainTemple />
            <Temples />
        </>
    )
}

export default page