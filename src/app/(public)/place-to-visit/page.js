// import MenuCard from '@/app/components/MenuCard'
// import React from 'react'
// import AshramCard from '@/app/components/AshramCard'


// /* Place To Visit section */
// const page = () => {
//     return (
//         <>
//             <MenuCard
//                 imageUrl="/assets/image/Rishikesh-image.png"
//                 title="Place To Visit"
//                 description="One of the oldest Shiva temples, near Lakshman Jhula. Features a 13-story spire and a sacred Shiva lingam. Known for its serene atmosphere and evening rituals. "
//             />

//             {/* first */}
//             <AshramCard
//                 imageUrl="/assets/image/river.png"
//                 title="Shree Swaminarayan Ashram"
//                 description="Swaminarayan Ashram in Rishikesh City, Rishikesh is a top player in the category Ashrams in the Rishikesh. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Rishikesh. Features the latest available material was created in the Rishikesh."
//                 imageLeft={true}
//             />

//             {/* second */}
//             <AshramCard
//                 imageUrl="/assets/image/Mountain-Escape.png"
//                 title="Mountain Escape"
//                 description="In Rishikesh, the Ganga River runs through hills, thus carving a very pretty landscape in the process. This Process. The makes the town of Rishikesh One of the favorite Mountain getaways in Indian Culture and the country of Rishikesh have been developed for the first time."
//                 imageLeft={false}
//             />

//             {/* third */}
//             <AshramCard
//                 imageUrl="/assets/image/Ganges.png"
//                 title="Town By The Ganges"
//                 description="Swaminarayan Ashram in Rishikesh City, Rishikesh is a top player in the category Ashrams in the Rishikesh. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Rishikesh. This category includes customers from other parts of Rishikesh ."
//                 imageLeft={true}
//             />

//             {/* four */}
//             <AshramCard
//                 imageUrl="/assets/image/ganga.png"
//                 title="Ganga Aarti"
//                 description="The Ganga Aarti, a mesmerizing spiritual ritual performed at dusk on the ghats of the sacred Ganges River, is a soul-stirring spectacle. In cities like Varanasi, Haridwar, and Rishikesh, priests clad in saffron robes chant ancient hymns while circling large flaming lamps, their rhythmic movements synchronized with the clang of bells and the beat of drums."
//                 imageLeft={false}
//             />

//             {/* fifth */}
//             <AshramCard
//                 imageUrl="/assets/image/lakshmanjula.png"
//                 title="Lakshman Jhulat | Ram Jhula"
//                 description="Lakshman Jhula, though it is closed due to safety reasons right now, is one of the most famous tourist attractions in Rishikesh Ram Jhula is suspension bridge across the Ganga River, and is one of the busiest bridges in rishikesh. Thousand of people cross the bridge daily to visit the ganga ghats and to partake in the Ganga aarti"
//                 imageLeft={true}
//             />

//             {/* sixth */}
//             <AshramCard
//                 imageUrl="/assets/image/Rafting.png"
//                 title="Rafting In Rishikesh"
//                 description="Nestled in the Himalayas, Rishikesh is India’s thrilling white-water rafting hub, where the mighty Ganges carves its way through rugged gorges. From gentle Class I ripples to adrenaline-pumping Class IV rapids like The Golf Course and Roller Coaster, the river offers heart-racing adventures for both novices and experts."
//                 imageLeft={false}
//             />

//         </>
//     )
// }

// export default page

// app/page.js
'use client' // This is a client component
import MenuCard from '@/app/components/MenuCard'
import React from 'react'
import AshramCard from '@/app/components/AshramCard'


const PlaceToVisit = () => {

    const ashramData = [
        {
            imageUrl: "/assets/image/river.png",
            title: "Shree Swaminarayan Ashram",
            description: "Swaminarayan Ashram in Rishikesh City, Rishikesh is a top player in the category Ashrams in the Rishikesh. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Rishikesh. Features the latest available material was created in the Rishikesh.",
            imageLeft: true,
        },
        {
            imageUrl: "/assets/image/Mountain-Escape.png",
            title: "Mountain Escape",
            description: "In Rishikesh, the Ganga River runs through hills, thus carving a very pretty landscape in the process. This Process. The makes the town of Rishikesh One of the favorite Mountain getaways in Indian Culture and the country of Rishikesh have been developed for the first time.",
            imageLeft: false,
        },
        {
            imageUrl: "/assets/image/Ganges.png",
            title: "Town By The Ganges",
            description: "Swaminarayan Ashram in Rishikesh City, Rishikesh is a top player in the category Ashrams in the Rishikesh. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Rishikesh. This category includes customers from other parts of Rishikesh .",
            imageLeft: true,
        },
        {
            imageUrl: "/assets/image/ganga.png",
            title: "Ganga Aarti",
            description: "The Ganga Aarti, a mesmerizing spiritual ritual performed at dusk on the ghats of the sacred Ganges River, is a soul-stirring spectacle. In cities like Varanasi, Haridwar, and Rishikesh, priests clad in saffron robes chant ancient hymns while circling large flaming lamps, their rhythmic movements synchronized with the clang of bells and the beat of drums.",
            imageLeft: false,
        },
        {
            imageUrl: "/assets/image/lakshmanjula.png",
            title: "Lakshman Jhulat | Ram Jhula",
            description: "Lakshman Jhula, though it is closed due to safety reasons right now, is one of the most famous tourist attractions in Rishikesh Ram Jhula is suspension bridge across the Ganga River, and is one of the busiest bridges in rishikesh. Thousand of people cross the bridge daily to visit the ganga ghats and to partake in the Ganga aarti",
            imageLeft: true,
        },
        {
            imageUrl: "/assets/image/Rafting.png",
            title: "Rafting In Rishikesh",
            description: "Nestled in the Himalayas, Rishikesh is India’s thrilling white-water rafting hub, where the mighty Ganges carves its way through rugged gorges. From gentle Class I ripples to adrenaline-pumping Class IV rapids like The Golf Course and Roller Coaster, the river offers heart-racing adventures for both novices and experts.",
            imageLeft: false,
        },
    ];

    return (
        <>
            <MenuCard
                imageUrl="/assets/image/Rishikesh-image.png"
                title="Place To Visit"
                description="One of the oldest Shiva temples, near Lakshman Jhula. Features a 13-story spire and a sacred Shiva lingam. Known for its serene atmosphere and evening rituals. "
            />

            {ashramData.map((ashram, index) => (
                <AshramCard
                    key={index}
                    imageUrl={ashram.imageUrl}
                    title={ashram.title}
                    description={ashram.description}
                    imageLeft={ashram.imageLeft}
                    index={index}
                />
            ))}
            
        </>
    );
};

export default PlaceToVisit;