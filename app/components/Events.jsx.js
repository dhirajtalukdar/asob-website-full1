import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Events() {
    return (
        <section id="events" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="section-title">Join The Celebration</h2>
                <p className="section-subtitle">Experience the vibrant colors, sounds, and spirit of Assam at our flagship community celebrations.</p>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-slate-50 rounded-lg shadow-lg overflow-hidden group">
                        <div className="overflow-hidden">
                          <Image src="https://i.ibb.co/zXz6yWJ/spring-fest.jpg" alt="Spring Festival" width={600} height={400} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-slate-800">Spring Fest (Rongali Bihu)</h3>
                            <p className="text-slate-600 mb-4">Our most awaited festival celebrating the Assamese New Year. A multi-day extravaganza of music, dance, and food featuring renowned artists from across the country.</p>
                            <Link href="#" className="font-bold text-red-600 inline-flex items-center">Learn More <ArrowRight className="inline h-4 w-4 ml-1" /></Link>
                        </div>
                    </div>
                    <div className="bg-slate-50 rounded-lg shadow-lg overflow-hidden group">
                        <div className="overflow-hidden">
                          <Image src="https://i.ibb.co/3WfK4DT/durga-puja.jpg" alt="Durga Puja" width={600} height={400} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-slate-800">Shree Shree Durga Puja</h3>
                            <p className="text-slate-600 mb-4">One of Bangalore's largest open-air Durga Puja celebrations. Four days of devotion, feasting (Bhog), and cultural programs that unite communities.</p>
                            <Link href="#" className="font-bold text-red-600 inline-flex items-center">Learn More <ArrowRight className="inline h-4 w-4 ml-1" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}