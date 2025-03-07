import React from 'react'
import RishikeshInfo from '../components/RishikeshInfo';
import HimalayasEssence from '../components/HimalayasEssence';
import AdiShankaracharya from '../components/AdiShankaracharya';
import DailyOperation from '../components/DailyOperation';
import MenuCard from '@/app/components/MenuCard';

const page = () => {

    return (
        <>
            <MenuCard
                imageUrl="/assets/image/main-temple.jpg"
                title="About Ashram"
                description="Rishikesh ashrams, cradled by the Ganges and Himalayan vistas for the, are spiritual havens where ancient wisdom meets inner peace."
            />
            <RishikeshInfo />
            <HimalayasEssence />
            <AdiShankaracharya />
            <DailyOperation />
        </>
    )
}

export default page
