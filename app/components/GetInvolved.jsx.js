'use client';
import { UserPlus, Gift, Download } from 'lucide-react';

export default function GetInvolved() {
    const openModal = (modalId) => {
        window.dispatchEvent(new CustomEvent('openModal', { detail: modalId }));
    }
    
    return (
        <section id="get-involved" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="section-title">Get Involved</h2>
                <p className="section-subtitle">Join us in our mission to celebrate culture and serve the community. There are many ways you can contribute.</p>
                <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
                    <div className="p-8 bg-slate-50 rounded-lg">
                        <UserPlus className="h-12 w-12 mx-auto text-red-600 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Become a Member</h3>
                        <p className="text-slate-600 mb-4">Join our family and get exclusive access to events and initiatives.</p>
                        <button onClick={() => openModal('membership-modal')} className="btn-primary">Apply Now</button>
                    </div>
                    <div className="p-8 bg-slate-50 rounded-lg">
                        <Gift className="h-12 w-12 mx-auto text-red-600 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Donate</h3>
                        <p className="text-slate-600 mb-4">Support our welfare programs. Donations are tax-deductible under 80G.</p>
                        <button onClick={() => openModal('donation-modal')} className="btn-primary">Donate Now</button>
                    </div>
                    <div className="p-8 bg-slate-50 rounded-lg">
                        <Download className="h-12 w-12 mx-auto text-red-600 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Become a Sponsor</h3>
                        <p className="text-slate-600 mb-4">Align your brand with our respected cultural events and gain visibility.</p>
                        <a href="#" className="btn-primary">View Proposal</a>
                    </div>
                </div>
            </div>
        </section>
    );
}