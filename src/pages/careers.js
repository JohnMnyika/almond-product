import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Careers = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
            <nav className="bg-black text-white p-4">
                <div className="max-w-5xl mx-auto flex justify-between items-center">
                    <div className="text-2xl font-bold">Logo</div>
                    <div className="space-x-4">
                        <Link href="/">Home</Link>
                        <Link href="/aboutUs">About Us</Link>
                        <Link href="/services">Services</Link>
                        <Link href="/careers">Careers</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>
            </nav>
            <header className="bg-gradient-to-r from-blue-500 to-purple-500 py-32 text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-6xl font-bold mb-8">Join Our Team</h1>
                    <p className="text-xl">We are always on the lookout for talented individuals to join our team and contribute to our success.</p>
                </div>
            </header>
            <section className="bg-white py-16 flex-grow">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold mb-8">Currently, we do not have any job openings.</h2>
                        <p className="text-xl text-gray-600">We encourage you to check back later for future opportunities. If you are interested in working with us, please feel free to reach out to us at careers@yourcompany.com and share your resume and cover letter. We will keep your information on file and consider you for any suitable positions that may arise in the future.</p>
                    </div>
                </div>
            </section>
            <footer className="bg-black text-white py-12 text-center">
                <div className="container mx-auto px-4">
                    <p>&copy; 2023 Your Company. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Careers;
