import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Contact = () => {
    return (
        <div>
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
                    <h1 className="text-6xl font-bold mb-8">Contact Us</h1>
                    <p className="text-xl">Have questions or want to get in touch? Reach out to us.</p>
                </div>
            </header>
            <section className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-lg font-bold">Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-lg font-bold">Email</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-lg font-bold">Subject</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-lg font-bold">Message</label>
                                    <textarea className="w-full px-4 py-3 rounded-lg border border-gray-300 resize-none focus:border-blue-500" rows="5"></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-bold"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold mb-8">Contact Information</h2>
                            <ul className="space-y-4">
                                <li>
                                    <h3 className="text-xl font-bold">Email</h3>
                                    <p className="text-lg">contact@example.com</p>
                                </li>
                                <li>
                                    <h3 className="text-xl font-bold">Phone</h3>
                                    <p className="text-lg">+254 123-456-7890</p>
                                </li>
                                <li>
                                    <h3 className="text-xl font-bold">Address</h3>
                                    <p className="text-lg">123 Street, City, Country</p>
                                </li>
                            </ul>
                        </div>
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

export default Contact;
