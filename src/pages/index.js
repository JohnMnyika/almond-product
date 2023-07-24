import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useTrail, animated } from 'react-spring';

const servicesData = [
    {
        title: 'Fast Shipping',
        description: 'We offer fast and reliable shipping to get your orders delivered on time.',
        icon: '🚚',
    },
    {
        title: 'Wide Product Range',
        description: 'Explore our wide range of products and find exactly what you need.',
        icon: '🛍️',
    },
    {
        title: 'Secure Payments',
        description: 'Shop with confidence using our secure payment options.',
        icon: '🔒',
    },
    {
        title: 'Exceptional Customer Service',
        description: 'Our team is here to assist you with any questions or concerns you may have.',
        icon: '🙋‍♂️',
    },
];

const ServiceCard = ({ title, description, icon, index }) => {
    const trail = useTrail(servicesData.length, {
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 0, transform: 'translateY(100px)' },
        delay: 200 * index,
    });

    return (
        <animated.div style={trail[index]} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
            <span className="text-4xl mb-4">{icon}</span>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-700 text-center">{description}</p>
        </animated.div>
    );
};

const Home = () => {
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
                    <h1 className="text-6xl font-bold mb-8">Welcome to Our eCommerce Website</h1>
                    <p className="text-xl">Explore our wide range of products and discover amazing deals.</p>
                    <button className="bg-white text-black py-3 px-8 mt-8 rounded-lg font-bold">
                        Shop Now
                    </button>
                </div>
            </header>
            <section className="bg-white py-16 flex-grow">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-8">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {servicesData.map((service, index) => (
                            <ServiceCard key={index} index={index} {...service} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-black text-white py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-8">About Us</h2>
                    <p className="text-lg">
                        At our company, we are dedicated to providing the best shopping experience for our customers. Our team of experts carefully selects high-quality products to meet your needs.
                    </p>
                    <p className="text-lg mt-4">
                        We take pride in our exceptional customer service, fast shipping, and secure payment options. Shop with confidence and elevate your lifestyle with our products.
                    </p>
                    <button className="bg-white text-black py-3 px-8 mt-8 rounded-lg font-bold">
                        Learn More
                    </button>
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

export default Home;
