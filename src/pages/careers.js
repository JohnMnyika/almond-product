import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const JobOpportunity = ({ title, description }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded shadow-md"
        >
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600">{description}</p>
        </motion.div>
    );
};

const Careers = () => {
    const jobOpportunities = [
        {
            title: 'Front-end Developer',
            description:
                'We are looking for a talented Front-end Developer to join our team. The ideal candidate should have experience with modern web technologies, HTML, CSS, and JavaScript frameworks. Knowledge of React.js is a plus.',
        },
        {
            title: 'UI/UX Designer',
            description:
                'We are seeking a creative and detail-oriented UI/UX Designer to craft beautiful and intuitive user interfaces. The candidate should have experience in designing web and mobile applications, proficiency in design tools such as Sketch or Figma, and a strong portfolio showcasing previous work.',
        },
        {
            title: 'Marketing Specialist',
            description:
                'We are hiring a Marketing Specialist to develop and execute marketing campaigns to promote our products and services. The candidate should have a solid understanding of digital marketing channels, SEO, social media marketing, and content creation.',
        },
        {
            title: 'Software Engineer',
            description:
                'We are looking for a skilled Software Engineer to develop and maintain our backend systems. The candidate should have experience with server-side technologies, databases, and API development.',
        },
        // Add more job opportunities here
    ];

    return (
        <div className="bg-gray-100 min-h-screen">
            <nav className="bg-gray-900 text-white p-4">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <div className="text-2xl font-bold">
                            <Link href="/">Logo</Link>
                        </div>
                        <div className="space-x-4">
                            <Link href="/">Home</Link>
                            <Link href="/about">About Us</Link>
                            <Link href="/services">Services</Link>
                            <Link href="/careers">Careers</Link>
                            <Link href="/contact">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </nav>
            <header className="bg-blue-500 py-6">
                <div className="container mx-auto px-4">
                    <h1 className="text-white text-4xl font-bold">Careers</h1>
                </div>
            </header>
            <section className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {jobOpportunities.map((job, index) => (
                        <JobOpportunity key={index} title={job.title} description={job.description} />
                    ))}
                </div>
                <div className="mt-8">
                    <h2 className="text-3xl font-bold mb-4">How to Apply</h2>
                    <p className="text-gray-600">
                        If you're interested in joining our team, please send your resume and cover letter to{' '}
                        <a href="mailto:careers@example.com" className="text-blue-500">
                            careers@example.com
                        </a>
                        . We look forward to hearing from you!
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Careers;
