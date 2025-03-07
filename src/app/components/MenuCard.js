// components/MenuCard.jsx
"use client";
import Image from 'next/image';

export default function MenuCard({ imageUrl, title, description }) {
    return (
        <div className="relative w-full md:min-h-screen h-[440px] overflow-hidden">

            <div className="absolute inset-0 bg-black/60 z-10"></div> {/* Overlay */}

            {/* Title at the Top */}
            <div className="absolute top-1/3 left-0 right-0 flex items-center justify-center z-20 text-white lg:text-6xl md:text-5xl text-4xl font-medium">
                {title}
            </div>

            {/* Description Below the Title */}
            <div className="absolute top-1/2 left-0 right-0 flex items-center justify-center px-4 z-20 text-white">
                <p className="text-base md:text-2xl max-w-3xl text-center -mt-3">
                    {description}
                </p>
            </div>

            <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover transition-transform duration-500"
            />

        </div>
    );
}