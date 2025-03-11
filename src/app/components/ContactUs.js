// 'use client';
// import { useState } from 'react';
// import { FaEnvelope } from "react-icons/fa";
// import { FaPhoneAlt } from "react-icons/fa";
// import { FaMapMarkerAlt } from "react-icons/fa";

// const InputForm = ({ formData, setFormData }) => {

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevFormData => ({
//             ...prevFormData,
//             [name]: value,
//         }));
//     };

//     return (
//         <>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                     <input
//                         type="text"
//                         name="firstName"
//                         id="firstName"
//                         placeholder="First name"
//                         className="w-full border rounded-md py-3 px-4 text-gray-700 focus:outline-none"
//                         value={formData.firstName}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div>
//                     <input
//                         type="text"
//                         name="lastName"
//                         id="lastName"
//                         placeholder="Last name"
//                         className="w-full border rounded-md py-3 px-4 text-gray-700 focus:outline-none"
//                         value={formData.lastName}
//                         onChange={handleChange}
//                     />
//                 </div>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//                 <div>
//                     <input
//                         type="email"
//                         name="email"
//                         id="email"
//                         placeholder="your-email"
//                         className="w-full border rounded-md py-3 px-4 text-gray-700 focus:outline-none"
//                         value={formData.email}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div>
//                     <input
//                         type="tel"
//                         name="phone"
//                         id="phone"
//                         placeholder="Enter your phone number"
//                         className="w-full border rounded-md py-3 px-4 text-gray-700 focus:outline-none"
//                         value={formData.phone}
//                         onChange={handleChange}
//                     />
//                 </div>
//             </div>
//             <div className="mt-6">
//                 <textarea
//                     name="message"
//                     id="message"
//                     placeholder="Write your message..."
//                     rows="4"
//                     className="w-full border rounded-md py-3 px-4 text-gray-700 focus:outline-none resize-none"
//                     value={formData.message}
//                     onChange={handleChange}
//                 ></textarea>
//             </div>
//         </>
//     );
// };

// const ContactForm = () => {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//         message: '',
//     });

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         // Add your form submission logic here (e.g., API call)
//         console.log('Form submitted:', formData);
//         // Reset form after submission
//         setFormData({
//             firstName: '',
//             lastName: '',
//             email: '',
//             phone: '',
//             message: '',
//         });
//     };

//     return (
//         <div className="text-prime py-10">
//             <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2">
//                 {/* Get In Touch Section */}
//                 <div className="px-4">
//                     <h2 className="text-3xl font-medium mb-5  text-main">Get in Touch</h2>
//                     <p className="text-gray-700 mb-6 text-lg max-w-md">
//                         If you are interested in working with us,
//                         Reach inward through stillness. Let our ashram guide your journey—connect with us today
//                         Your journey begins with a single step—or a heartfelt message
//                     </p>
//                     <div className="flex items-center mb-5  gap-3">
//                         <FaEnvelope className='size-6 text-main' />
//                         <p className="text-gray-700 text-lg">
//                             swaminarayantb@gmail.com
//                         </p>
//                     </div>
//                     <div className="flex items-center mb-5  gap-3">
//                         <FaPhoneAlt className='size-6 text-main' />
//                         <p className="text-gray-700 text-lg">+1800 900 1248</p>
//                     </div>
//                     <div className="flex items-center gap-3">
//                         <FaMapMarkerAlt className='size-6 text-main' />
//                         <p className="text-gray-700 text-lg">info@escapium.com</p>
//                     </div>
//                 </div>

//                 {/* Contact Form Section */}
//                 <div className="px-4">
//                     <h2 className="text-3xl text-main font-medium mb-5">Contact Form</h2>
//                     <form onSubmit={handleSubmit} className="w-full mx-auto">
//                         <InputForm formData={formData} setFormData={setFormData} />
//                         <button
//                             type="submit"
//                             className="w-full bg-main text-white rounded-md py-3 px-6 mt-5"
//                         >
//                             Send Message
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ContactForm;

// 'use client';
// import { useState } from 'react';
// import { FaEnvelope } from "react-icons/fa";
// import { FaPhoneAlt } from "react-icons/fa";
// import { FaMapMarkerAlt } from "react-icons/fa";

// const InputForm = ({ formData, setFormData }) => {

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevFormData => ({
//             ...prevFormData,
//             [name]: value,
//         }));
//     };

//     return (
//         <>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                     <label htmlFor="firstName" className="block text-prime text-base mb-2">
//                         firstName
//                     </label>
//                     <input
//                         type="text"
//                         name="firstName"
//                         id="firstName"
//                         className="w-full bg-transparent border-b-2 border-gray-200 text-prime focus:outline-none focus:border-orange-300 py-2.5"
//                         value={formData.firstName}
//                         onChange={handleChange}
//                         placeholder=""
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="LastName" className="block text-prime text-base mb-2">
//                         LastName
//                     </label>
//                     <input
//                         type="text"
//                         name="LastName"
//                         id="LastName"
//                         className="w-full bg-transparent border-b-2 border-gray-200 text-prime focus:outline-none focus:border-orange-300 py-2"
//                         value={formData.LastName}
//                         onChange={handleChange}
//                         placeholder=""
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="Email" className="block text-prime text-base mb-2">
//                         Email Address
//                     </label>
//                     <input
//                         type="email"
//                         name="Email"
//                         id="Email"
//                         className="w-full bg-transparent border-b-2 border-gray-200 text-prime focus:outline-none focus:border-orange-300 py-2"
//                         value={formData.lastName}
//                         onChange={handleChange}
//                         placeholder=""
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="Phone" className="block text-prime text-base mb-2">
//                         Phone Number
//                     </label>
//                     <input
//                         type="tel"
//                         name="phone"
//                         id="phone"
//                         className="w-full bg-transparent border-b-2 border-gray-200 text-prime focus:outline-none focus:border-orange-300 py-2"
//                         value={formData.phone}
//                         onChange={handleChange}
//                     />
//                 </div>
//             </div>
//             <div className="mt-6">
//                 <label htmlFor="message" className="block text-prime text-base mb-2">
//                     Your Message...
//                 </label>
//                 <textarea
//                     name="message"
//                     id="message"
//                     rows="3"
//                     className="w-full bg-transparent border-b-2 border-gray-200 text-prime focus:outline-none focus:border-orange-300 py-2 resize-none"
//                     value={formData.message}
//                     onChange={handleChange}
//                 ></textarea>
//             </div>
//         </>
//     );
// };

// const ContactForm = () => {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         message: '',
//         Email: ''
//     });

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         // Add your form submission logic here (e.g., API call)
//         console.log('Form submitted:', formData);
//         // Reset form after submission
//         setFormData({
//             firstName: '',
//             lastName: '',
//             message: '',
//             Email: ''
//         });
//     };

//     return (
//         <div className="py-10">
//             <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 {/* Get In Touch Section */}
//                 <div className="px-4">
//                     <h2 className="text-3xl font-medium mb-5  text-main">Get in Touch</h2>
//                     <p className="text-gray-700 mb-6 text-lg max-w-md">
//                         If you are interested in working with us,
//                         Reach inward through stillness. Let our ashram guide your journey—connect with us today
//                         Your journey begins with a single step—or a heartfelt message
//                     </p>
//                     <div className="flex items-center mb-5  gap-3">
//                         <FaEnvelope className='size-6 text-main' />
//                         <p className="text-gray-700 text-lg">
//                             swaminarayantb@gmail.com
//                         </p>
//                     </div>
//                     <div className="flex items-center mb-5  gap-3">
//                         <FaPhoneAlt className='size-6 text-main' />
//                         <p className="text-gray-700 text-lg">+1800 900 1248</p>
//                     </div>
//                     <div className="flex items-center gap-3">
//                         <FaMapMarkerAlt className='size-6 text-main' />
//                         <p className="text-gray-700 text-lg">info@escapium.com</p>
//                     </div>
//                 </div>

//                 {/* Contact Form Section */}
//                 <div className="px-4">
//                     <h2 className="text-3xl text-main font-medium mb-5">Contact Form</h2>
//                     <form onSubmit={handleSubmit} className="w-full mx-auto">
//                         <InputForm formData={formData} setFormData={setFormData} />
//                         <button
//                             type="submit"
//                             className="w-full bg-main text-white rounded-md py-3 px-6 mt-5"
//                         >
//                             Send Message
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>

//     );
// };

// export default ContactForm;

// 'use client';
// import { useState } from 'react';
// import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

// const InputForm = ({ formData, setFormData }) => {
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevFormData => ({
//             ...prevFormData,
//             [name]: value,
//         }));
//     };

//     return (
//         <>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="relative">
//                     <label htmlFor="firstName" className="absolute top-[-0.5rem] left-2 bg-white px-1 text-gray-500 text-sm transition-all peer-focus:text-main peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:top-[-0.5rem]">
//                         First Name
//                     </label>
//                     <input
//                         type="text"
//                         name="firstName"
//                         id="firstName"
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-main peer placeholder-transparent"
//                         value={formData.firstName}
//                         onChange={handleChange}
//                         placeholder="Your first name"
//                     />
//                 </div>
//                 <div className="relative">
//                     <label htmlFor="lastName" className="absolute top-[-0.5rem] left-2 bg-white px-1 text-gray-500 text-sm transition-all peer-focus:text-main peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:top-[-0.5rem]">
//                         Last Name
//                     </label>
//                     <input
//                         type="text"
//                         name="lastName"
//                         id="lastName"
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-main peer placeholder-transparent"
//                         value={formData.lastName}
//                         onChange={handleChange}
//                         placeholder="Your last name"
//                     />
//                 </div>
//                 <div className="relative">
//                     <label htmlFor="email" className="absolute top-[-0.5rem] left-2 bg-white px-1 text-gray-500 text-sm transition-all peer-focus:text-main peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:top-[-0.5rem]">
//                         Email Address
//                     </label>
//                     <input
//                         type="email"
//                         name="email"
//                         id="email"
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-main peer placeholder-transparent"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="Your email address"
//                     />
//                 </div>
//                 <div className="relative">
//                     <label htmlFor="phone" className="absolute top-[-0.5rem] left-2 bg-white px-1 text-gray-500 text-sm transition-all peer-focus:text-main peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:top-[-0.5rem]">
//                         Phone Number
//                     </label>
//                     <input
//                         type="tel"
//                         name="phone"
//                         id="phone"
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-main peer placeholder-transparent"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         placeholder="Your phone number"
//                     />
//                 </div>
//             </div>
//             <div className="mt-6 relative">
//                 <label htmlFor="message" className="absolute top-[-0.5rem] left-2 bg-white px-1 text-gray-500 text-sm transition-all peer-focus:text-main peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:top-[-0.5rem]">
//                     Your Message
//                 </label>
//                 <textarea
//                     name="message"
//                     id="message"
//                     rows="5"
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-main peer placeholder-transparent"
//                     value={formData.message}
//                     onChange={handleChange}
//                     placeholder="Enter your message here"
//                 ></textarea>
//             </div>
//         </>
//     );
// };

// const ContactForm = () => {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//         message: '',
//     });

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         // Add your form submission logic here (e.g., API call)
//         console.log('Form submitted:', formData);
//         // Reset form after submission
//         setFormData({
//             firstName: '',
//             lastName: '',
//             email: '',
//             phone: '',
//             message: '',
//         });
//     };

//     return (
//         <div className="py-10">
//             <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 {/* Get In Touch Section */}
//                 <div className="px-4">
//                     <h2 className="text-3xl font-medium mb-5  text-main">Get in Touch</h2>
//                     <p className="text-gray-700 mb-6 text-lg max-w-md">
//                         If you are interested in working with us,
//                         Reach inward through stillness. Let our ashram guide your journey—connect with us today
//                         Your journey begins with a single step—or a heartfelt message
//                     </p>
//                     <div className="flex items-center mb-5  gap-3">
//                         <FaEnvelope className='size-6 text-main' />
//                         <p className="text-gray-700 text-lg">
//                             swaminarayantb@gmail.com
//                         </p>
//                     </div>
//                     <div className="flex items-center mb-5  gap-3">
//                         <FaPhoneAlt className='size-6 text-main' />
//                         <p className="text-gray-700 text-lg">+1800 900 1248</p>
//                     </div>
//                     <div className="flex items-center gap-3">
//                         <FaMapMarkerAlt className='size-6 text-main' />
//                         <p className="text-gray-700 text-lg">info@escapium.com</p>
//                     </div>
//                 </div>

//                 {/* Contact Form Section */}
//                 <div className="px-4">
//                     <h2 className="text-3xl text-main font-medium mb-5">Contact Form</h2>
//                     <form onSubmit={handleSubmit} className="w-full mx-auto">
//                         <InputForm formData={formData} setFormData={setFormData} />
//                         <button
//                             type="submit"
//                             className="w-full bg-main text-white rounded-md py-3 px-6 mt-5 hover:bg-main-dark transition-colors"
//                         >
//                             Send Message
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>

//     );
// };

// export default ContactForm;

// 'use client';
// import { useState } from 'react';
// import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

// const InputForm = ({ formData, setFormData, errors }) => {
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevFormData => ({
//             ...prevFormData,
//             [name]: value,
//         }));
//     };

//     return (
//         <>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="relative">
//                     <label htmlFor="firstName" className="absolute top-[-0.5rem] left-2 bg-white px-1 text-gray-500 text-sm transition-all peer-focus:text-main peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:top-[-0.5rem]">
//                         First Name
//                     </label>
//                     <input
//                         type="text"
//                         name="firstName"
//                         id="firstName"
//                         className={`w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none peer placeholder-transparent ${errors.firstName ? 'border-red-500' : ''}`}
//                         value={formData.firstName}
//                         onChange={handleChange}
//                         placeholder="Your first name"
//                     />
//                     {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
//                 </div>
//                 <div className="relative">
//                     <label htmlFor="lastName" className="absolute top-[-0.5rem] left-2 bg-white px-1 text-gray-500 text-sm transition-all peer-focus:text-main peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:top-[-0.5rem]">
//                         Last Name
//                     </label>
//                     <input
//                         type="text"
//                         name="lastName"
//                         id="lastName"
//                         className={`w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none peer placeholder-transparent ${errors.lastName ? 'border-red-500' : ''}`}
//                         value={formData.lastName}
//                         onChange={handleChange}
//                         placeholder="Your last name"
//                     />
//                     {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
//                 </div>
//                 <div className="relative">
//                     <label htmlFor="email" className="absolute top-[-0.5rem] left-2 bg-white px-1 text-gray-500 text-sm transition-all peer-focus:text-main peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:top-[-0.5rem]">
//                         Email Address
//                     </label>
//                     <input
//                         type="email"
//                         name="email"
//                         id="email"
//                         className={`w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none peer placeholder-transparent ${errors.email ? 'border-red-500' : ''}`}
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="Your email address"
//                     />
//                     {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//                 </div>
//                 <div className="relative">
//                     <label htmlFor="phone" className="absolute top-[-0.5rem] left-2 bg-white px-1 text-gray-500 text-sm transition-all peer-focus:text-main peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:top-[-0.5rem]">
//                         Phone Number
//                     </label>
//                     <input
//                         type="tel"
//                         name="phone"
//                         id="phone"
//                         className={`w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none peer placeholder-transparent ${errors.phone ? 'border-red-500' : ''}`}
//                         value={formData.phone}
//                         onChange={handleChange}
//                         placeholder="Your phone number"
//                     />
//                     {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
//                 </div>
//             </div>
//             <div className="mt-6 relative">
//                 <label htmlFor="message" className="absolute top-[-0.5rem] left-2 bg-white px-1 text-gray-500 text-sm transition-all peer-focus:text-main peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:top-[-0.5rem]">
//                     Your Message
//                 </label>
//                 <textarea
//                     name="message"
//                     id="message"
//                     rows="5"
//                     className={`w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none peer placeholder-transparent ${errors.message ? 'border-red-500' : ''}`}
//                     value={formData.message}
//                     onChange={handleChange}
//                     placeholder="Enter your message here"
//                 ></textarea>
//                 {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
//             </div>
//         </>
//     );
// };

// const ContactForm = () => {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//         message: '',
//     });

//     const [errors, setErrors] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//         message: '',
//     });

//     const validateForm = () => {
//         let newErrors = {};
//         if (!formData.firstName) {
//             newErrors.firstName = 'First name is required';
//         }
//         if (!formData.lastName) {
//             newErrors.lastName = 'Last name is required';
//         }
//         if (!formData.email) {
//             newErrors.email = 'Email is required';
//         } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//             newErrors.email = 'Invalid email format';
//         }
//         if (!formData.phone) {
//             newErrors.phone = 'Phone number is required';
//         }
//         if (!formData.message) {
//             newErrors.message = 'Message is required';
//         }
//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0; // Return true if no errors
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (validateForm()) {
//             // Add your form submission logic here (e.g., API call)
//             console.log('Form submitted:', formData);
//             // Reset form after submission
//             setFormData({
//                 firstName: '',
//                 lastName: '',
//                 email: '',
//                 phone: '',
//                 message: '',
//             });
//             setErrors({ // Clear errors on successful submission
//                 firstName: '',
//                 lastName: '',
//                 email: '',
//                 phone: '',
//                 message: '',
//             });
//         } else {
//             console.log('Form has errors');
//         }
//     };

//     return (
//         <div className="py-10">
//             <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 {/* Get In Touch Section */}
//                 <div className="px-4">
//                     <h2 className="text-3xl font-medium mb-5  text-main">Get in Touch</h2>
//                     <p className="text-gray-700 mb-6 text-lg max-w-md">
//                         If you are interested in working with us,
//                         Reach inward through stillness. Let our ashram guide your journey—connect with us today
//                         Your journey begins with a single step—or a heartfelt message
//                     </p>
//                     <div className="flex items-center mb-5  gap-3">
//                         <FaEnvelope className='size-6 text-main' />
//                         <p className="text-gray-700 text-lg">
//                             swaminarayantb@gmail.com
//                         </p>
//                     </div>
//                     <div className="flex items-center mb-5  gap-3">
//                         <FaPhoneAlt className='size-6 text-main' />
//                         <p className="text-gray-700 text-lg">+1800 900 1248</p>
//                     </div>
//                     <div className="flex items-center gap-3">
//                         <FaMapMarkerAlt className='size-6 text-main' />
//                         <p className="text-gray-700 text-lg">info@escapium.com</p>
//                     </div>
//                 </div>

//                 {/* Contact Form Section */}
//                 <div className="px-4">
//                     <h2 className="text-3xl text-main font-medium mb-5">Contact Form</h2>
//                     <form onSubmit={handleSubmit} className="w-full mx-auto">
//                         <InputForm formData={formData} setFormData={setFormData} errors={errors} />
//                         <button
//                             type="submit"
//                             className="w-full bg-main text-white rounded-md py-3 px-6 mt-5 hover:bg-main-dark transition-colors"
//                         >
//                             Send Message
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>

//     );
// };

// export default ContactForm;

'use client';
import { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaSpinner } from "react-icons/fa"; // Import FaSpinner for loading animation
import { LuFacebook, LuTwitter, LuInstagram, LuYoutube } from "react-icons/lu";

const InputForm = ({ formData, setFormData, errors }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        // Only allow numbers for the phone field
        if (name === 'phone') {
            const numericValue = value.replace(/[^0-9]/g, ''); // Remove all non-numeric characters
            if (numericValue.length <= 10) { // Limit to 10 digits
                setFormData(prevFormData => ({
                    ...prevFormData,
                    [name]: numericValue,
                }));
            }
        } else {
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: value,
            }));
        }
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                    <label htmlFor="firstName" className="absolute top-[-0.5rem] left-2 bg-white px-1 text-gray-700 text-sm transition-all peer-focus:text-main peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:top-[-0.5rem]">
                        First Name
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        className={`w-full px-3 py-2.5 border hover:border-black transition-colors duration-300 ease-in-out border-gray-300 rounded-md focus:outline-none peer placeholder-transparent ${errors.firstName ? 'border-red-500' : ''}`}
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Your first name"
                    />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                </div>
                <div className="relative">
                    <label htmlFor="lastName" className="absolute top-[-0.5rem] left-2 bg-white px-1 text-gray-700 text-sm transition-all peer-focus:text-main peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:top-[-0.5rem]">
                        Last Name
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        className={`w-full px-3 py-2.5 border hover:border-black transition-colors duration-300 ease-in-out border-gray-300 rounded-md focus:outline-none peer placeholder-transparent ${errors.lastName ? 'border-red-500' : ''}`}
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Your last name"
                    />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                </div>
                <div className="relative">
                    <label htmlFor="email" className="absolute top-[-0.5rem] left-2 bg-white px-1 text-gray-700 text-sm transition-all peer-focus:text-main peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:top-[-0.5rem]">
                        Email Address
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className={`w-full px-3 py-2.5 border hover:border-black transition-colors duration-300 ease-in-out border-gray-300 rounded-md focus:outline-none peer placeholder-transparent ${errors.email ? 'border-red-500' : ''}`}
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email address"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div className="relative">
                    <label htmlFor="phone" className="absolute top-[-0.5rem] left-2 bg-white px-1 text-gray-700 text-sm transition-all peer-focus:text-main peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:top-[-0.5rem]">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        className={`w-full px-3 py-2.5 border hover:border-black transition-colors duration-300 ease-in-out border-gray-300 rounded-md focus:outline-none peer placeholder-transparent ${errors.phone ? 'border-red-500' : ''}`}
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
            </div>
            <div className="mt-6 relative">
                <label htmlFor="message" className="absolute top-[-0.5rem] left-2 bg-white px-1 text-gray-700 text-sm transition-all peer-focus:text-main peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:top-[-0.5rem]">
                    Your Message
                </label>
                <textarea
                    name="message"
                    id="message"
                    rows="5"
                    className={`w-full px-3 py-2.5 border hover:border-black transition-colors duration-300 ease-in-out border-gray-300 rounded-md focus:outline-none peer placeholder-transparent ${errors.message ? 'border-red-500' : ''}`}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message here"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
        </>
    );
};

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false); // New state for loading animation

    const validateForm = () => {
        let newErrors = {};
        if (!formData.firstName) {
            newErrors.firstName = 'First name is required';
        }
        if (!formData.lastName) {
            newErrors.lastName = 'Last name is required';
        }
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.phone) {
            newErrors.phone = 'Phone number is required';
        } else if (formData.phone.length !== 10) {
            newErrors.phone = 'Phone number must be 10 digits';
        } else if (!/^[0-9]+$/.test(formData.phone)) { // Check if it contains only numbers (already done in handleChange, but double check)
            newErrors.phone = 'Phone number must contain only digits';
        }
        if (!formData.message) {
            newErrors.message = 'Message is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            setIsSubmitting(true); // Start loading animation
            try {
                // Simulate sending the message after 2 seconds
                await new Promise(resolve => setTimeout(resolve, 2000));

                // Add your form submission logic here (e.g., API call)
                console.log('Form submitted:', formData);
                // Reset form after submission
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: '',
                });
                setErrors({ // Clear errors on successful submission
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: '',
                });
            } finally {
                setIsSubmitting(false); // Stop loading animation, whether success or error
            }

        } else {
            console.log('Form has errors');
        }
    };

    return (
        <div className="py-10">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-0 gap-8">
                {/* Get In Touch Section */}
                <div className="px-4">
                    <h2 className="lg:text-3xl text-2xl font-medium mb-5 text-center lg:text-left text-main">Get in Touch</h2>
                    <p className="text-gray-700 mb-6 md:text-lg text-justify lg:max-w-md">
                        If you are interested in working with us,
                        Reach inward through stillness. Let our ashram guide your journey—connect with us today
                        Your journey begins with a single step—or a heartfelt message
                    </p>
                    <div className="flex items-center mb-5 gap-3">
                        <FaEnvelope className='size-5 text-main' />
                        <p className="text-gray-700 text-base lg:text-lg">
                            swaminarayantb@gmail.com
                        </p>
                    </div>
                    <div className="flex items-center mb-5 gap-3">
                        <FaPhoneAlt className='size-5 text-main' />
                        <p className="text-gray-700 text-base lg:text-lg">+1800 900 1248</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaMapMarkerAlt className='size-5 text-main' />
                        <p className="text-gray-700 text-base lg:text-lg">info@escapium.com</p>
                    </div>

                    <div className="mt-5 pt-5 border-t border-orange-100 flex justify-center lg:justify-start space-x-4">
                        <button className="size-9 cursor-pointer flex items-center justify-center rounded-full bg-orange-50 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300">
                            <LuFacebook className='size-5' />
                        </button>
                        <button className="size-9 cursor-pointer flex items-center justify-center rounded-full bg-orange-50 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300">
                            <LuTwitter className='size-5' />
                        </button>
                        <button className="size-9 cursor-pointer flex items-center justify-center rounded-full bg-orange-50 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300">
                            <LuInstagram className='size-5' />
                        </button>
                        <button className="size-9 cursor-pointer flex items-center justify-center rounded-full bg-orange-50 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300">
                            <LuYoutube className='size-5' />
                        </button>
                    </div>

                </div>

                {/* Contact Form Section */}
                <div className="px-4">
                    <h2 className="lg:text-3xl text-2xl text-main text-center lg:text-left font-medium mb-8">Contact Form</h2>
                    <form onSubmit={handleSubmit} className="w-full mx-auto">
                        <InputForm formData={formData} setFormData={setFormData} errors={errors} />
                        <button
                            type="submit"
                            className={`w-full bg-main text-white rounded-md py-3 px-6 mt-5 hover:bg-main-dark transition-colors ${isSubmitting ? 'cursor-not-allowed opacity-70' : ''}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <div className="flex items-center justify-center">
                                    <FaSpinner className="animate-spin mr-2" /> Sending...
                                </div>
                            ) : (
                                'Send Message'
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default ContactForm;


// 'use client';
// import { useState, useEffect, useRef } from 'react';
// import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaSpinner } from "react-icons/fa";

// const InputForm = ({ formData, setFormData, errors }) => {
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         // Only allow numbers for the phone field
//         if (name === 'phone') {
//             const numericValue = value.replace(/[^0-9]/g, ''); // Remove all non-numeric characters
//             if (numericValue.length <= 10) { // Limit to 10 digits
//                 setFormData(prevFormData => ({
//                     ...prevFormData,
//                     [name]: numericValue,
//                 }));
//             }
//         } else {
//             setFormData(prevFormData => ({
//                 ...prevFormData,
//                 [name]: value,
//             }));
//         }
//     };

//     return (
//         <>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="relative">
//                     <label htmlFor="firstName" className="absolute top-[-0.5rem] left-2 bg-white px-1 text-gray-500 text-sm transition-all peer-focus:text-main peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:top-[-0.5rem]">
//                         First Name
//                     </label>
//                     <input
//                         type="text"
//                         name="firstName"
//                         id="firstName"
//                         className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-main peer placeholder-transparent ${errors.firstName ? 'border-red-500' : ''}`}
//                         value={formData.firstName}
//                         onChange={handleChange}
//                         placeholder="Your first name"
//                     />
//                     {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
//                 </div>
//                 <div className="relative">
//                     <label htmlFor="lastName" className="absolute top-[-0.5rem] left-2 bg-white px-1 text-gray-500 text-sm transition-all peer-focus:text-main peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:top-[-0.5rem]">
//                         Last Name
//                     </label>
//                     <input
//                         type="text"
//                         name="lastName"
//                         id="lastName"
//                         className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-main peer placeholder-transparent ${errors.lastName ? 'border-red-500' : ''}`}
//                         value={formData.lastName}
//                         onChange={handleChange}
//                         placeholder="Your last name"
//                     />
//                     {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
//                 </div>
//                 <div className="relative">
//                     <label htmlFor="email" className="absolute top-[-0.5rem] left-2 bg-white px-1 text-gray-500 text-sm transition-all peer-focus:text-main peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:top-[-0.5rem]">
//                         Email Address
//                     </label>
//                     <input
//                         type="email"
//                         name="email"
//                         id="email"
//                         className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-main peer placeholder-transparent ${errors.email ? 'border-red-500' : ''}`}
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="Your email address"
//                     />
//                     {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//                 </div>
//                 <div className="relative">
//                     <label htmlFor="phone" className="absolute top-[-0.5rem] left-2 bg-white px-1 text-gray-500 text-sm transition-all peer-focus:text-main peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:top-[-0.5rem]">
//                         Phone Number
//                     </label>
//                     <input
//                         type="tel"
//                         name="phone"
//                         id="phone"
//                         className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-main peer placeholder-transparent ${errors.phone ? 'border-red-500' : ''}`}
//                         value={formData.phone}
//                         onChange={handleChange}
//                         placeholder="Your phone number"
//                     />
//                     {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
//                 </div>
//             </div>
//             <div className="mt-6 relative">
//                 <label htmlFor="message" className="absolute top-[-0.5rem] left-2 bg-white px-1 text-gray-500 text-sm transition-all peer-focus:text-main peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:top-[-0.5rem]">
//                     Your Message
//                 </label>
//                 <textarea
//                     name="message"
//                     id="message"
//                     rows="5"
//                     className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-main peer placeholder-transparent ${errors.message ? 'border-red-500' : ''}`}
//                     value={formData.message}
//                     onChange={handleChange}
//                     placeholder="Enter your message here"
//                 ></textarea>
//                 {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
//             </div>
//         </>
//     );
// };

// const ContactForm = () => {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//         message: '',
//     });

//     const [errors, setErrors] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//         message: '',
//     });

//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const mapRef = useRef(null); // Ref for the map div

//     // Location data
//     const location = {
//         lat: 30.1173,
//         lng: 78.3052,
//         address: "Sahajanand Wellness and Yog Center, Rishikesh, India",
//     };

//     // Function to load Google Maps script dynamically
//     const loadGoogleMapsScript = (callback) => {
//         const script = document.createElement("script");
//         script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap`; // Replace YOUR_GOOGLE_MAPS_API_KEY
//         script.async = true;
//         script.defer = true;
//         window.initMap = callback; // Set the callback function
//         document.head.appendChild(script);
//     };

//     // Initialize Google Map
//     const initMap = () => {
//         if (window.google && mapRef.current) {
//             const map = new window.google.maps.Map(mapRef.current, {
//                 center: { lat: location.lat, lng: location.lng },
//                 zoom: 12, // Zoom level can be adjusted
//                 disableDefaultUI: false, // Enable default UI elements
//             });

//             // Add a marker to the map
//             new window.google.maps.Marker({
//                 position: { lat: location.lat, lng: location.lng },
//                 map: map,
//                 title: location.address,
//             });
//         }
//     };

//     useEffect(() => {
//         // Load Google Maps script when the component mounts
//         loadGoogleMapsScript(initMap);
//     }, []);

//     const validateForm = () => {
//         let newErrors = {};
//         if (!formData.firstName) {
//             newErrors.firstName = 'First name is required';
//         }
//         if (!formData.lastName) {
//             newErrors.lastName = 'Last name is required';
//         }
//         if (!formData.email) {
//             newErrors.email = 'Email is required';
//         } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//             newErrors.email = 'Invalid email format';
//         }
//         if (!formData.phone) {
//             newErrors.phone = 'Phone number is required';
//         } else if (formData.phone.length !== 10) {
//             newErrors.phone = 'Phone number must be 10 digits';
//         } else if (!/^[0-9]+$/.test(formData.phone)) {
//             newErrors.phone = 'Phone number must contain only digits';
//         }
//         if (!formData.message) {
//             newErrors.message = 'Message is required';
//         }
//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (validateForm()) {
//             setIsSubmitting(true);
//             try {
//                 await new Promise(resolve => setTimeout(resolve, 2000));

//                 console.log('Form submitted:', formData);
//                 setFormData({
//                     firstName: '',
//                     lastName: '',
//                     email: '',
//                     phone: '',
//                     message: '',
//                 });
//                 setErrors({
//                     firstName: '',
//                     lastName: '',
//                     email: '',
//                     phone: '',
//                     message: '',
//                 });
//             } finally {
//                 setIsSubmitting(false);
//             }

//         } else {
//             console.log('Form has errors');
//         }
//     };

//     return (
//         <div className="py-10">
//             <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 {/* Get In Touch Section */}
//                 <div className="px-4">
//                     <h2 className="text-3xl font-medium mb-5 text-main">Get in Touch</h2>
//                     <p className="text-gray-700 mb-6 text-lg max-w-md">
//                         If you are interested in working with us,
//                         Reach inward through stillness. Let our ashram guide your journey—connect with us today
//                         Your journey begins with a single step—or a heartfelt message
//                     </p>
//                     <div className="flex items-center mb-5 gap-3">
//                         <FaEnvelope className='size-6 text-main' />
//                         <p className="text-gray-700 text-lg">
//                             swaminarayantb@gmail.com
//                         </p>
//                     </div>
//                     <div className="flex items-center mb-5 gap-3">
//                         <FaPhoneAlt className='size-6 text-main' />
//                         <p className="text-gray-700 text-lg">+1800 900 1248</p>
//                     </div>
//                     <div className="flex items-center gap-3">
//                         <FaMapMarkerAlt className='size-6 text-main' />
//                         <p className="text-gray-700 text-lg">info@escapium.com</p>
//                     </div>

//                     {/* Google Map Section */}
//                     <div className="mt-6">
//                         <h3 className="text-xl font-medium mb-3 text-main">Our Location</h3>
//                         <div ref={mapRef} className="w-full h-64 rounded-md" />
//                         <p className="text-gray-700 mt-3">{location.address}</p>
//                     </div>
//                 </div>

//                 {/* Contact Form Section */}
//                 <div className="px-4">
//                     <h2 className="text-3xl text-main font-medium mb-5">Contact Form</h2>
//                     <form onSubmit={handleSubmit} className="w-full mx-auto">
//                         <InputForm formData={formData} setFormData={setFormData} errors={errors} />
//                         <button
//                             type="submit"
//                             className={`w-full bg-main text-white rounded-md py-3 px-6 mt-5 hover:bg-main-dark transition-colors ${isSubmitting ? 'cursor-not-allowed opacity-50' : ''}`}
//                             disabled={isSubmitting}
//                         >
//                             {isSubmitting ? (
//                                 <div className="flex items-center justify-center">
//                                     <FaSpinner className="animate-spin mr-2" /> Sending...
//                                 </div>
//                             ) : (
//                                 'Send Message'
//                             )}
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ContactForm;


