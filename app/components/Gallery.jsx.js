import Image from 'next/image';

const galleryImages = [
    { src: 'https://i.ibb.co/bF9gPzV/asob-event-crowd.jpg', alt: 'Gallery Image 1' },
    { src: 'https://i.ibb.co/P9t1K8T/asob-about-us.jpg', alt: 'Gallery Image 2' },
    { src: 'https://i.ibb.co/3WfK4DT/durga-puja.jpg', alt: 'Gallery Image 3' },
    { src: 'https://i.ibb.co/zXz6yWJ/spring-fest.jpg', alt: 'Gallery Image 4' },
    { src: 'https://i.ibb.co/JqjZ8ZG/gallery-5.jpg', alt: 'Gallery Image 5' },
    { src: 'https://i.ibb.co/n6z45zN/gallery-6.jpg', alt: 'Gallery Image 6' },
    { src: 'https://i.ibb.co/kHnBfXN/gallery-7.jpg', alt: 'Gallery Image 7' },
    { src: 'https://i.ibb.co/r2M3r6y/gallery-8.jpg', alt: 'Gallery Image 8' },
];

export default function Gallery() {
    return (
        <section id="gallery" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="section-title">Moments & Memories</h2>
                <p className="section-subtitle">A glimpse into the vibrant life of our community events.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {galleryImages.map((image, index) => (
                        <div key={index} className="overflow-hidden rounded-lg shadow-md">
                          <Image src={image.src} alt={image.alt} width={400} height={400} className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}