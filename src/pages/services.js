import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Services = () => {
    return (
        <div className="wrapper">
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
                    <h1 className="text-6xl font-bold mb-8">Our Services</h1>
                    <p className="text-xl">Discover how our services can help your business grow.</p>
                </div>
            </header>
            <section className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Web Development</h2>
                            <p className="text-gray-600">
                                We specialize in creating modern, responsive, and user-friendly websites using the latest web technologies. Whether you need a simple landing page or a complex web application, our team has got you covered.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Mobile App Development</h2>
                            <p className="text-gray-600">
                                Our mobile app development services encompass both iOS and Android platforms. We design and develop native and cross-platform mobile applications that offer seamless performance and an exceptional user experience.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-2">UI/UX Design</h2>
                            <p className="text-gray-600">
                                Our talented designers create stunning and intuitive user interfaces that enhance the overall user experience. We focus on usability, accessibility, and aesthetics to ensure that your digital products stand out from the competition.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Digital Marketing</h2>
                            <p className="text-gray-600">
                                Reach your target audience effectively with our digital marketing services. We employ various strategies, including SEO, social media marketing, email marketing, and content creation, to boost your online presence and drive growth for your business.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="bg-black text-white py-12 text-center">
                <div className="container mx-auto px-4">
                    <p>&copy; 2023 Your Company. All rights reserved.</p>
                </div>
            </footer>

            <style jsx>{`
                /* Add some styling to the wrapper to ensure it takes the full height of the viewport */
                .wrapper {
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                }
                
            `}</style>
        </div>
    );
};

export default Services;
