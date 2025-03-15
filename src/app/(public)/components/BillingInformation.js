// "use client";
// import React, { useState } from 'react';

// const BillingInformation = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         lastName: '',
//         address: '',
//         email: '',
//         phone: '',
//         zipCode: '',
//         city: '',
//         country: 'India', // Default value
//         stateProvince: '',
//         specialRequests: '',
//         termsAgreed: false,
//     });

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData(prevFormData => ({
//             ...prevFormData,
//             [name]: type === 'checkbox' ? checked : value,
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle form submission logic here
//         console.log(formData);
//     };

//     return (
//         <div className="bg-white rounded-lg shadow-md p-6 border border-gray-300 my-10">
//             <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
//             <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {/* Name */}
//                 <div>
//                     <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                         * Name
//                     </label>
//                     <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="shadow-sm py-2 px-4 block w-full sm:text-sm border border-gray-300 rounded-md"
//                         required
//                     />
//                 </div>

//                 {/* Last Name */}
//                 <div>
//                     <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
//                         * Last Name
//                     </label>
//                     <input
//                         type="text"
//                         id="lastName"
//                         name="lastName"
//                         value={formData.lastName}
//                         onChange={handleChange}
//                         className="shadow-sm py-2 px-4 block w-full sm:text-sm border border-gray-300 rounded-md"
//                         required
//                     />
//                 </div>

//                 {/* Address */}
//                 <div>
//                     <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
//                         * Address
//                     </label>
//                     <input
//                         type="text"
//                         id="address"
//                         name="address"
//                         value={formData.address}
//                         onChange={handleChange}
//                         className="shadow-sm py-2 px-4 block w-full sm:text-sm border border-gray-300 rounded-md"
//                         required
//                     />
//                 </div>

//                 {/* Email */}
//                 <div>
//                     <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                         E-Mail
//                     </label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="shadow-sm py-2 px-4 block w-full sm:text-sm border border-gray-300 rounded-md"
//                     />
//                 </div>

//                 {/* Phone */}
//                 <div>
//                     <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
//                         * Phone
//                     </label>
//                     <div className="relative">
//                         {/* Country Flag (Replace with actual flag component or image) */}
//                         <div className="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none">
//                             🇮🇳
//                         </div>
//                         <input
//                             type="tel"
//                             id="phone"
//                             name="phone"
//                             value={formData.phone}
//                             onChange={handleChange}
//                             className="shadow-sm py-2 px-4 block w-full sm:text-sm border border-gray-300 rounded-md pl-12"
//                             required
//                         />
//                     </div>
//                 </div>

//                 {/* Zip Code */}
//                 <div>
//                     <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
//                         * Zip Code
//                     </label>
//                     <input
//                         type="text"
//                         id="zipCode"
//                         name="zipCode"
//                         value={formData.zipCode}
//                         onChange={handleChange}
//                         className="shadow-sm py-2 px-4 block w-full sm:text-sm border border-gray-300 rounded-md"
//                         required
//                     />
//                 </div>

//                 {/* City */}
//                 <div>
//                     <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
//                         * City
//                     </label>
//                     <input
//                         type="text"
//                         id="city"
//                         name="city"
//                         value={formData.city}
//                         onChange={handleChange}
//                         className="shadow-sm py-2 px-4 block w-full sm:text-sm border border-gray-300 rounded-md"
//                         required
//                     />
//                 </div>

//                 {/* Country */}
//                 <div>
//                     <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
//                         Country
//                     </label>
//                     <select
//                         id="country"
//                         name="country"
//                         value={formData.country}
//                         onChange={handleChange}
//                         className="shadow-sm py-2 px-4 block w-full sm:text-sm border border-gray-300 rounded-md"
//                     >
//                         <option>India</option>
//                         {/* Add more countries as needed */}
//                     </select>
//                 </div>

//                 {/* State/Province */}
//                 <div>
//                     <label htmlFor="stateProvince" className="block text-sm font-medium text-gray-700 mb-1">
//                         State/Province
//                     </label>
//                     <select
//                         id="stateProvince"
//                         name="stateProvince"
//                         value={formData.stateProvince}
//                         onChange={handleChange}
//                         className="shadow-sm py-2 px-4 block w-full sm:text-sm border border-gray-300 rounded-md"
//                     >
//                         <option>
//                             ------
//                         </option>
//                     </select>
//                 </div>

//                 {/* Special Requests */}
//                 <div>
//                     <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
//                         Special Requests
//                     </label>
//                     <textarea
//                         id="specialRequests"
//                         name="specialRequests"
//                         rows="3"
//                         value={formData.specialRequests}
//                         onChange={handleChange}
//                         className="shadow-sm py-2 px-4 block w-full sm:text-sm border border-gray-300 rounded-md"
//                     ></textarea>
//                 </div>

//                 {/* Terms and Conditions */}
//                 <div className="md:col-span-2">
//                     <div className="flex items-start">
//                         <div className="flex items-center h-5">
//                             <input
//                                 id="termsAgreed"
//                                 name="termsAgreed"
//                                 type="checkbox"
//                                 checked={formData.termsAgreed}
//                                 onChange={handleChange}
//                                 className=" h-4 w-4 text-indigo-600 border-gray-300 rounded"
//                                 required
//                             />
//                         </div>
//                         <div className="ml-3 text-sm">
//                             <label htmlFor="termsAgreed" className="font-medium text-gray-700">
//                                 * I agree to the terms and conditions
//                             </label>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Submit Button */}
//                 <div className="md:col-span-2">
//                     <button
//                         type="submit"
//                         className="inline-flex items-center px-8 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-main"
//                     >
//                         Submit
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default BillingInformation;

"use client";
import React, { useState } from 'react';

const countries = [
    { code: 'IN', name: 'India' },
    { code: 'US', name: 'United States' },
    { code: 'CA', name: 'Canada' },
    // Add more countries as needed
];

const statesByCountry = {
    'IN': [
        { code: 'MH', name: 'Maharashtra' },
        { code: 'KA', name: 'Karnataka' },
        { code: 'TN', name: 'Tamil Nadu' },
        // Add more states for India
    ],
    'US': [
        { code: 'CA', name: 'California' },
        { code: 'NY', name: 'New York' },
        { code: 'TX', name: 'Texas' },
        // Add more states for the United States
    ],
    'CA': [
        { code: 'ON', name: 'Ontario' },
        { code: 'QC', name: 'Quebec' },
        { code: 'BC', name: 'British Columbia' },
        // Add more states for Canada
    ],
    // You can also create a default list for other country codes
};

const BillingInformation = () => {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        address: '',
        email: '',
        phone: '',
        zipCode: '',
        city: '',
        country: countries[0].code,
        stateProvince: '',
        specialRequests: '',
        termsAgreed: false,
    });

    const [states, setStates] = useState(statesByCountry[countries[0].code] || []);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionMessage, setSubmissionMessage] = useState('');
    const [formErrors, setFormErrors] = useState({});  // State to store form validation errors


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name === 'country') {
            const selectedCountryCode = value;
            setStates(statesByCountry[selectedCountryCode] || []);
            setFormData(prevFormData => ({
                ...prevFormData,
                country: selectedCountryCode,
                stateProvince: '', // Reset state when country changes
            }));
        } else {
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value,
            }));
        }
    };


    const validateForm = () => {
        let errors = {};
        if (!formData.name) errors.name = "Name is required";
        if (!formData.lastName) errors.lastName = "Last Name is required";
        if (!formData.address) errors.address = "Address is required";
        if (!formData.phone) errors.phone = "Phone is required";
        if (!formData.zipCode) errors.zipCode = "Zip Code is required";
        if (!formData.city) errors.city = "City is required";
        if (!formData.termsAgreed) errors.termsAgreed = "You must agree to the terms and conditions";

        setFormErrors(errors);
        return Object.keys(errors).length === 0; // Return true if no errors
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return; // Stop submission if there are validation errors
        }


        setIsSubmitting(true);
        setSubmissionMessage(''); // Clear any previous messages

        try {
            // Simulate an API call (replace with your actual API call)
            await new Promise(resolve => setTimeout(resolve, 1500));  // Simulate 1.5 seconds delay

            // If the API call is successful (replace with your actual success condition)
            // Here, we always assume success for the sake of example
            setSubmissionMessage('Data was successfully sent!');
            setFormErrors({});  // Clear errors upon successful submission
            setFormData({
                name: '',
                lastName: '',
                address: '',
                email: '',
                phone: '',
                zipCode: '',
                city: '',
                country: countries[0].code,
                stateProvince: '',
                specialRequests: '',
                termsAgreed: false,
            });
            setStates(statesByCountry[countries[0].code] || []);



        } catch (error) {
            // Handle errors from the API call
            console.error("Submission error:", error);
            setSubmissionMessage('An error occurred during submission. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <div className="bg-white rounded-lg shadow-md lg:p-6 p-4 border border-gray-300 lg:my-10 my-0">
            <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        * Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`shadow-sm py-2 px-4 block w-full sm:text-sm border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                        required
                    />
                    {formErrors.name && <p className="text-red-500 text-xs italic">{formErrors.name}</p>}
                </div>

                {/* Last Name */}
                <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        * Last Name
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`shadow-sm py-2 px-4 block w-full sm:text-sm border ${formErrors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                        required
                    />
                    {formErrors.lastName && <p className="text-red-500 text-xs italic">{formErrors.lastName}</p>}
                </div>

                {/* Address */}
                <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        * Address
                    </label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className={`shadow-sm py-2 px-4 block w-full sm:text-sm border ${formErrors.address ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                        required
                    />
                    {formErrors.address && <p className="text-red-500 text-xs italic">{formErrors.address}</p>}
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        E-Mail
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="shadow-sm py-2 px-4 block w-full sm:text-sm border border-gray-300 rounded-md"
                    />
                </div>

                {/* Phone */}
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        * Phone
                    </label>
                    <div className="relative">
                        {/* Country Flag (Replace with actual flag component or image) */}
                        <div className="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none">
                            🇮🇳
                        </div>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`shadow-sm py-2 px-4 block w-full sm:text-sm border ${formErrors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md pl-12`}
                            required
                        />
                    </div>
                    {formErrors.phone && <p className="text-red-500 text-xs italic">{formErrors.phone}</p>}
                </div>

                {/* Zip Code */}
                <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                        * Zip Code
                    </label>
                    <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        className={`shadow-sm py-2 px-4 block w-full sm:text-sm border ${formErrors.zipCode ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                        required
                    />
                    {formErrors.zipCode && <p className="text-red-500 text-xs italic">{formErrors.zipCode}</p>}
                </div>

                {/* City */}
                <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        * City
                    </label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className={`shadow-sm py-2 px-4 block w-full sm:text-sm border ${formErrors.city ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                        required
                    />
                    {formErrors.city && <p className="text-red-500 text-xs italic">{formErrors.city}</p>}
                </div>

                {/* Country */}
                <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                        Country
                    </label>
                    <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="shadow-sm py-2 px-4 block w-full sm:text-sm border border-gray-300 rounded-md"
                    >
                        {countries.map(country => (
                            <option key={country.code} value={country.code}>
                                {country.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* State/Province */}
                <div>
                    <label htmlFor="stateProvince" className="block text-sm font-medium text-gray-700 mb-1">
                        State/Province
                    </label>

                    
                    <select
                        id="stateProvince"
                        name="stateProvince"
                        value={formData.stateProvince}
                        onChange={handleChange}
                        className="shadow-sm py-2 px-4 block w-full sm:text-sm border border-gray-300 rounded-md"
                        disabled={states.length === 0}
                    >
                        <option value="">
                            {states.length === 0 ? 'Select Country First' : 'Select State/Province'}
                        </option>
                        {states.map(state => (
                            <option key={state.code} value={state.code}>
                                {state.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Special Requests */}
                <div>
                    <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
                        Special Requests
                    </label>
                    <textarea
                        id="specialRequests"
                        name="specialRequests"
                        rows="3"
                        value={formData.specialRequests}
                        onChange={handleChange}
                        className="shadow-sm py-2 px-4 block w-full sm:text-sm border border-gray-300 rounded-md"
                    ></textarea>
                </div>

                {/* Terms and Conditions */}
                <div className="md:col-span-2">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input
                                id="termsAgreed"
                                name="termsAgreed"
                                type="checkbox"
                                checked={formData.termsAgreed}
                                onChange={handleChange}
                                className=" h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="termsAgreed" className="font-medium text-gray-700">
                                * I agree to the terms and conditions
                            </label>
                        </div>
                    </div>
                    {formErrors.termsAgreed && <p className="text-red-500 text-xs italic">{formErrors.termsAgreed}</p>}
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2">
                    <button
                        type="submit"
                        className="inline-flex items-center px-8 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-main"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                    {submissionMessage && (
                        <div className={`mt-4 p-3 rounded-md ${submissionMessage.startsWith('Data') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {submissionMessage}
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
};

export default BillingInformation;