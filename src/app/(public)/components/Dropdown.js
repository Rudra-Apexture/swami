// import React, { useState, useRef, useEffect } from 'react';
// import { FaAngleDown } from "react-icons/fa6";

// const CustomDropdown = ({ options, value, onChange }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const dropdownRef = useRef(null);

//     // Close the dropdown if clicked outside
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setIsOpen(false);
//             }
//         };

//         document.addEventListener("mousedown", handleClickOutside);

//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [dropdownRef]);

//     const handleSelect = (option) => {
//         onChange(option);
//         setIsOpen(false);
//     };

//     return (
//         <div className="relative" ref={dropdownRef}>
//             {/* Trigger Button */}
//             <button
//                 className="bg-white border border-[#FF7600] rounded-md shadow-sm px-2 py-2 inline-flex justify-between gap-2 items-center w-full text-sm font-medium text-gray-700 hover:bg-[#FFF2E6] transition-colors duration-200"
//                 onClick={() => setIsOpen(!isOpen)}
//                 type="button"
//             >
//                 <span className="truncate">{value ? value.label : 'Select an option'}</span>
//                 <FaAngleDown className='size-4 text-[#FF7600]' />
//             </button>

//             {/* Dropdown Panel */}
//             {isOpen && (
//                 <div className="absolute left-0 mt-2 w-full rounded-md shadow-lg bg-white border border-[#FF7600] z-10">
//                     <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
//                         {options.map((option) => (
//                             <button
//                                 key={option.value}
//                                 onClick={() => handleSelect(option)}
//                                 className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-[#FFF2E6] hover:text-gray-900 transition-colors duration-200"
//                                 role="menuitem"
//                             >
//                                 {option.label}
//                             </button>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CustomDropdown;

import React, { useState, useRef, useEffect } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import { motion } from 'framer-motion'; // Import Framer Motion

const CustomDropdown = ({ options, value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close the dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    const handleSelect = (option) => {
        onChange(option);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Trigger Button */}
            <button
                className="bg-white border border-[#FF7600] rounded-md shadow-sm p-2 inline-flex justify-between gap-2 items-center w-full text-sm font-medium text-prime hover:bg-[#FFF2E6] transition-colors duration-200"
                onClick={() => setIsOpen(!isOpen)}
                type="button"
            >
                <span className="truncate">{value ? value.label : 'Select an option'}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }} // Animate the rotation based on isOpen
                    transition={{ duration: 0.3 }} // Add a smooth transition
                    className="inline-block" // Ensure it behaves as an inline element
                >
                    <FaAngleDown className='size-4 text-[#FF7600]' />
                </motion.div>
            </button>

            {/* Dropdown Panel */}
            {isOpen && (
                <div className="absolute left-0 mt-2 w-full rounded-md shadow-lg bg-white border border-[#FF7600] z-10">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {options.map((option) => (
                            <button
                                key={option.value}
                                onClick={() => handleSelect(option)}
                                className="block w-full text-left px-4  py-2 text-sm text-gray-700 hover:bg-[#FFF2E6] hover:text-gray-900 transition-colors duration-200"
                                role="menuitem"
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomDropdown;