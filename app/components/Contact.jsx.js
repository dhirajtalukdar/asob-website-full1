export default function Contact() {
    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="section-title">Contact Us</h2>
                <p className="section-subtitle">Have a question or want to get in touch? We'd love to hear from you.</p>
                <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-slate-700 font-semibold mb-2">Name</label>
                            <input type="text" id="name" className="w-full p-3 border border-slate-300 rounded-lg" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-slate-700 font-semibold mb-2">Email</label>
                            <input type="email" id="email" className="w-full p-3 border border-slate-300 rounded-lg" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-slate-700 font-semibold mb-2">Message</label>
                            <textarea id="message" rows="4" className="w-full p-3 border border-slate-300 rounded-lg"></textarea>
                        </div>
                        <button type="submit" className="btn-primary w-full">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}