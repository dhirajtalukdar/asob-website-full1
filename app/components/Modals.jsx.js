'use client';
import { useState, useEffect } from 'react';
import { X, Gift, Siren, UserPlus } from 'lucide-react';
import Image from 'next/image';

const Modal = ({ id, children, activeModal, closeModal }) => {
    if (activeModal !== id) return null;

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50" onClick={closeModal}>
            <div className="bg-white rounded-lg p-8 max-w-lg w-full relative" onClick={(e) => e.stopPropagation()}>
                <button onClick={closeModal} className="absolute top-4 right-4 text-slate-500 hover:text-slate-800"><X /></button>
                {children}
            </div>
        </div>
    );
};

export default function Modals() {
    const [activeModal, setActiveModal] = useState(null);
    const closeModal = () => setActiveModal(null);

    useEffect(() => {
        const openModalHandler = (event) => setActiveModal(event.detail);
        const handleEsc = (event) => {
            if (event.key === 'Escape') closeModal();
        };

        window.addEventListener('openModal', openModalHandler);
        window.addEventListener('keydown', handleEsc);
        
        return () => {
            window.removeEventListener('openModal', openModalHandler);
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);
    
    const openModal = (modalId) => {
      window.dispatchEvent(new CustomEvent('openModal', { detail: modalId }));
    }

    return (
        <>
            <button onClick={() => openModal('sos-modal')} className="fixed bottom-5 right-5 bg-red-600 text-white rounded-full p-4 shadow-lg z-40 animate-pulse">
                <Siren className="h-8 w-8" />
                <span className="sr-only">SOS Emergency</span>
            </button>

            <Modal id="membership-modal" activeModal={activeModal} closeModal={closeModal}>
                <UserPlus className="h-12 w-12 mx-auto text-red-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-center">Membership Application</h3>
                <form>
                    <div className="mb-4"><label htmlFor="m-name" className="block text-slate-700 font-semibold mb-2">Full Name</label><input type="text" id="m-name" className="w-full p-3 border border-slate-300 rounded-lg" required /></div>
                    <div className="mb-4"><label htmlFor="m-email" className="block text-slate-700 font-semibold mb-2">Email Address</label><input type="email" id="m-email" className="w-full p-3 border border-slate-300 rounded-lg" required /></div>
                    <div className="mb-4"><label htmlFor="m-phone" className="block text-slate-700 font-semibold mb-2">Phone Number</label><input type="tel" id="m-phone" className="w-full p-3 border border-slate-300 rounded-lg" required /></div>
                    <button type="submit" className="btn-primary w-full">Submit Application</button>
                </form>
            </Modal>

            <Modal id="donation-modal" activeModal={activeModal} closeModal={closeModal}>
                <div className="text-center">
                    <Gift className="h-16 w-16 mx-auto text-red-600 mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Support Our Cause</h3>
                    <p className="text-slate-600 mb-6">Your generous donation helps us fund our social welfare programs. All donations are tax-deductible under 80G certification.</p>
                    <p className="font-bold mb-2">Please scan the QR code to donate:</p>
                    <Image src="https://i.ibb.co/9g0P7yY/placeholder-qr-code.png" alt="Donation QR Code" width={192} height={192} className="mx-auto mb-4 border p-2 rounded-lg" />
                    <button className="btn-primary w-full" onClick={closeModal}>Thank You!</button>
                </div>
            </Modal>

            <Modal id="sos-modal" activeModal={activeModal} closeModal={closeModal}>
                 <div className="text-center">
                    <Siren className="h-16 w-16 mx-auto text-red-600 mb-4 animate-pulse" />
                    <h3 className="text-2xl font-bold mb-4">Emergency Helpline</h3>
                    <p className="text-slate-600 mb-6">In case of an emergency, please contact us immediately on the numbers below.</p>
                    <div className="space-y-2">
                        <a href="tel:+919740325000" className="block text-2xl font-bold text-slate-800 hover:text-red-600">Dhiraj Talukdar: +91 97403 25000</a>
                        <a href="tel:+919845052192" className="block text-2xl font-bold text-slate-800 hover:text-red-600">Pranjal Medhi: +91 98450 52192</a>
                    </div>
                 </div>
            </Modal>
        </>
    );
}