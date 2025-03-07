// "use client";

// export default function MeetTeam() {
//     return (
//         <section className="Team py-10">
//             <div className="container mx-auto px-4">
//                 <h2 className="lg:text-4xl lg:text-3xl text-2xl font-bold text-prime text-center">
//                     Meet The <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Team</span>
//                 </h2>

//                 {/* Team-Member */}

//             </div>
//         </section>
//     )
// }

// 'use client';
// import React from 'react';
// import Image from 'next/image';
// import { LuFacebook } from "react-icons/lu";
// import { LuTwitter } from "react-icons/lu";
// import { LuInstagram } from "react-icons/lu";

// export default function MeetTeam() {
//     // Sample team members data - replace with your actual team members
//     const teamMembers = [
//         {
//             id: 1,
//             name: "Sunil Bhagat",
//             role: "Spiritual Leader",
//             bio: "With over 30 years of spiritual practice, Swami Anandji guides our community with wisdom and compassion.",
//             image: "/assets/image/Sunil.jpeg",
//         },
//         {
//             id: 2,
//             name: "Sourabh Ranakoti",
//             role: "Yoga Instructor",
//             bio: "Dedicated to sharing the ancient traditions of yoga and mindfulness for physical and spiritual wellbeing.",
//             image: "/assets/image/Sourabh.jpg",
//         },
//         {
//             id: 3,
//             name: "Swami Venkatesenanda",
//             role: "Meditation Guide",
//             bio: "Specializes in mindfulness practices and helps seekers find inner peace through meditation.",
//             image: "/assets/image/Shibir.jpg",
//         }
//     ];

//     return (
//         <section className="relative py-16 px-4 overflow-hidden bg-gradient-to-b from-amber-50 to-white">
//             <div className="max-w-5xl mx-auto relative z-10">
//                 {/* Section Heading */}

//                 <div className="text-center mb-16">
//                     <h2 className="text-3xl md:text-4xl font-bold">
//                         Meet Our <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Team</span>
//                     </h2>
//                     <p className="text-gray-700 font-medium max-w-2xl mx-auto mt-6">
//                         Our team consists of dedicated spiritual guides, teachers, and practitioners who are committed to
//                         helping you on your journey of self-discovery and inner transformation.
//                     </p>
//                 </div>

//                 {/* Team Members Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {teamMembers.map((member) => (
//                         <div
//                             key={member.id}
//                             className="bg-white rounded-lg overflow-hidden shadow-md transform transition-all duration-300  hover:shadow-xl"
//                         >
//                             <div className="relative h-60 overflow-hidden">
//                                 <Image
//                                     src={member.image}
//                                     alt={member.name}
//                                     width={250}
//                                     height={100}
//                                     className="object-cover w-full hover:scale-110 transition-transform duration-300 ease-in-out"
//                                 />
//                             </div>
//                             <div className="p-6 text-center">
//                                 <h3 className="text-xl font-bold text-prime">{member.name}</h3>
//                                 <div className="mt-2 mb-3">
//                                     <span className="inline-block px-3 py-1 text-xs font-medium text-orange-500 bg-orange-50 rounded-full">
//                                         {member.role}
//                                     </span>
//                                 </div>
//                                 <p className="text-gray-700 text-base">{member.bio}</p>
//                                 <div className="mt-4 pt-4 border-t border-gray-100 flex justify-center space-x-4">
//                                     <button className="size-9 cursor-pointer flex items-center justify-center rounded-full bg-orange-50 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300">
//                                         <LuFacebook className='size-5' />
//                                     </button>
//                                     <button className="size-9 cursor-pointer flex items-center justify-center rounded-full bg-orange-50 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300">
//                                         <LuTwitter className='size-5' />
//                                     </button>
//                                     <button className="size-9 cursor-pointer flex items-center justify-center rounded-full bg-orange-50 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300">
//                                         <LuInstagram className='size-5' />
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

// 'use client';
// import React, { useState } from 'react';
// import Image from 'next/image';
// import { LuFacebook, LuTwitter, LuInstagram, LuX } from "react-icons/lu";

// export default function MeetTeam() {
//     const [selectedMember, setSelectedMember] = useState(null);

//     // Sample team members data - replace with your actual team members
//     const teamMembers = [
//         {
//             id: 1,
//             name: "Sunil Bhagat",
//             role: "Spiritual Leader",
//             bio: "With over 30 years of spiritual practice, Swami Anandji guides our community with wisdom and compassion.",
//             image: "/assets/image/Sunil.jpeg",
//             phone: "+1 (859) 254-6589",
//             email: "info@example.com"
//         },
//         {
//             id: 2,
//             name: "Sourabh Ranakoti",
//             role: "Yoga Instructor",
//             bio: "Dedicated to sharing the ancient traditions of yoga and mindfulness for physical and spiritual wellbeing.",
//             image: "/assets/image/Sourabh.jpg",
//             phone: "+1 (859) 254-6590",
//             email: "info@example.com"
//         },
//         {
//             id: 3,
//             name: "Swami Venkatesenanda",
//             role: "Meditation Guide",
//             bio: "Specializes in mindfulness practices and helps seekers find inner peace through meditation.",
//             image: "/assets/image/Shibir.jpg",
//             phone: "+1 (859) 254-6591",
//             email: "info@example.com"
//         }
//     ];

//     const openModal = (member) => {
//         setSelectedMember(member);
//         document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
//     };

//     const closeModal = () => {
//         setSelectedMember(null);
//         document.body.style.overflow = 'auto'; // Re-enable scrolling
//     };

//     return (
//         <section className="relative py-16 px-4 overflow-hidden bg-gradient-to-b from-amber-50 to-white">
//             <div className="max-w-5xl mx-auto relative z-10">
//                 {/* Section Heading */}
//                 <div className="text-center mb-16">
//                     <h2 className="text-3xl md:text-4xl font-bold">
//                         Meet Our <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Team</span>
//                     </h2>
//                     <p className="text-gray-700 font-medium max-w-2xl mx-auto mt-6">
//                         Our team consists of dedicated spiritual guides, teachers, and practitioners who are committed to
//                         helping you on your journey of self-discovery and inner transformation.
//                     </p>
//                 </div>

//                 {/* Team Members Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {teamMembers.map((member) => (
//                         <div
//                             key={member.id}
//                             className="bg-white rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:shadow-xl"
//                         >
//                             <div
//                                 className="relative h-60 overflow-hidden cursor-pointer"
//                                 onClick={() => openModal(member)}
//                             >
//                                 <Image
//                                     src={member.image}
//                                     alt={member.name}
//                                     width={250}
//                                     height={100}
//                                     className="object-cover w-full hover:scale-110 transition-transform duration-300 ease-in-out"
//                                 />
//                             </div>
//                             <div className="md:p-6 p-4 text-center">
//                                 <h3 className="text-xl font-bold text-prime">{member.name}</h3>
//                                 <div className="mt-2 mb-3">
//                                     <span className="inline-block px-3 py-1 text-sm font-medium text-orange-500 bg-orange-50 rounded-full">
//                                         {member.role}
//                                     </span>
//                                 </div>
//                                 <p className="text-gray-700 text-base">{member.bio}</p>
//                                 <div className="mt-4 pt-4 border-t border-gray-100 flex justify-center space-x-4">
//                                     <button className="size-9 cursor-pointer flex items-center justify-center rounded-full bg-orange-50 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300">
//                                         <LuFacebook className='size-5' />
//                                     </button>
//                                     <button className="size-9 cursor-pointer flex items-center justify-center rounded-full bg-orange-50 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300">
//                                         <LuTwitter className='size-5' />
//                                     </button>
//                                     <button className="size-9 cursor-pointer flex items-center justify-center rounded-full bg-orange-50 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300">
//                                         <LuInstagram className='size-5' />
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Modal Popup */}
//             {selectedMember && (
//                 <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 bg-opacity-60 backdrop-blur-sm">
//                     <div className="bg-white rounded-lg w-full max-w-3xl overflow-hidden shadow-2xl animate-fadeIn">
//                         <div className="flex flex-col lg:flex-row items-start">
//                             {/* Left Side - Image */}
//                             <div className="lg:w-1/2 w-full lg:p-6 p-4 bg-gradient-to-br from-orange-50 to-white flex items-center justify-center">
//                                 <div className="relative w-full lg:h-64 md:h-56 h-40 overflow-hidden rounded-lg">
//                                     <Image
//                                         src={selectedMember.image}
//                                         alt={selectedMember.name}
//                                         layout="fill"
//                                         objectFit="cover"
//                                         className="rounded-lg"
//                                     />
//                                 </div>
//                             </div>

//                             {/* Right Side - Content */}
//                             <div className="lg:w-1/2 w-full lg:p-6 p-4">
//                                 <div className="flex justify-between items-start relative">
//                                     <h2 className="text-2xl font-bold text-gray-800">{selectedMember.name}</h2>
//                                     <button
//                                         onClick={closeModal}
//                                         className="text-gray-500 hover:text-gray-800 transition-colors"
//                                     >
//                                         <LuX className="size-7 absolute bg-main text-white p-0.5 -top-6 -right-6" />
//                                     </button>
//                                 </div>

//                                 <div className="mt-2 mb-4">
//                                     <span className="inline-block px-3 py-1 text-sm font-medium text-orange-500 bg-orange-50 rounded-full">
//                                         {selectedMember.role}
//                                     </span>
//                                 </div>

//                                 <p className="text-gray-700 mb-4 text-sm">
//                                     {selectedMember.bio}
//                                 </p>

//                                 <div className="space-y-3">
//                                     <div className="flex items-center">
//                                         <span className="font-medium mr-2 text-main">Phone:</span>
//                                         <span className="text-gray-600">{selectedMember.phone}</span>
//                                     </div>

//                                     <div className="flex items-center">
//                                         <span className="font-medium mr-2 text-main">Email:</span>
//                                         <span className="text-gray-600">{selectedMember.email}</span>
//                                     </div>
//                                 </div>

//                                 <div className="mt-6 pt-4 border-t border-gray-300/50 flex space-x-4">
//                                     <button className="size-9 flex items-center justify-center rounded-full bg-orange-50 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300">
//                                         <LuFacebook className='size-5' />
//                                     </button>
//                                     <button className="size-9 flex items-center justify-center rounded-full bg-orange-50 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300">
//                                         <LuTwitter className='size-5' />
//                                     </button>
//                                     <button className="size-9 flex items-center justify-center rounded-full bg-orange-50 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300">
//                                         <LuInstagram className='size-5' />
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </section>
//     );
// }

'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { LuFacebook, LuTwitter, LuInstagram, LuX } from "react-icons/lu";

export default function MeetTeam() {
    const [selectedMember, setSelectedMember] = useState(null);
    const modalRef = useRef(null);

    // Sample team members data - replace with your actual team members
    const teamMembers = [
        {
            id: 1,
            name: "Sunil Bhagat",
            role: "Spiritual Leader",
            bio: "With over 30 years of spiritual practice, Swami Anandji guides our community with wisdom and compassion.",
            image: "/assets/image/Sunil.jpeg",
            phone: "+1 (859) 254-6589",
            email: "info@example.com"
        },
        {
            id: 2,
            name: "Sourabh Ranakoti",
            role: "Yoga Instructor",
            bio: "Dedicated to sharing the ancient traditions of yoga and mindfulness for physical and spiritual wellbeing.",
            image: "/assets/image/Sourabh.jpg",
            phone: "+1 (859) 254-6590",
            email: "info@example.com"
        },
        {
            id: 3,
            name: "Swami Venkatesenanda",
            role: "Meditation Guide",
            bio: "Specializes in mindfulness practices and helps seekers find inner peace through meditation.",
            image: "/assets/image/Shibir.jpg",
            phone: "+1 (859) 254-6591",
            email: "info@example.com"
        }
    ];

    const openModal = (member) => {
        setSelectedMember(member);
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    };

    const closeModal = () => {
        setSelectedMember(null);
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeModal();
            }
        };

        if (selectedMember) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [selectedMember]);

    return (
        <section className="relative py-10 px-4 overflow-hidden bg-gradient-to-b from-amber-50 to-white">
            <div className="max-w-5xl mx-auto relative z-10">
                {/* Section Heading */}
                <div className="text-center mb-16">
                    <h2 className="md:text-3xl text-2xl lg:text-4xl font-medium">
                        Meet Our <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Team</span>
                    </h2>
                    <p className="text-gray-700 max-w-2xl mx-auto mt-6">
                        Our team consists of dedicated spiritual guides, teachers, and practitioners who are committed to
                        helping you on your journey of self-discovery and inner transformation.
                    </p>
                </div>

                {/* Team Members Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="bg-white rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:shadow-xl"
                        >
                            <div
                                className="relative h-60 overflow-hidden cursor-pointer"
                                onClick={() => openModal(member)}
                            >
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={250}
                                    height={100}
                                    className="object-cover w-full hover:scale-110 transition-transform duration-300 ease-in"
                                />
                            </div>
                            <div className="md:p-6 p-4 text-center">
                                <h3 className="text-xl font-bold text-prime">{member.name}</h3>
                                <div className="mt-2 mb-3">
                                    <span className="inline-block px-3 py-1 text-sm font-medium text-orange-500 bg-orange-50 rounded-full">
                                        {member.role}
                                    </span>
                                </div>
                                <p className="text-gray-700 text-base">{member.bio}</p>
                                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-center space-x-4">
                                    <button className="size-9 cursor-pointer flex items-center justify-center rounded-full bg-orange-50 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300">
                                        <LuFacebook className='size-5' />
                                    </button>
                                    <button className="size-9 cursor-pointer flex items-center justify-center rounded-full bg-orange-50 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300">
                                        <LuTwitter className='size-5' />
                                    </button>
                                    <button className="size-9 cursor-pointer flex items-center justify-center rounded-full bg-orange-50 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300">
                                        <LuInstagram className='size-5' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Popup */}
            {selectedMember && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 bg-opacity-60 backdrop-blur-sm">
                    <div className="bg-white rounded-lg w-full max-w-3xl overflow-hidden shadow-2xl animate-fadeIn" ref={modalRef}>
                        <div className="flex flex-col lg:flex-row items-start">
                            {/* Left Side - Image */}
                            <div className="lg:w-1/2 w-full lg:p-6 p-4 bg-gradient-to-br from-orange-50 to-white flex items-center justify-center">
                                <div className="relative w-full lg:h-64 md:h-56 h-40 overflow-hidden rounded-lg">
                                    <Image
                                        src={selectedMember.image}
                                        alt={selectedMember.name}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-lg"
                                    />
                                </div>
                            </div>

                            {/* Right Side - Content */}
                            <div className="lg:w-1/2 w-full lg:p-6 p-4">
                                <div className="flex justify-between items-start relative">
                                    <h2 className="text-2xl font-bold text-gray-800">{selectedMember.name}</h2>
                                    <button
                                        onClick={closeModal}
                                        className="text-gray-500 hover:text-gray-800 transition-colors"
                                    >
                                        <LuX className="md:size-7 size-6 absolute bg-main text-white p-0.5 top-0 right-0 rounded-sm md:-top-6 md:-right-6" />
                                    </button>
                                </div>

                                <div className="mt-2 mb-4">
                                    <span className="inline-block px-3 py-1 text-sm font-medium text-orange-500 bg-orange-50 rounded-full">
                                        {selectedMember.role}
                                    </span>
                                </div>

                                <p className="text-gray-700 mb-4 text-sm">
                                    {selectedMember.bio}
                                </p>

                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <span className="font-medium mr-2 text-main">Phone:</span>
                                        <span className="text-gray-600">{selectedMember.phone}</span>
                                    </div>

                                    <div className="flex items-center">
                                        <span className="font-medium mr-2 text-main">Email:</span>
                                        <span className="text-gray-600">{selectedMember.email}</span>
                                    </div>
                                </div>

                                <div className="mt-6 pt-4 border-t border-gray-300/50 flex justify-center lg:justify-end space-x-4">
                                    <button className="size-9 flex items-center justify-center rounded-full bg-orange-50 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300">
                                        <LuFacebook className='size-5' />
                                    </button>
                                    <button className="size-9 flex items-center justify-center rounded-full bg-orange-50 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300">
                                        <LuTwitter className='size-5' />
                                    </button>
                                    <button className="size-9 flex items-center justify-center rounded-full bg-orange-50 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300">
                                        <LuInstagram className='size-5' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}