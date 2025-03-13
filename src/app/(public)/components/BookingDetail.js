// // pages/booking-detail.js

// import React, { useState } from 'react';

// const BookingDetail = () => {
//     const [name, setName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [email, setEmail] = useState('');
//     const [usernameSignup, setUsernameSignup] = useState('');
//     const [passwordSignup, setPasswordSignup] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [usernameLogin, setUsernameLogin] = useState('');
//     const [passwordLogin, setPasswordLogin] = useState('');
//     const [error, setError] = useState('');

//     const handleSignup = async (e) => {
//         e.preventDefault();

//         if (passwordSignup !== confirmPassword) {
//             setError("Passwords do not match");
//             return;
//         }

//         // Basic Validation
//         if (!name || !lastName || !email || !usernameSignup || !passwordSignup || !confirmPassword) {
//             setError("Please fill in all fields");
//             return;
//         }

//         // In a real application, you'd send this data to your backend for user creation.
//         try {
//             const response = await fetch('/api/signup', { // Replace with your API endpoint
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     name,
//                     lastName,
//                     email,
//                     username: usernameSignup,
//                     password: passwordSignup,
//                 }),
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 // Signup successful
//                 alert('Signup successful!');
//                 // Optionally redirect or clear the form
//             } else {
//                 // Signup failed, display the error message from the backend
//                 setError(data.message || "Signup failed");
//             }
//         } catch (err) {
//             setError("An error occurred during signup.");
//             console.error(err);
//         }
//     };

//     const handleLogin = async (e) => {
//         e.preventDefault();

//         // Basic Validation
//         if (!usernameLogin || !passwordLogin) {
//             setError("Please enter your username and password");
//             return;
//         }

//         // In a real application, you'd send this data to your backend for authentication.
//         try {
//             const response = await fetch('/api/login', { // Replace with your API endpoint
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     username: usernameLogin,
//                     password: passwordLogin,
//                 }),
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 // Login successful
//                 alert('Login successful!');
//                 // Store the authentication token (e.g., JWT) in local storage or cookies
//                 // Redirect to a protected page
//             } else {
//                 // Login failed, display the error message from the backend
//                 setError(data.message || "Login failed");
//             }
//         } catch (err) {
//             setError("An error occurred during login.");
//             console.error(err);
//         }

//     };

//     return (
//         <div className="container mx-auto py-8">
//             <h1 className="text-2xl font-bold mb-4">Booking Details</h1>

//             {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
//                 <strong className="font-bold">Error!</strong>
//                 <span className="block sm:inline">{error}</span>
//             </div>}

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {/* Sign Up Form */}
//                 <div className="bg-white shadow-md rounded-md p-4">
//                     <h2 className="text-lg font-semibold mb-3">Sign Up</h2>
//                     <form onSubmit={handleSignup}>
//                         <div className="mb-2">
//                             <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-1">Name</label>
//                             <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={name} onChange={(e) => setName(e.target.value)} />
//                         </div>
//                         <div className="mb-2">
//                             <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-1">Last Name</label>
//                             <input type="text" id="lastName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={lastName} onChange={(e) => setLastName(e.target.value)} />
//                         </div>
//                         <div className="mb-2">
//                             <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-1">E-Mail</label>
//                             <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={email} onChange={(e) => setEmail(e.target.value)} />
//                         </div>
//                         <div className="mb-2">
//                             <label htmlFor="usernameSignup" className="block text-gray-700 text-sm font-bold mb-1">Username</label>
//                             <input type="text" id="usernameSignup" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={usernameSignup} onChange={(e) => setUsernameSignup(e.target.value)} />
//                         </div>
//                         <div className="mb-2">
//                             <label htmlFor="passwordSignup" className="block text-gray-700 text-sm font-bold mb-1">Password</label>
//                             <input type="password" id="passwordSignup" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={passwordSignup} onChange={(e) => setPasswordSignup(e.target.value)} />
//                         </div>
//                         <div className="mb-4">
//                             <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-1">Confirm Password</label>
//                             <input type="password" id="confirmPassword" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
//                         </div>
//                         <button type="submit" className="bg-[#FF7800] hover:bg-[#ff8f26] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign Up</button>
//                     </form>
//                 </div>

//                 {/* Login Form */}
//                 <div className="bg-white shadow-md rounded-md p-4">
//                     <h2 className="text-lg font-semibold mb-3">Login</h2>
//                     <form onSubmit={handleLogin}>
//                         <div className="mb-4">
//                             <label htmlFor="usernameLogin" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
//                             <input type="text" id="usernameLogin" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={usernameLogin} onChange={(e) => setUsernameLogin(e.target.value)} />
//                         </div>
//                         <div className="mb-6">
//                             <label htmlFor="passwordLogin" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
//                             <input type="password" id="passwordLogin" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={passwordLogin} onChange={(e) => setPasswordLogin(e.target.value)} />
//                         </div>
//                         <button type="submit" className="bg-[#FF7800] hover:bg-[#ff8f26] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BookingDetail;


// pages/booking-detail.js

import React, { useState } from 'react';

const BookingDetail = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [usernameSignup, setUsernameSignup] = useState('');
    const [passwordSignup, setPasswordSignup] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [usernameLogin, setUsernameLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    const [error, setError] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();

        if (passwordSignup !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        // Basic Validation
        if (!name || !lastName || !email || !usernameSignup || !passwordSignup || !confirmPassword) {
            setError("Please fill in all fields");
            return;
        }

        // In a real application, you'd send this data to your backend for user creation.
        try {
            const response = await fetch('/api/signup', { // Replace with your API endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    lastName,
                    email,
                    username: usernameSignup,
                    password: passwordSignup,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // Signup successful
                alert('Signup successful!');
                // Optionally redirect or clear the form
            } else {
                // Signup failed, display the error message from the backend
                setError(data.message || "Signup failed");
            }
        } catch (err) {
            setError("An error occurred during signup.");
            console.error(err);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        // Basic Validation
        if (!usernameLogin || !passwordLogin) {
            setError("Please enter your username and password");
            return;
        }

        // In a real application, you'd send this data to your backend for authentication.
        try {
            const response = await fetch('/api/login', { // Replace with your API endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: usernameLogin,
                    password: passwordLogin,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // Login successful
                alert('Login successful!');
                // Store the authentication token (e.g., JWT) in local storage or cookies
                // Redirect to a protected page
            } else {
                // Login failed, display the error message from the backend
                setError(data.message || "Login failed");
            }
        } catch (err) {
            setError("An error occurred during login.");
            console.error(err);
        }

    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-4">Booking Details</h1>

            {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                <strong className="font-bold">Error!</strong>
                <span className="block sm:inline">{error}</span>
            </div>}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Sign Up Form */}
                <div className="bg-white shadow-md rounded-md p-4">
                    <h2 className="text-lg font-semibold mb-3">Sign Up</h2>
                    <form onSubmit={handleSignup}>
                        <div className="mb-2">
                            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-1">Name</label>
                            <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-1">Last Name</label>
                            <input type="text" id="lastName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-1">E-Mail</label>
                            <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="usernameSignup" className="block text-gray-700 text-sm font-bold mb-1">Username</label>
                            <input type="text" id="usernameSignup" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={usernameSignup} onChange={(e) => setUsernameSignup(e.target.value)} />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="passwordSignup" className="block text-gray-700 text-sm font-bold mb-1">Password</label>
                            <input type="password" id="passwordSignup" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={passwordSignup} onChange={(e) => setPasswordSignup(e.target.value)} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-1">Confirm Password</label>
                            <input type="password" id="confirmPassword" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                        <button type="submit" className="bg-[#FF7800] hover:bg-[#ff8f26] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign Up</button>
                    </form>
                </div>

                {/* Login Form */}
                <div className="bg-white shadow-md rounded-md p-4">
                    <h2 className="text-lg font-semibold mb-3">Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label htmlFor="usernameLogin" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                            <input type="text" id="usernameLogin" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={usernameLogin} onChange={(e) => setUsernameLogin(e.target.value)} />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="passwordLogin" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            <input type="password" id="passwordLogin" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={passwordLogin} onChange={(e) => setPasswordLogin(e.target.value)} />
                        </div>
                        <button type="submit" className="bg-[#FF7800] hover:bg-[#ff8f26] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingDetail;

