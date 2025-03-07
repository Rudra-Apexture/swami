
// components/ImageGallery.jsx
// "use client";

// import { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// export default function ImageGallery() {
//     const [activeImage, setActiveImage] = useState(3); // Default to Triveni Ghat (index 2)

//     const images = [
//         {
//             id: 1,
//             src: "/assets/image/Mahadev-Temple.jpg",
//             alt: "Colorful Hindu temple with ornate architecture",
//             href: "/destinations/temple",
//             buttonText: "Mahadev Temple",
//             description: "This ancient temple features vibrant colors and intricate designs typical of Hindu architecture."
//         },
//         {
//             id: 2,
//             src: "/assets/image/Beatles-Ashram.jpg",
//             alt: "Beatles Ashram ruins of a stone building",
//             href: "/destinations/beatles-ashram",
//             buttonText: "Beatles Ashram",
//             description: "Once home to The Beatles during their spiritual journey, this historic ashram now stands as a tribute to music and meditation."
//         },
//         {
//             id: 3,
//             src: "/assets/image/Triveni-Ghat.jpg",
//             alt: "Triveni Ghat statue of deity on chariot with horses",
//             href: "/destinations/triveni-ghat",
//             buttonText: "Triveni Ghat",
//             description: "A sacred bathing spot where three holy rivers meet, featuring this iconic statue of a deity on a chariot pulled by horses."
//         },
//         {
//             id: 4,
//             src: "/assets/image/TeraManzil-Temple.jpg",
//             alt: "Multi-level orange temple tower with ornate architecture",
//             href: "/destinations/tera-manzil-temple",
//             buttonText: "Tera Manzil Temple",
//             description: "Also known as the Thirteen Story Temple, this magnificent structure sits against the backdrop of lush mountains."
//         },
//         {
//             id: 5,
//             src: "/assets/image/Yogo.jpg",
//             alt: "Person meditating by a river with temples in background",
//             href: "/destinations/yoga-rishikesh",
//             buttonText: "Yoga by the Ganges",
//             description: "Experience tranquility through yoga and meditation along the sacred banks of the Ganges River."
//         }
//     ];

//     const handleImageClick = (id) => {
//         setActiveImage(id);
//     };

//     return (
//         <section className="ashram-temples-section my-10 px-4">
//             <div className="flex flex-col md:flex-row gap-2 h-[500px] md:h-[600px]">
//                 {images.map((image) => (
//                     <div
//                         key={image.id}
//                         className={`relative overflow-hidden rounded-lg transition-all duration-500 ease-in-out cursor-pointer
//                             ${activeImage === image.id ?
//                                 'md:flex-grow md:basis-3/5 h-full' :
//                                 'md:flex-grow-0 md:basis-1/6 h-20 md:h-full'}`}
//                         onClick={() => handleImageClick(image.id)}
//                     >
//                         <Image
//                             src={image.src}
//                             alt={image.alt}
//                             fill
//                             className="object-cover"
//                             priority
//                         />

//                         <div className={`absolute inset-0 bg-black/40 backdrop-blur-[1px] transition-opacity duration-500
//                             ${activeImage === image.id ? 'opacity-60' : 'opacity-80'}`}></div>

//                         {/* Always visible title for small panels */}
//                         <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300
//                             ${activeImage === image.id ? 'opacity-0' : 'opacity-100'}`}>
//                             <h3 className="text-white font-medium text-base md:text-lg transform -rotate-90 md:rotate-0 whitespace-nowrap">
//                                 {image.buttonText}
//                             </h3>
//                         </div>

//                         {/* Content only visible when active */}
//                         <div className={`absolute inset-0 flex flex-col items-center justify-end p-6 transition-opacity duration-500
//                             ${activeImage === image.id ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
//                             <h2 className="text-white font-bold text-2xl md:text-3xl mb-2">
//                                 {image.buttonText}
//                             </h2>
//                             <p className="text-white text-center mb-4 max-w-lg">
//                                 {image.description}
//                             </p>
//                             <Link
//                                 href={image.href}
//                                 className="border-2 rounded-md border-white hover:bg-white hover:text-black transition-colors px-8 py-2 text-base text-white font-medium"
//                             >
//                                 Read More
//                             </Link>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }

// components/ImageGallery.jsx
// 'use client'; // Required for Next.js client components using hooks

// import { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// export default function ImageGallery() {
//     const [activeImage, setActiveImage] = useState(3); // Default to Triveni Ghat (id 3)

//     const images = [
//         {
//             id: 1,
//             src: "/assets/image/Mahadev-Temple.jpg",
//             alt: "Colorful Hindu temple with ornate architecture",
//             href: "/destinations/temple",
//             buttonText: "Neelkanth Mahadev Temple",
//             title: "Neelkanth Mahadev Temple",
//         },
//         {
//             id: 2,
//             src: "/assets/image/Beatles-Ashram.jpg",
//             alt: "Beatles Ashram ruins of a stone building",
//             href: "/destinations/beatles-ashram",
//             buttonText: "Beatles Ashram",
//         },
//         {
//             id: 3,
//             src: "/assets/image/Triveni-Ghat.jpg",
//             alt: "Triveni Ghat statue of deity on chariot with horses",
//             href: "/destinations/triveni-ghat",
//             buttonText: "Triveni Ghat",
//         },
//         {
//             id: 4,
//             src: "/assets/image/TeraManzil-Temple.jpg",
//             alt: "Multi-level orange temple tower with ornate architecture",
//             href: "/destinations/tera-manzil-temple",
//             buttonText: "Tera Manzil Temple",
//         },
//         {
//             id: 5,
//             src: "/assets/image/Yogo.jpg",
//             alt: "Person meditating by a river with temples in background",
//             href: "/destinations/yoga-rishikesh",
//             buttonText: "Yoga",
//         }
//     ];

//     const handleImageClick = (id) => {
//         setActiveImage(id);
//     };

//     return (
//         <section className="Rriveni-Ghat my-10 px-4">
//             {/* Using Tailwind CSS v4 syntax for the flex container */}

//             {/* Triveni-Title */}
//             <div className="relative text-center">
//                 <h2 className="inline-block lg:text-4xl md:text-3xl text-2xl font-bold relative z-10 capitalize">
//                     Mysticism and Majesty in <span
//                         className="bg-gradient-to-r from-main to-amber-500 bg-clip-text text-transparent">Rishikesh’s
//                         Temples </span>
//                 </h2>
//                 <div className='flex justify-center'>
//                     <p className='text-xl text-gray-700 leading-relaxed mt-8 max-w-5xl'>
//                         Nestled in the lap of the Himalayas, where the sacred Ganges River descends from the mountains to
//                         bless the plains, Rishikesh is not just a destination—it is a portal to the divine. Known as the
//                         <span className='text-main font-medium'>"Yoga Capital of the World,"</span> this spiritual haven is
//                         equally revered for its ancient temples, where mysticism and majesty intertwine to create an aura of
//                         timeless reverence. From whispered legends of gods and sages to towering shrines bathed in golden
//                         light, Rishikesh’s temples are gateways to India’s spiritual soul.
//                     </p>
//                 </div>
//             </div>

//             <div className="flex flex-col md:flex-row gap-2 h-[500px] mt-14">
//                 {images.map((image) => (
//                     <div
//                         key={image.id}
//                         className={`relative overflow-hidden rounded-sm transition-all duration-500 ease-in-out cursor-pointer
//                             ${activeImage === image.id ?
//                                 'md:flex-[3_0_0%] h-full z-10' :
//                                 'md:flex-[1_0_0%] h-20 md:h-full'}`}
//                         onClick={() => handleImageClick(image.id)}
//                     >
//                         {/* Using Next.js Image with fill and proper sizing */}
//                         <Image
//                             src={image.src}
//                             alt={image.alt}
//                             fill
//                             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
//                             className="object-cover"
//                             priority={activeImage === image.id}
//                         />

//                         {/* Background overlay */}
//                         <div className={`absolute inset-0 bg-black/70 backdrop-blur-[1px] transition-opacity duration-500
//                             ${activeImage === image.id ? 'opacity-70' : 'opacity-0'}`}></div>


//                         {/* Expanded state content */}
//                         <div className={`absolute inset-0 flex flex-col items-center justify-end p-6 transition-opacity duration-500
//                             ${activeImage === image.id ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
//                             <h2 className="text-white font-bold text-2xl md:text-3xl mb-2">
//                                 {image.buttonText}
//                             </h2>
//                             <Link
//                                 href={image.href}
//                                 className="border-2 rounded-md border-white hover:bg-white hover:text-black transition-colors px-8 py-2 text-base text-white font-medium"
//                             >
//                                 Read More
//                             </Link>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Template Content */}
//             <div className='mt-5 text-xl font-medium'>

//             </div>
//         </section>
//     );
// }


// 'use client'; // Required for Next.js client components using hooks

// import { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// export default function ImageGallery() {
//     const [activeImage, setActiveImage] = useState(3); // Default to Triveni Ghat (id 3)

//     const images = [
//         {
//             id: 1,
//             src: "/assets/image/Mahadev-Temple.jpg",
//             alt: "Colorful Hindu temple with ornate architecture",
//             href: "/destinations/temple",
//             buttonText: "Neelkanth Mahadev Temple",
//             title: "Neelkanth Mahadev Temple",
//             content: "This temple is situated at 1325 meters height and 31 kms far from Rishikesh. Neelkant Mahadev is Temple of Lord Shiva. According to legends Lord Shiva came here for meditation when he consumed poison during the sea churning. Lord Shiva's throat became blue colored due to the poison so he is known a Neelkanth (Blue throated) Neelkanth Mahadev Temple is a prominent Hindu temple located near Rishikesh in the state of Uttarakhand, India. Situated amidst the picturesque backdrop of the Himalayas, the temple is dedicated to Lord Shiva, of the major deities in Hinduism. The temple is named after Lord Shiva's mythical form, Neelkanth, which means Blue Throat in Sanskrit. According to Hindu mythology, during the churning of the cosmic ocean by gods and demons to obtain the elixir of immortality, Lord Shiva consumed the poison that emerged, turning his throat blue. The temple commemorates this legend and is considered a sacred site by devotees."
//         },
//         {
//             id: 2,
//             src: "/assets/image/Beatles-Ashram.jpg",
//             alt: "Beatles Ashram ruins of a stone building",
//             href: "/destinations/beatles-ashram",
//             buttonText: "Beatles Ashram",
//             title: "Beatles Ashram",
//             content: "The Beatles Ashram, also known as Maharishi Mahesh Yogi Ashram, is a historic site located in Rishikesh, Uttarakhand, India. This ashram gained international fame when the renowned English rock band, The Beatles, stayed there in 1968 to study Transcendental Meditation under the guidance of Maharishi Mahesh Yogi. During their stay at the ashram, The Beatles composed numerous songs, which later appeared on their iconic White Album. The tranquil surroundings of the ashram, nestled in the forests near the Ganges River, provided an inspiring backdrop for their creative pursuits."
//         },
//         {
//             id: 3,
//             src: "/assets/image/Triveni-Ghat.jpg",
//             alt: "Triveni Ghat statue of deity on chariot with horses",
//             href: "/destinations/triveni-ghat",
//             buttonText: "Triveni Ghat",
//             title: "Triveni Ghat",
//             content: "Triveni Ghat is a revered bathing ghat (riverbank) situated in the holy city of Rishikesh, Uttarakhand, India. It is one of the most sacred spots along the banks of the Ganges River and holds immense religious significance for Hindus. The name Triveni signifies the confluence of three sacred rivers: the Ganges, Yamuna, and Saraswati. According to Hindu mythology, taking a dip at Triveni Ghat is believed to cleanse one's sins and purify the soul. It is considered a holy site for performing rituals, offering prayers, and conducting religious ceremonies. Triveni Ghat is bustling with activity and attracts devotees, sadhus (holy men), and pilgrims who gather here to take part in the evening aarti (prayer ceremony)"

//         },
//         {
//             id: 4,
//             src: "/assets/image/TeraManzil-Temple.jpg",
//             alt: "Multi-level orange temple tower with ornate architecture",
//             href: "/destinations/tera-manzil-temple",
//             buttonText: "Tera Manzil Temple",
//             title: "Tera Manzil Temple",
//             content: "I apologize, but I couldn't find any information about a specific Tera Manzil Temple in Rishikesh or any other location. It's possible that the temple you mentioned may have a different name or is not widely known. Rishikesh is home to several temples, ashrams, and spiritual centers, each with its own unique significance. If you have any other queries or if there is another topic I can assist you with, please let me know."
//         },
//         {
//             id: 5,
//             src: "/assets/image/Yogo.jpg",
//             alt: "Person meditating by a river with temples in background",
//             href: "/destinations/yoga-rishikesh",
//             buttonText: "Yoga",
//             title: "Yoga",
//             content: "Rishikesh is renowned as the Yoga Capital of the World, offering a serene environment for spiritual and physical well-being. The city attracts practitioners from around the globe, seeking to deepen their practice in the tranquil surroundings of the Himalayas. Visitors can partake in various forms of yoga, meditation, and wellness retreats, rejuvenating their mind, body, and spirit. Rishikesh's ashrams and yoga schools provide a conducive atmosphere for learning and self-discovery, making it an ideal destination for those looking to enhance their overall health."

//         }
//     ];

//     const handleImageClick = (id) => {
//         setActiveImage(id);
//     };

//     const activeImageData = images.find(img => img.id === activeImage);

//     return (
//         <section className="Rriveni-Ghat my-10 px-4">
//             {/* Using Tailwind CSS v4 syntax for the flex container */}

//             {/* Triveni-Title */}
//             <div className="relative text-center">
//                 <h2 className="inline-block lg:text-4xl md:text-3xl text-2xl font-bold relative z-10 capitalize">
//                     Mysticism and Majesty in <span
//                         className="bg-gradient-to-r from-main to-amber-500 bg-clip-text text-transparent">Rishikesh’s
//                         Temples </span>
//                 </h2>
//                 <div className='flex justify-center'>
//                     <p className='text-xl text-gray-700 leading-relaxed mt-8 max-w-5xl'>
//                         Nestled in the lap of the Himalayas, where the sacred Ganges River descends from the mountains to
//                         bless the plains, Rishikesh is not just a destination—it is a portal to the divine. Known as the
//                         <span className='text-main font-medium'>"Yoga Capital of the World,"</span> this spiritual haven is
//                         equally revered for its ancient temples, where mysticism and majesty intertwine to create an aura of
//                         timeless reverence. From whispered legends of gods and sages to towering shrines bathed in golden
//                         light, Rishikesh’s temples are gateways to India’s spiritual soul.
//                     </p>
//                 </div>
//             </div>

//             <div className="flex flex-col md:flex-row gap-2 h-[450px] mt-10">
//                 {images.map((image) => (
//                     <div
//                         key={image.id}
//                         className={`relative overflow-hidden group rounded-sm transition-all duration-500 ease-in-out cursor-pointer
//                             ${activeImage === image.id ?
//                                 'md:flex-[3_0_0%] h-full z-10' :
//                                 'md:flex-[1_0_0%] h-20 md:h-full'}`}
//                         onClick={() => handleImageClick(image.id)}
//                     >
//                         {/* Using Next.js Image with fill and proper sizing */}
//                         <Image
//                             src={image.src}
//                             alt={image.alt}
//                             fill
//                             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
//                             className="object-cover"
//                             priority={activeImage === image.id}
//                         />

//                         {/* Background overlay */}
//                         <div className={`absolute inset-0 bg-black/70 backdrop-blur-[1px] transition-opacity duration-500
//                             ${activeImage === image.id ? 'opacity-70' : 'opacity-0'}`}></div>


//                         {/* Expanded state content */}
//                         <div className={`absolute inset-0 flex flex-col items-center justify-end p-6 transition-opacity duration-500
//                             ${activeImage === image.id ? 'opacity-100 group-translate-y-1.5' : 'opacity-0 pointer-events-none'}`}>
//                             <h2 className="text-white font-bold text-2xl md:text-3xl mb-2">
//                                 {image.buttonText}
//                             </h2>
//                             <Link
//                                 href={image.href}
//                                 className="border-2 rounded-md border-white hover:bg-white hover:text-black transition-colors px-8 py-2 text-base text-white font-medium"
//                             >
//                                 Read More
//                             </Link>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Template Content */}
//             <div className='mt-5'>
//                 {activeImageData && (
//                     <div className="bg-gray-50 rounded-md p-6">
//                         <h3 className="text-3xl font-semibold mb-4 text-main">{activeImageData.title}</h3>
//                         <p className="text-prime text-lg leading-relaxed">{activeImageData.content}</p>
//                     </div>
//                 )}
//             </div>
//         </section>
//     );
// }

// 'use client'; // Required for Next.js client components using hooks

// import { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// export default function ImageGallery() {
//     const [activeImage, setActiveImage] = useState(3); // Default to Triveni Ghat (id 3)

//     const images = [
//         {
//             id: 1,
//             src: "/assets/image/Mahadev-Temple.jpg",
//             alt: "Colorful Hindu temple with ornate architecture",
//             href: "/destinations/temple",
//             buttonText: "Neelkanth Mahadev Temple",
//             title: "Neelkanth Mahadev Temple",
//             content: "This temple is situated at 1325 meters height and 31 kms far from Rishikesh. Neelkant Mahadev is Temple of Lord Shiva. According to legends Lord Shiva came here for meditation when he consumed poison during the sea churning. Lord Shiva's throat became blue colored due to the poison so he is known a Neelkanth (Blue throated) <br> Neelkanth Mahadev Temple is a prominent Hindu temple located near Rishikesh in the state of Uttarakhand, India. Situated amidst the picturesque backdrop of the Himalayas, the temple is dedicated to Lord Shiva, of the major deities in Hinduism. The temple is named after Lord Shiva's mythical form, Neelkanth, which means Blue Throat in Sanskrit. According to Hindu mythology, during the churning of the cosmic ocean by gods and demons to obtain the elixir of immortality, Lord Shiva consumed the poison that emerged, turning his throat blue. The temple commemorates this legend and is considered a sacred site by devotees."
//         },
//         {
//             id: 2,
//             src: "/assets/image/Beatles-Ashram.jpg",
//             alt: "Beatles Ashram ruins of a stone building",
//             href: "/destinations/beatles-ashram",
//             buttonText: "Beatles Ashram",
//             title: "Triveni Ashram",
//             content: "The Beatles Ashram, also known as Maharishi Mahesh Yogi Ashram, is a historic site located in Rishikesh, Uttarakhand, India. This ashram gained international fame when the renowned English rock band, The Beatles, stayed there in 1968 to study Transcendental Meditation under the guidance of Maharishi Mahesh Yogi. During their stay at the ashram, The Beatles composed numerous songs, which later appeared on their iconic White Album. The tranquil surroundings of the ashram, nestled in the forests near the Ganges River, provided an inspiring backdrop for their creative pursuits."
//         },
//         {
//             id: 3,
//             src: "/assets/image/Triveni-Ghat.jpg",
//             alt: "Triveni Ghat statue of deity on chariot with horses",
//             href: "/destinations/triveni-ghat",
//             buttonText: "Triveni Ghat",
//             title: "Beatles Ghat",
//             content: "Triveni Ghat is a revered bathing ghat (riverbank) situated in the holy city of Rishikesh, Uttarakhand, India. It is one of the most sacred spots along the banks of the Ganges River and holds immense religious significance for Hindus. The name Triveni signifies the confluence of three sacred rivers: the Ganges, Yamuna, and Saraswati. According to Hindu mythology, taking a dip at Triveni Ghat is believed to cleanse one's sins and purify the soul. It is considered a holy site for performing rituals, offering prayers, and conducting religious ceremonies. Triveni Ghat is bustling with activity and attracts devotees, sadhus (holy men), and pilgrims who gather here to take part in the evening aarti (prayer ceremony)"

//         },
//         {
//             id: 4,
//             src: "/assets/image/TeraManzil-Temple.jpg",
//             alt: "Multi-level orange temple tower with ornate architecture",
//             href: "/destinations/tera-manzil-temple",
//             buttonText: "Tera Manzil Temple",
//             title: "Tera Manzil Temple",
//             content: "I apologize, but I couldn't find any information about a specific Tera Manzil Temple in Rishikesh or any other location. It's possible that the temple you mentioned may have a different name or is not widely known. Rishikesh is home to several temples, ashrams, and spiritual centers, each with its own unique significance. If you have any other queries or if there is another topic I can assist you with, please let me know."
//         },
//         {
//             id: 5,
//             src: "/assets/image/Yogo.jpg",
//             alt: "Person meditating by a river with temples in background",
//             href: "/destinations/yoga-rishikesh",
//             buttonText: "Yoga",
//             title: "Yoga",
//             content: "Rishikesh is renowned as the Yoga Capital of the World, offering a serene environment for spiritual and physical well-being. The city attracts practitioners from around the globe, seeking to deepen their practice in the tranquil surroundings of the Himalayas. Visitors can partake in various forms of yoga, meditation, and wellness retreats, rejuvenating their mind, body, and spirit. Rishikesh's ashrams and yoga schools provide a conducive atmosphere for learning and self-discovery, making it an ideal destination for those looking to enhance their overall health."

//         }
//     ];

//     const handleImageClick = (id) => {
//         setActiveImage(id);
//     };



//     return (
//         <section className="Rriveni-Ghat my-10 px-4">
//             {/* Using Tailwind CSS v4 syntax for the flex container */}

//             {/* Triveni-Title */}
//             <div className="relative text-center">
//                 <h2 className="inline-block lg:text-4xl md:text-3xl text-2xl font-bold relative z-10 capitalize">
//                     Mysticism and Majesty in <span
//                         className="bg-gradient-to-r from-main to-amber-500 bg-clip-text text-transparent">Rishikesh’s
//                         Temples </span>
//                 </h2>
//                 <div className='flex justify-center'>
//                     <p className='text-xl text-gray-700 leading-relaxed mt-8 max-w-5xl'>
//                         Nestled in the lap of the Himalayas, where the sacred Ganges River descends from the mountains to
//                         bless the plains, Rishikesh is not just a destination—it is a portal to the divine. Known as the
//                         <span className='text-main font-medium'>"Yoga Capital of the World,"</span> this spiritual haven is
//                         equally revered for its ancient temples, where mysticism and majesty intertwine to create an aura of
//                         timeless reverence. From whispered legends of gods and sages to towering shrines bathed in golden
//                         light, Rishikesh’s temples are gateways to India’s spiritual soul.
//                     </p>
//                 </div>
//             </div>

//             <div className="flex flex-col md:flex-row gap-2 h-[500px] mt-14">
//                 {images.map((image) => (
//                     <div
//                         key={image.id}
//                         className={`relative overflow-hidden rounded-sm transition-all duration-500 ease-in-out cursor-pointer
//                             ${activeImage === image.id ?
//                                 'md:flex-[3_0_0%] h-full z-10' :
//                                 'md:flex-[1_0_0%] h-20 md:h-full'}`}
//                         onClick={() => handleImageClick(image.id)}
//                     >
//                         {/* Using Next.js Image with fill and proper sizing */}
//                         <Image
//                             src={image.src}
//                             alt={image.alt}
//                             fill
//                             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
//                             className="object-cover"
//                             priority={activeImage === image.id}
//                         />

//                         {/* Background overlay */}
//                         <div className={`absolute inset-0 bg-black/70 backdrop-blur-[1px] transition-opacity duration-500
//                             ${activeImage === image.id ? 'opacity-70' : 'opacity-0'}`}></div>


//                         {/* Expanded state content */}
//                         <div className={`absolute inset-0 flex flex-col items-center justify-end p-6 transition-opacity duration-500
//                             ${activeImage === image.id ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
//                             <h2 className="text-white font-bold text-2xl md:text-3xl mb-2">
//                                 {image.buttonText}
//                             </h2>
//                             <Link
//                                 href={image.href}
//                                 className="border-2 rounded-md border-white hover:bg-white hover:text-black transition-colors px-8 py-2 text-base text-white font-medium"
//                             >
//                                 Read More
//                             </Link>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Template Content */}
//             <div className='mt-5'>
//                 {/* Map over all images and display their content */}
//                 {images.map((image) => (
//                     <div key={image.id} className="bg-gray-50 rounded-md p-6 mb-4">
//                         <h3 className="text-3xl font-semibold mb-4 text-main">{image.title}</h3>
//                         <p className="text-gray-700 text-lg leading-relaxed">{image.content}</p>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }


// 'use client'; // Required for Next.js client components using hooks

// import { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// export default function ImageGallery() {
//     const [activeImage, setActiveImage] = useState(3); // Default to Triveni Ghat (id 3)

//     const images = [
//         {
//             id: 1,
//             src: "/assets/image/Mahadev-Temple.jpg",
//             alt: "Colorful Hindu temple with ornate architecture",
//             href: "/destinations/temple",
//             buttonText: "Neelkanth Mahadev Temple",
//             title: "Neelkanth Mahadev Temple",
//             content: "This temple is situated at 1325 meters height and 31 kms far from Rishikesh. Neelkant Mahadev is Temple of Lord Shiva. According to legends Lord Shiva came here for meditation when he consumed poison during the sea churning. Lord Shiva's throat became blue colored due to the poison so he is known a Neelkanth (Blue throated).<br><br>Neelkanth Mahadev Temple is a prominent Hindu temple located near Rishikesh in the state of Uttarakhand, India. Situated amidst the picturesque backdrop of the Himalayas, the temple is dedicated to Lord Shiva, of the major deities in Hinduism.<br><br>The temple is named after Lord Shiva's mythical form, Neelkanth, which means Blue Throat in Sanskrit. According to Hindu mythology, during the churning of the cosmic ocean by gods and demons to obtain the elixir of immortality, Lord Shiva consumed the poison that emerged, turning his throat blue. The temple commemorates this legend and is considered a sacred site by devotees."
//         },
//         {
//             id: 2,
//             src: "/assets/image/Beatles-Ashram.jpg",
//             alt: "Beatles Ashram ruins of a stone building",
//             href: "/destinations/beatles-ashram",
//             buttonText: "Beatles Ashram",
//             title: "Triveni Ashram",
//             content: "The Beatles Ashram, also known as Maharishi Mahesh Yogi Ashram, is a historic site located in Rishikesh, Uttarakhand, India. This ashram gained international fame when the renowned English rock band, The Beatles, stayed there in 1968 to study Transcendental Meditation under the guidance of Maharishi Mahesh Yogi. <br><br>During their stay at the ashram, The Beatles composed numerous songs, which later appeared on their iconic White Album. The tranquil surroundings of the ashram, nestled in the forests near the Ganges River, provided an inspiring backdrop for their creative pursuits."
//         },
//         {
//             id: 3,
//             src: "/assets/image/Triveni-Ghat.jpg",
//             alt: "Triveni Ghat statue of deity on chariot with horses",
//             href: "/destinations/triveni-ghat",
//             buttonText: "Triveni Ghat",
//             title: "Beatles Ghat",
//             content: "Triveni Ghat is a revered bathing ghat (riverbank) situated in the holy city of Rishikesh, Uttarakhand, India. It is one of the most sacred spots along the banks of the Ganges River and holds immense religious significance for Hindus.<br><br>The name Triveni signifies the confluence of three sacred rivers: the Ganges, Yamuna, and Saraswati. According to Hindu mythology, taking a dip at Triveni Ghat is believed to cleanse one's sins and purify the soul. It is considered a holy site for performing rituals, offering prayers, and conducting religious ceremonies. Triveni Ghat is bustling with activity and attracts devotees, sadhus (holy men), and pilgrims who gather here to take part in the evening aarti (prayer ceremony)"

//         },
//         {
//             id: 4,
//             src: "/assets/image/TeraManzil-Temple.jpg",
//             alt: "Multi-level orange temple tower with ornate architecture",
//             href: "/destinations/tera-manzil-temple",
//             buttonText: "Tera Manzil Temple",
//             title: "Tera Manzil Temple",
//             content: "I apologize, but I couldn't find any information about a specific Tera Manzil Temple in Rishikesh or any other location. It's possible that the temple you mentioned may have a different name or is not widely known. Rishikesh is home to several temples, ashrams, and spiritual centers, each with its own unique significance. If you have any other queries or if there is another topic I can assist you with, please let me know."
//         },
//         {
//             id: 5,
//             src: "/assets/image/Yogo.jpg",
//             alt: "Person meditating by a river with temples in background",
//             href: "/destinations/yoga-rishikesh",
//             buttonText: "Yoga",
//             title: "Yoga",
//             content: "Rishikesh is renowned as the Yoga Capital of the World, offering a serene environment for spiritual and physical well-being. The city attracts practitioners from around the globe, seeking to deepen their practice in the tranquil surroundings of the Himalayas. Visitors can partake in various forms of yoga, meditation, and wellness retreats, rejuvenating their mind, body, and spirit. Rishikesh's ashrams and yoga schools provide a conducive atmosphere for learning and self-discovery, making it an ideal destination for those looking to enhance their overall health."

//         }
//     ];

//     const handleImageClick = (id) => {
//         setActiveImage(id);
//     };



//     return (
//         <section className="Rriveni-Ghat my-10 px-4">
//             {/* Using Tailwind CSS v4 syntax for the flex container */}

//             {/* Triveni-Title */}
//             <div className="relative text-center">
//                 <h2 className="inline-block lg:text-4xl md:text-3xl text-2xl font-bold relative z-10 capitalize">
//                     Mysticism and Majesty in <span
//                         className="bg-gradient-to-r from-main to-amber-500 bg-clip-text text-transparent">Rishikesh’s
//                         Temples </span>
//                 </h2>
//                 <div className='flex justify-center'>
//                     <p className='text-xl text-gray-700 leading-relaxed mt-8 max-w-5xl'>
//                         Nestled in the lap of the Himalayas, where the sacred Ganges River descends from the mountains to
//                         bless the plains, Rishikesh is not just a destination—it is a portal to the divine. Known as the
//                         <span className='text-main font-medium'>"Yoga Capital of the World,"</span> this spiritual haven is
//                         equally revered for its ancient temples, where mysticism and majesty intertwine to create an aura of
//                         timeless reverence. From whispered legends of gods and sages to towering shrines bathed in golden
//                         light, Rishikesh’s temples are gateways to India’s spiritual soul.
//                     </p>
//                 </div>
//             </div>

//             <div className="flex flex-col md:flex-row gap-2 h-[500px] mt-14">
//                 {images.map((image) => (
//                     <div
//                         key={image.id}
//                         className={`relative overflow-hidden rounded-sm transition-all duration-500 ease-in-out cursor-pointer
//                             ${activeImage === image.id ?
//                                 'md:flex-[3_0_0%] h-full z-10' :
//                                 'md:flex-[1_0_0%] h-20 md:h-full'}`}
//                         onClick={() => handleImageClick(image.id)}
//                     >
//                         {/* Using Next.js Image with fill and proper sizing */}
//                         <Image
//                             src={image.src}
//                             alt={image.alt}
//                             fill
//                             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
//                             className="object-cover"
//                             priority={activeImage === image.id}
//                         />

//                         {/* Background overlay */}
//                         <div className={`absolute inset-0 bg-black/70 backdrop-blur-[1px] transition-opacity duration-500
//                             ${activeImage === image.id ? 'opacity-70' : 'opacity-0'}`}></div>


//                         {/* Expanded state content */}
//                         <div className={`absolute inset-0 flex flex-col items-center justify-end p-6 transition-opacity duration-500
//                             ${activeImage === image.id ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
//                             <h2 className="text-white font-bold text-2xl md:text-3xl mb-2">
//                                 {image.buttonText}
//                             </h2>
//                             <Link
//                                 href={image.href}
//                                 className="border-2 rounded-md border-white hover:bg-white hover:text-black transition-colors px-8 py-2 text-base text-white font-medium"
//                             >
//                                 Read More
//                             </Link>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Template Content */}
//             <div className='mt-5'>
//                 {/* Map over all images and display their content */}
//                 {images.map((image) => (
//                     <div key={image.id} className="bg-gray-50 rounded-md px-6 py-2">
//                         <h3 className="text-2xl font-semibold mb-4 text-main">{image.title}</h3>
//                         <p className="text-gray-700 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: image.content }} />
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }

// 'use client'; // Required for Next.js client components using hooks
// import { useState, useRef, useEffect } from 'react';
// import Image from 'next/image';

// export default function AshramTemples() {
//     const [activeImage, setActiveImage] = useState(3); // Default to Triveni Ghat (id 3)
//     const imageRefs = useRef({}); // Ref to store references to each image content section

//     const images = [
//         {
//             id: 1,
//             src: "/assets/image/Mahadev-Temple.jpg",
//             alt: "Colorful Hindu temple with ornate architecture",
//             href: "/destinations/temple",
//             buttonText: "Neelkanth Mahadev Temple",
//             title: "Neelkanth Mahadev Temple",
//             content: "This temple is situated at 1325 meters height and 31 kms far from Rishikesh. Neelkant Mahadev is Temple of Lord Shiva. According to legends Lord Shiva came here for meditation when he consumed poison during the sea churning. Lord Shiva's throat became blue colored due to the poison so he is known a Neelkanth (Blue throated).<br><br>Neelkanth Mahadev Temple is a prominent Hindu temple located near Rishikesh in the state of Uttarakhand, India. Situated amidst the picturesque backdrop of the Himalayas, the temple is dedicated to Lord Shiva, of the major deities in Hinduism.<br><br>The temple is named after Lord Shiva's mythical form, Neelkanth, which means Blue Throat in Sanskrit. According to Hindu mythology, during the churning of the cosmic ocean by gods and demons to obtain the elixir of immortality, Lord Shiva consumed the poison that emerged, turning his throat blue. The temple commemorates this legend and is considered a sacred site by devotees."
//         },
//         {
//             id: 2,
//             src: "/assets/image/Beatles-Ashram.jpg",
//             alt: "Beatles Ashram ruins of a stone building",
//             href: "/destinations/beatles-ashram",
//             buttonText: "Beatles Ashram",
//             title: "Triveni Ashram",
//             content: "The Beatles Ashram, also known as Maharishi Mahesh Yogi Ashram, is a historic site located in Rishikesh, Uttarakhand, India. This ashram gained international fame when the renowned English rock band, The Beatles, stayed there in 1968 to study Transcendental Meditation under the guidance of Maharishi Mahesh Yogi. <br><br>During their stay at the ashram, The Beatles composed numerous songs, which later appeared on their iconic White Album. The tranquil surroundings of the ashram, nestled in the forests near the Ganges River, provided an inspiring backdrop for their creative pursuits."
//         },
//         {
//             id: 3,
//             src: "/assets/image/Triveni-Ghat.jpg",
//             alt: "Triveni Ghat statue of deity on chariot with horses",
//             href: "/destinations/triveni-ghat",
//             buttonText: "Triveni Ghat",
//             title: "Beatles Ghat",
//             content: "Triveni Ghat is a revered bathing ghat (riverbank) situated in the holy city of Rishikesh, Uttarakhand, India. It is one of the most sacred spots along the banks of the Ganges River and holds immense religious significance for Hindus.<br><br>The name Triveni signifies the confluence of three sacred rivers: the Ganges, Yamuna, and Saraswati. According to Hindu mythology, taking a dip at Triveni Ghat is believed to cleanse one's sins and purify the soul. It is considered a holy site for performing rituals, offering prayers, and conducting religious ceremonies. Triveni Ghat is bustling with activity and attracts devotees, sadhus (holy men), and pilgrims who gather here to take part in the evening aarti (prayer ceremony)"

//         },
//         {
//             id: 4,
//             src: "/assets/image/TeraManzil-Temple.jpg",
//             alt: "Multi-level orange temple tower with ornate architecture",
//             href: "/destinations/tera-manzil-temple",
//             buttonText: "Tera Manzil Temple",
//             title: "Tera Manzil Temple",
//             content: "I apologize, but I couldn't find any information about a specific Tera Manzil Temple in Rishikesh or any other location. It's possible that the temple you mentioned may have a different name or is not widely known. Rishikesh is home to several temples, ashrams, and spiritual centers, each with its own unique significance. If you have any other queries or if there is another topic I can assist you with, please let me know."
//         },
//         {
//             id: 5,
//             src: "/assets/image/Yogo.jpg",
//             alt: "Person meditating by a river with temples in background",
//             href: "/destinations/yoga-rishikesh",
//             buttonText: "Yoga",
//             title: "Yoga",
//             content: "Rishikesh is renowned as the Yoga Capital of the World, offering a serene environment for spiritual and physical well-being. The city attracts practitioners from around the globe, seeking to deepen their practice in the tranquil surroundings of the Himalayas. Visitors can partake in various forms of yoga, meditation, and wellness retreats, rejuvenating their mind, body, and spirit. Rishikesh's ashrams and yoga schools provide a conducive atmosphere for learning and self-discovery, making it an ideal destination for those looking to enhance their overall health."

//         }
//     ];

//     const handleImageClick = (id) => {
//         setActiveImage(id);
//     };

//     const scrollToContent = (id) => {
//         if (imageRefs.current[id]) {
//             imageRefs.current[id].scrollIntoView({ behavior: 'smooth', block: 'start' });
//         }
//     };

//     return (
//         <section className="Rriveni-Ghat my-10 px-4">
//             {/* Using Tailwind CSS v4 syntax for the flex container */}

//             {/* Triveni-Title */}
//             <div className="relative text-center">
//                 <h2 className="inline-block lg:text-4xl md:text-3xl text-2xl font-bold relative z-10 capitalize">
//                     Mysticism and Majesty in <span
//                         className="bg-gradient-to-r from-main to-amber-500 bg-clip-text text-transparent">Rishikesh’s
//                         Temples </span>
//                 </h2>
//                 <div className='flex justify-center'>
//                     <p className='text-xl text-gray-700 leading-relaxed mt-8 max-w-5xl'>
//                         Nestled in the lap of the Himalayas, where the sacred Ganges River descends from the mountains to
//                         bless the plains, Rishikesh is not just a destination—it is a portal to the divine. Known as the
//                         <span className='text-main font-medium'>"Yoga Capital of the World,"</span> this spiritual haven is
//                         equally revered for its ancient temples, where mysticism and majesty intertwine to create an aura of
//                         timeless reverence. From whispered legends of gods and sages to towering shrines bathed in golden
//                         light, Rishikesh’s temples are gateways to India’s spiritual soul.
//                     </p>
//                 </div>
//             </div>

//             <div className="flex flex-col md:flex-row gap-2 h-[500px] mt-14">
//                 {images.map((image) => (
//                     <div
//                         key={image.id}
//                         className={`relative overflow-hidden rounded-sm transition-all duration-500 ease-in-out cursor-pointer
//                             ${activeImage === image.id ?
//                                 'md:flex-[3_0_0%] h-full z-10' :
//                                 'md:flex-[1_0_0%] h-20 md:h-full'}`}
//                         onClick={() => handleImageClick(image.id)}
//                     >
//                         {/* Using Next.js Image with fill and proper sizing */}
//                         <Image
//                             src={image.src}
//                             alt={image.alt}
//                             fill
//                             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
//                             className="object-cover"
//                             priority={activeImage === image.id}
//                         />

//                         {/* Background overlay */}
//                         <div className={`absolute inset-0 bg-black/70 backdrop-blur-[1px] transition-opacity duration-500
//                             ${activeImage === image.id ? 'opacity-70' : 'opacity-0'}`}></div>


//                         {/* Expanded state content */}
//                         <div className={`absolute inset-0 flex flex-col items-center justify-end p-6 transition-opacity duration-500
//                             ${activeImage === image.id ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
//                             <h2 className="text-white font-bold text-2xl md:text-3xl mb-2">
//                                 {image.buttonText}
//                             </h2>

//                             {/* Add onClick to scrollToContent here */}
//                             <button
//                                 onClick={() => scrollToContent(image.id)}
//                                 className="border-2 cursor-pointer rounded-md border-white hover:bg-white hover:text-black transition-colors px-8 py-2 text-base text-white font-medium"
//                             >
//                                 Read More
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Template Content */}
//             <div className='mt-5 container mx-auto'>
//                 {/* Map over all images and display their content */}
//                 {images.map((image) => (
//                     <div key={image.id} ref={el => imageRefs.current[image.id] = el} className="bg-gray-50 rounded-md py-2">
//                         <h3 className="md:text-2xl text-xl font-semibold mb-4 text-main">{image.title}</h3>
//                         <p className="text-gray-700 md:text-lg text-base leading-normal" dangerouslySetInnerHTML={{ __html: image.content }} />
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }


// 'use client'; // Required for Next.js client components using hooks
// import { useState, useRef, useEffect } from 'react';
// import Image from 'next/image';

// export default function ImageGallery() {
//     const [activeTab, setActiveTab] = useState(3); // Default to Triveni Ghat (id 3)
//     const contentRefs = useRef({});

//     const images = [
//         {
//             id: 1,
//             src: "/assets/image/Mahadev-Temple.jpg",
//             alt: "Colorful Hindu temple with ornate architecture",
//             href: "/destinations/temple",
//             buttonText: "Neelkanth Mahadev Temple",
//             title: "Neelkanth Mahadev Temple",
//             content: "This temple is situated at 1325 meters height and 31 kms far from Rishikesh. Neelkant Mahadev is Temple of Lord Shiva. According to legends Lord Shiva came here for meditation when he consumed poison during the sea churning. Lord Shiva's throat became blue colored due to the poison so he is known a Neelkanth (Blue throated).<br><br>Neelkanth Mahadev Temple is a prominent Hindu temple located near Rishikesh in the state of Uttarakhand, India. Situated amidst the picturesque backdrop of the Himalayas, the temple is dedicated to Lord Shiva, of the major deities in Hinduism.<br><br>The temple is named after Lord Shiva's mythical form, Neelkanth, which means Blue Throat in Sanskrit. According to Hindu mythology, during the churning of the cosmic ocean by gods and demons to obtain the elixir of immortality, Lord Shiva consumed the poison that emerged, turning his throat blue. The temple commemorates this legend and is considered a sacred site by devotees."
//         },
//         {
//             id: 2,
//             src: "/assets/image/Beatles-Ashram.jpg",
//             alt: "Beatles Ashram ruins of a stone building",
//             href: "/destinations/beatles-ashram",
//             buttonText: "Beatles Ashram",
//             title: "Triveni Ashram",
//             content: "The Beatles Ashram, also known as Maharishi Mahesh Yogi Ashram, is a historic site located in Rishikesh, Uttarakhand, India. This ashram gained international fame when the renowned English rock band, The Beatles, stayed there in 1968 to study Transcendental Meditation under the guidance of Maharishi Mahesh Yogi. <br><br>During their stay at the ashram, The Beatles composed numerous songs, which later appeared on their iconic White Album. The tranquil surroundings of the ashram, nestled in the forests near the Ganges River, provided an inspiring backdrop for their creative pursuits."
//         },
//         {
//             id: 3,
//             src: "/assets/image/Triveni-Ghat.jpg",
//             alt: "Triveni Ghat statue of deity on chariot with horses",
//             href: "/destinations/triveni-ghat",
//             buttonText: "Triveni Ghat",
//             title: "Beatles Ghat",
//             content: "Triveni Ghat is a revered bathing ghat (riverbank) situated in the holy city of Rishikesh, Uttarakhand, India. It is one of the most sacred spots along the banks of the Ganges River and holds immense religious significance for Hindus.<br><br>The name Triveni signifies the confluence of three sacred rivers: the Ganges, Yamuna, and Saraswati. According to Hindu mythology, taking a dip at Triveni Ghat is believed to cleanse one's sins and purify the soul. It is considered a holy site for performing rituals, offering prayers, and conducting religious ceremonies. Triveni Ghat is bustling with activity and attracts devotees, sadhus (holy men), and pilgrims who gather here to take part in the evening aarti (prayer ceremony)"
//         },
//         {
//             id: 4,
//             src: "/assets/image/TeraManzil-Temple.jpg",
//             alt: "Multi-level orange temple tower with ornate architecture",
//             href: "/destinations/tera-manzil-temple",
//             buttonText: "Tera Manzil Temple",
//             title: "Tera Manzil Temple",
//             content: "I apologize, but I couldn't find any information about a specific Tera Manzil Temple in Rishikesh or any other location. It's possible that the temple you mentioned may have a different name or is not widely known. Rishikesh is home to several temples, ashrams, and spiritual centers, each with its own unique significance. If you have any other queries or if there is another topic I can assist you with, please let me know."
//         },
//         {
//             id: 5,
//             src: "/assets/image/Yogo.jpg",
//             alt: "Person meditating by a river with temples in background",
//             href: "/destinations/yoga-rishikesh",
//             buttonText: "Yoga",
//             title: "Yoga",
//             content: "Rishikesh is renowned as the Yoga Capital of the World, offering a serene environment for spiritual and physical well-being. The city attracts practitioners from around the globe, seeking to deepen their practice in the tranquil surroundings of the Himalayas. Visitors can partake in various forms of yoga, meditation, and wellness retreats, rejuvenating their mind, body, and spirit. Rishikesh's ashrams and yoga schools provide a conducive atmosphere for learning and self-discovery, making it an ideal destination for those looking to enhance their overall health."
//         }
//     ];

//     const handleTabChange = (id) => {
//         setActiveTab(id);
//     };

//     useEffect(() => {
//         // Scroll to content when tab changes
//         if (contentRefs.current[activeTab]) {
//             contentRefs.current[activeTab].scrollIntoView({ behavior: 'smooth', block: 'center' });
//         }
//     }, [activeTab]);

//     return (
//         <section className="temples-section py-16 px-4 bg-gradient-to-b from-amber-50 to-white">
//             {/* Header with decorative elements */}
//             <div className="relative text-center mb-16">
//                 <div className="absolute left-1/2 -translate-x-1/2 top-0 w-32 h-1 bg-gradient-to-r from-amber-300 to-main"></div>
//                 <h2 className="text-4xl md:text-5xl font-bold mt-6 relative inline-block">
//                     Mysticism and Majesty in
//                     <span className="block mt-2 bg-gradient-to-r from-main to-amber-500 bg-clip-text text-transparent">
//                         Rishikesh's Temples
//                     </span>
//                 </h2>
//                 <div className="max-w-4xl mx-auto mt-8 relative">
//                     <div className="absolute -left-6 top-0 w-2 h-full bg-main rounded-full opacity-20"></div>
//                     <p className="text-lg md:text-xl text-gray-700 leading-relaxed px-4">
//                         Nestled in the lap of the Himalayas, where the sacred Ganges River descends from the mountains to
//                         bless the plains, Rishikesh is not just a destination—it is a portal to the divine. Known as the
//                         <span className="text-main font-medium"> "Yoga Capital of the World,"</span> this spiritual haven is
//                         equally revered for its ancient temples, where mysticism and majesty intertwine to create an aura of
//                         timeless reverence. From whispered legends of gods and sages to towering shrines bathed in golden
//                         light, Rishikesh's temples are gateways to India's spiritual soul.
//                     </p>
//                 </div>
//             </div>

//             {/* Main content area with tabs and image display */}
//             <div className="max-w-7xl mx-auto">
//                 {/* Navigation tabs */}
//                 <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
//                     {images.map((image) => (
//                         <button
//                             key={image.id}
//                             onClick={() => handleTabChange(image.id)}
//                             className={`px-4 py-3 md:px-6 md:py-4 rounded-full transition-all duration-300 text-sm md:text-base font-medium
//                                 ${activeTab === image.id
//                                     ? 'bg-main text-white shadow-lg shadow-main/20 scale-105'
//                                     : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'}`}
//                         >
//                             {image.buttonText}
//                         </button>
//                     ))}
//                 </div>

//                 {/* Featured image and content display */}
//                 <div className="grid md:grid-cols-2 gap-8 items-center">
//                     {/* Featured image with decorative frame */}
//                     <div className="relative group">
//                         <div className="absolute inset-0 bg-gradient-to-tr from-main/20 to-amber-400/20 rounded-lg transform rotate-1 scale-105 group-hover:rotate-2 transition-transform duration-500"></div>
//                         <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-xl">
//                             {images.map((image) => (
//                                 <div
//                                     key={image.id}
//                                     className="absolute inset-0 transition-opacity duration-700 ease-in-out "
//                                 >
//                                     <Image
//                                         src={image.src}
//                                         alt={image.alt}
//                                         fill
//                                         sizes="(max-width: 768px) 100vw, 50vw"
//                                         className="object-cover"
//                                         priority={activeTab === image.id}
//                                     />
//                                 </div>
//                             ))}
//                             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
//                                 {images.map((image) => (
//                                     <h3
//                                         key={image.id}
//                                         className={`text-white text-2xl md:text-3xl font-bold transition-opacity duration-500 ${activeTab === image.id ? 'opacity-100' : 'opacity-0'}`}
//                                     >
//                                         {image.title}
//                                     </h3>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>

//                     {/* Content display with scroll animation */}
//                     <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 h-[400px] md:h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-main scrollbar-track-gray-100">
//                         {images.map((image) => (
//                             <div
//                                 key={image.id}
//                                 ref={el => contentRefs.current[image.id] = el}
//                                 className={`transition-all duration-500 ${activeTab === image.id ? 'opacity-100' : 'opacity-100 hidden'}`}
//                             >
//                                 <div className="prose prose-lg max-w-none">
//                                     <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: image.content }}></p>
//                                     <div className="mt-6">
//                                         <a
//                                             href={image.href}
//                                             className="inline-block px-6 py-3 bg-gradient-to-r from-main to-amber-500 text-white font-medium rounded-full hover:shadow-lg transition-shadow duration-300"
//                                         >
//                                             Explore {image.buttonText}
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//             </div>
//         </section>
//     );
// }

'use client'; // Required for Next.js client components using hooks
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function ImageGallery() {
    const [activeTab, setActiveTab] = useState(1); // Default to Triveni Ghat (id 3)
    const contentRefs = useRef({});

    const images = [
        {
            id: 1,
            src: "/assets/image/Mahadev-Temple.jpg",
            alt: "Colorful Hindu temple with ornate architecture",
            href: "/destinations/temple",
            buttonText: "Neelkanth Mahadev Temple",
            title: "Neelkanth Mahadev Temple",
            content: "This temple is situated at 1325 meters height and 31 kms far from Rishikesh. Neelkant Mahadev is Temple of Lord Shiva. According to legends Lord Shiva came here for meditation when he consumed poison during the sea churning. Lord Shiva's throat became blue colored due to the poison so he is known a Neelkanth (Blue throated).Neelkanth Mahadev Temple is a prominent Hindu temple located near Rishikesh in the state of Uttarakhand, India. <br><br> Situated amidst the picturesque backdrop of the Himalayas, the temple is dedicated to Lord Shiva, of the major deities in Hinduism . The temple is named after Lord Shiva's mythical form, Neelkanth, which means Blue Throat in Sanskrit."
        },
        {
            id: 2,
            src: "/assets/image/Beatles-Ashram.jpg",
            alt: "Beatles Ashram ruins of a stone building",
            href: "/destinations/beatles-ashram",
            buttonText: "Beatles Ashram",
            title: "Beatles Ashram",
            content: "The Beatles Ashram, also known as Maharishi Mahesh Yogi Ashram, is a historic site located in Rishikesh, Uttarakhand, India. This ashram gained international fame when the renowned English rock band, The Beatles, stayed there in 1968 to study Transcendental Meditation under the guidance of Maharishi Mahesh Yogi. <br><br>During their stay at the ashram, The Beatles composed numerous songs, which later appeared on their iconic White Album. The tranquil surroundings of the ashram, nestled in the forests near the Ganges River, provided an inspiring backdrop for their creative pursuits."
        },
        {
            id: 3,
            src: "/assets/image/Triveni-Ghat.jpg",
            alt: "Triveni Ghat statue of deity on chariot with horses",
            href: "/destinations/triveni-ghat",
            buttonText: "Triveni Ghat",
            title: "Triveni Ghat",
            content: "Triveni Ghat is a revered bathing ghat (riverbank) situated in the holy city of Rishikesh, Uttarakhand, India. It is one of the most sacred spots along the banks of the Ganges River and holds immense religious significance for Hindus.<br><br>The name Triveni signifies the confluence of three sacred rivers: the Ganges, Yamuna, and Saraswati. According to Hindu mythology, taking a dip at Triveni Ghat is believed to cleanse one's sins and purify the soul. It is considered a holy site for performing rituals, offering prayers, and conducting religious ceremonies. Triveni Ghat is bustling with activity and attracts devotees, sadhus (holy men), and pilgrims who gather here to take part in the evening aarti (prayer ceremony)"
        },
        {
            id: 4,
            src: "/assets/image/TeraManzil-Temple.jpg",
            alt: "Multi-level orange temple tower with ornate architecture",
            href: "/destinations/tera-manzil-temple",
            buttonText: "Tera Manzil Temple",
            title: "Tera Manzil Temple",
            content: "I apologize, but I couldn't find any information about a specific Tera Manzil Temple in Rishikesh or any other location. It's possible that the temple you mentioned may have a different name or is not widely known. Rishikesh is home to several temples, ashrams, and spiritual centers, each with its own unique significance. If you have any other queries or if there is another topic I can assist you with, please let me know."
        },
        {
            id: 5,
            src: "/assets/image/Yogo.jpg",
            alt: "Person meditating by a river with temples in background",
            href: "/destinations/yoga-rishikesh",
            buttonText: "Yoga",
            title: "Yoga",
            content: "Rishikesh is renowned as the Yoga Capital of the World, offering a serene environment for spiritual and physical well-being. The city attracts practitioners from around the globe, seeking to deepen their practice in the tranquil surroundings of the Himalayas. Visitors can partake in various forms of yoga, meditation, and wellness retreats, rejuvenating their mind, body, and spirit. Rishikesh's ashrams and yoga schools provide a conducive atmosphere for learning and self-discovery, making it an ideal destination for those looking to enhance their overall health."
        }
    ];

    const handleTabChange = (id) => {
        setActiveTab(id);
    };

    useEffect(() => {
        // Scroll to content when tab changes
        if (contentRefs.current[activeTab]) {
            contentRefs.current[activeTab].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [activeTab]);

    return (
        <section className="temples-section px-4 my-10 bg-gradient-to-b from-amber-50 to-white">
            {/* Header with decorative elements */}
            <div className="relative text-center mb-16">
                <h2 className="md:text-3xl text-2xl lg:text-4xl font-medium mt-6 relative inline-block">
                    Mysticism and Majesty in
                    <span className="block mt-2 bg-gradient-to-r from-main to-amber-500 bg-clip-text text-transparent">
                        Rishikesh's Temples
                    </span>
                </h2>
                <div className="max-w-5xl mx-auto mt-8 relative">
                    <p className="text-base md:text-xl text-gray-700 leading-relaxed">
                        Nestled in the lap of the Himalayas, where the sacred Ganges River descends from the mountains to
                        bless the plains, Rishikesh is not just a destination—it is a portal to the divine. Known as the
                        <span className="text-main font-medium"> "Yoga Capital of the World,"</span> this spiritual haven is
                        equally revered for its ancient temples, where mysticism and majesty intertwine to create an aura of
                        timeless reverence. From whispered legends of gods and sages to towering shrines bathed in golden
                        light, Rishikesh's temples are gateways to India's spiritual soul.
                    </p>
                </div>
            </div>

            {/* Main content area with tabs and image display */}
            <div className="max-w-7xl mx-auto">
                {/* Navigation tabs */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
                    {/* Tabing */}
                    {images.map((image) => (
                        <button
                            key={image.id}
                            onClick={() => handleTabChange(image.id)}
                            className={`px-4 py-2 rounded-sm transition-all cursor-pointer duration-300 text-sm md:text-base font-medium
                                ${activeTab === image.id
                                    ? 'bg-main text-white shadow-lg hover:scale-105 transition-transform duration-200 ease-in-out'
                                    : 'bg-[#ffebe1] text-prime'}`}
                        >
                            {image.buttonText}
                        </button>
                    ))}
                </div>

                {/* Featured image and content display */}
                <div className="grid lg:grid-cols-2 lg:gap-8 gap-6 items-center">
                    {/* Featured image with decorative frame */}
                    <div className="relative group">
                        <div className="relative h-[400px] md:h-[450px] overflow-hidden rounded-lg">
                            {images.map((image) => (
                                <div
                                    key={image.id}
                                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeTab === image.id ? 'opacity-100' : 'opacity-0'}`}
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover"
                                        priority={activeTab === image.id}
                                    />
                                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] flex items-center justify-center">
                                        {/* <h3 className="text-white text-4xl font-bold p-4 text-center">
                                            {image.buttonText}
                                        </h3> */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Content display with scroll animation */}
                    <div className="">
                        {images.map((image) => (
                            <div
                                key={image.id}
                                ref={el => contentRefs.current[image.id] = el}
                                className={`transition-all duration-500 ${activeTab === image.id ? 'opacity-100' : 'opacity-0 hidden'}`}
                            >
                                <h3 className="text-2xl lg:text-3xl font-bold text-main mb-4">{image.title}</h3>
                                <div className="prose prose-lg max-w-none">
                                    <p className="text-gray-700 leading-relaxed text-base lg:text-lg" dangerouslySetInnerHTML={{ __html: image.content }}></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}




