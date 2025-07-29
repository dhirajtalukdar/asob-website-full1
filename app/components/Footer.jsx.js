import { Facebook, Instagram, Youtube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-slate-800 text-slate-300 py-12">
            <div className="container mx-auto px-6 text-center">
                <Image src="https://i.ibb.co/68vwmx4/asob-logo.png" alt="ASOB Logo" width={64} height={64} className="mx-auto mb-4" />
                <p className="mb-4 font-semibold">Assam Society of Bangalore</p>
                <div className="flex justify-center space-x-6 mb-8">
                    <Link href="#" className="hover:text-white"><Facebook /></Link>
                    <Link href="#" className="hover:text-white"><Instagram /></Link>
                    <Link href="#" className="hover:text-white"><Youtube /></Link>
                </div>
                <p>&copy; {new Date().getFullYear()} Assam Society of Bangalore. All Rights Reserved.</p>
            </div>
        </footer>
    );
}