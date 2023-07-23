import React, { useState } from 'react';

const Dashboard = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        earnings: 0.0,
    });
    const [userRole, setUserRole] = useState('');
    const [isSignup, setIsSignup] = useState(false); // New state to track whether to show the login or signup form

    const handleLogin = (e) => {
        e.preventDefault();
        if (userData.name && userData.email && userRole) {
            // Simulate login success for any input
            setUserData({
                name: userData.name,
                email: userData.email,
                earnings: 50.0, // Fetch the earnings from your API or other sources
            });
            setIsLoggedIn(true);
        } else {
            alert('Please enter your name, email, and select your role to log in.');
        }
    };

    const handleSignup = (e) => {
        e.preventDefault();
        if (userData.name && userData.email && userRole) {
            // Perform signup logic here
            setIsSignup(false);
            setIsLoggedIn(true);
            // For simplicity, let's assume signup is successful for any input
            setUserData({
                name: userData.name,
                email: userData.email,
                earnings: 0.0,
            });
        } else {
            alert('Please enter your name, email, and select your role to sign up.');
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserData({
            name: '',
            email: '',
            earnings: 0.0,
        });
        setUserRole('');
    };

    const handleInputChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    return (
        <div className="dashboard-container bg-gray-100 min-h-screen flex items-center justify-center">
            {isLoggedIn ? (
                <div className="user-dashboard bg-white p-8 rounded shadow-md">
                    <h1 className="text-2xl mb-4">Welcome, {userData.name}!</h1>
                    <p>Email: {userData.email}</p>
                    <p>Earnings: ${userData.earnings}</p>
                    {/* Display different content based on the user role */}
                    {userRole === 'admin' && <p>You have admin privileges to edit content.</p>}
                    <button
                        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            ) : isSignup ? (
                // Signup form
                <div className="signup-form bg-white p-8 rounded shadow-md">
                    <h1 className="text-2xl mb-4">Signup</h1>
                    <form onSubmit={handleSignup}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={userData.name}
                            onChange={handleInputChange}
                            className="block w-full p-2 mb-4 border rounded"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={userData.email}
                            onChange={handleInputChange}
                            className="block w-full p-2 mb-4 border rounded"
                        />
                        <select
                            name="role"
                            value={userRole}
                            onChange={(e) => setUserRole(e.target.value)}
                            className="block w-full p-2 mb-4 border rounded"
                        >
                            <option value="">Select Role</option>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                        </select>
                        <button
                            type="submit"
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                        >
                            Sign up
                        </button>
                        <button
                            type="button"
                            className="ml-2 text-blue-500 hover:underline"
                            onClick={() => setIsSignup(false)}
                        >
                            Go back to login
                        </button>
                    </form>
                </div>
            ) : (
                // Login form
                <div className="login-form bg-white p-8 rounded shadow-md">
                    <h1 className="text-2xl mb-4">Login</h1>
                    <form onSubmit={handleLogin}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={userData.name}
                            onChange={handleInputChange}
                            className="block w-full p-2 mb-4 border rounded"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={userData.email}
                            onChange={handleInputChange}
                            className="block w-full p-2 mb-4 border rounded"
                        />
                        <select
                            name="role"
                            value={userRole}
                            onChange={(e) => setUserRole(e.target.value)}
                            className="block w-full p-2 mb-4 border rounded"
                        >
                            <option value="">Select Role</option>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                        </select>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                        >
                            Login
                        </button>
                        <button
                            type="button"
                            className="ml-2 text-blue-500 hover:underline"
                            onClick={() => setIsSignup(true)}
                        >
                            Sign up
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
