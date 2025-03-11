// "use client";

// import React, { useEffect, useRef } from 'react';
// import { Loader } from '@googlemaps/js-api-loader';

// export function Map() {

//     const mapRef = useRef(null);

//     useEffect(() => {
//         const initMap = async () => {

//             // Load the Google Maps API
//             const loader = new Loader({
//                 apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
//                 version: 'weekly'
//             });

//             const { Map } = await loader.importLibrary('maps');

//             //init a  marker
//             const { Marker } = await loader.importLibrary('marker');

//             // Create a map
//             const position = {
//                 lat: 43.642693,
//                 lng: -79.3871189
//             }

//             // map options
//             const mapOptions = {
//                 center: position,
//                 zoom: 5,
//                 mapId: 'MY_NEXTJS_MAP_ID',
//             }

//             //set the map
//             const map = new Map(mapRef.current, mapOptions);

//             // put up a marker

//             const marker = new Marker({
//                 map: map,
//                 position: position,
//             })
//         }

//         initMap();
//     }, []);


//     return (
//         <div style={{ height: '500px' }} ref={mapRef} />

//     )
// }

// components/MapComponent.jsx
// 'use client'; // React Server Component (optional, but recommended)

// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// const MapComponent = () => {
//     const position = [30.1234, 78.2987]; // Approximate Rishikesh coordinates
//     const customMarker = new L.Icon({
//         iconUrl: '/assets/icons/placeholder.png', // Replace with your marker icon path (e.g., from public folder)
//         iconSize: [40, 41],
//         iconAnchor: [12, 41],
//     });


//     return (
//         <div className="relative w-full h-[500px] z-10"> {/* Container with Tailwind styling */}
//             <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
//                 <TileLayer
//                     attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 />
//                 <Marker position={position} icon={customMarker}>
//                     <Popup>
//                         Sahajanand Wellness and Yog Center
//                     </Popup>
//                 </Marker>
//             </MapContainer>

//             {/* Overlay element (similar to the image) */}
//             <div className="absolute top-2 left-2 bg-white p-2 rounded shadow-md">
//                 <h3 className="text-lg font-semibold">Sahajanand Wellness and Yog Center</h3>
//                 <a href="#" className="text-blue-500 hover:underline">View larger map</a>
//             </div>
//         </div>
//     );
// };

// export default MapComponent;

// components/MapComponent.jsx
// 'use client'; // React Server Component (optional, but recommended)

// import React, { useEffect, useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// const MapComponent = () => {
//     const [isClient, setIsClient] = useState(false);
//     const position = [30.1234, 78.2987]; // Approximate Rishikesh coordinates

//     useEffect(() => {
//         setIsClient(true); // Set isClient to true after component mounts
//     }, []);

//     const customMarker = isClient ? new L.Icon({  // Conditionally create L.Icon
//         iconUrl: '/assets/icons/placeholder.png', // Replace with your marker icon path (e.g., from public folder)
//         iconSize: [40, 41],
//         iconAnchor: [12, 41],
//     }) : null;


//     return (
//         <div className="relative w-full h-[500px] z-10"> {/* Container with Tailwind styling */}
//             {isClient && ( // Conditionally render the MapContainer
//                 <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
//                     <TileLayer
//                         attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                     />
//                     {customMarker && (  // Conditionally render Marker
//                         <Marker position={position} icon={customMarker}>
//                             <Popup>
//                                 Sahajanand Wellness and Yog Center
//                             </Popup>
//                         </Marker>
//                     )}
//                 </MapContainer>
//             )}

//             {/* Overlay element (similar to the image) */}
//             <div className="absolute top-2 left-2 bg-white p-2 rounded shadow-md">
//                 <h3 className="text-lg font-semibold">Sahajanand Wellness and Yog Center</h3>
//                 <a href="#" className="text-blue-500 hover:underline">View larger map</a>
//             </div>
//         </div>
//     );
// };

// export default MapComponent;