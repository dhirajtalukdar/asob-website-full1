import { Drum, HeartHandshake, Users } from 'lucide-react';

export default function WhatWeDo() {
    return (
        <section id="what-we-do" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="section-title">Weaving Culture, Community, and Care</h2>
                <p className="section-subtitle">Our initiatives are centered around three pillars: celebrating our rich heritage, empowering our community, and providing support where it's needed most.</p>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <Drum className="h-16 w-16 mx-auto text-red-600 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Cultural Affairs</h3>
                        <p className="text-slate-600">From the grand Spring Festival (Rongali Bihu) to our traditional Durga Puja, we create immersive cultural experiences that keep our traditions alive for generations.</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <HeartHandshake className="h-16 w-16 mx-auto text-red-600 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Social Welfare</h3>
                        <p className="text-slate-600">We are committed to the well-being of our community through health camps, blood donation drives, flood relief programs, and charity initiatives like the "Joy of Giving."</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <Users className="h-16 w-16 mx-auto text-red-600 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Youth & Sports</h3>
                        <p className="text-slate-600">We empower the next generation through competitive sports tournaments, career counseling sessions, freshers' meets, and workshops on vital soft skills.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}