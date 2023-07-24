import React from 'react';
import Link from 'next/link';

const AboutUs = () => {
    return (
        <div className="wrapper">
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
                    <h1 className="text-6xl font-bold mb-8">About Us</h1>
                    <p className="text-xl">Discover our journey and commitment to excellence.</p>
                </div>
            </header>
            <section className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Our Story</h2>
                        <p className="text-gray-600">
                            At Your Company, we are driven by a passion for technology and a commitment to providing innovative solutions that empower businesses to thrive in the digital age. Since our inception, we have been at the forefront of web development, mobile app development, UI/UX design, and digital marketing services.
                        </p>
                        <p className="text-gray-600 mt-4">
                            Our team of talented professionals brings together diverse expertise and creative perspectives to deliver exceptional results for our clients. We take pride in our ability to understand each client's unique needs and tailor our solutions accordingly, ensuring that they achieve their business objectives and stay ahead of the competition.
                        </p>
                    </div>
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
                        <p className="text-gray-600">
                            Our mission is to empower businesses with cutting-edge technology and digital strategies that drive growth and success. We believe that every business deserves access to high-quality digital solutions that enhance their online presence, engage their customers, and boost their bottom line.
                        </p>
                        <p className="text-gray-600 mt-4">
                            We are committed to staying at the forefront of technological advancements, continuously expanding our skill set, and maintaining the highest standards of quality and professionalism. By fostering a culture of collaboration, creativity, and innovation, we aim to make a lasting impact on the businesses we serve and contribute positively to the digital ecosystem.
                        </p>
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

                /* Set the footer to be fixed at the bottom of the viewport */
                footer {
                    position: fixed;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                }
            `}</style>
        </div>
    );
};

export default AboutUs;
