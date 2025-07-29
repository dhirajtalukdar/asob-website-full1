import Image from 'next/image';

const TeamMember = ({ photo, name, title, contact }) => (
    <div>
        <Image src={photo} alt={name} width={128} height={128} className="rounded-full mx-auto mb-4" />
        <h4 className="font-bold text-lg text-slate-800">{name}</h4>
        <p className="text-red-600">{title}</p>
        <p className="text-sm text-slate-500">{contact}</p>
    </div>
);

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title">About ASOB</h2>
        <p className="section-subtitle">A non-political, not-for-profit socio-cultural and youth welfare organization with a legacy of over four decades, guided by the motto of Peace, Progress & Prosperity.</p>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
                <Image src="https://i.ibb.co/P9t1K8T/asob-about-us.jpg" alt="ASOB Team" width={600} height={400} className="rounded-lg shadow-lg" />
            </div>
            <div className="space-y-6 text-slate-700">
                <h3 className="text-2xl font-bold text-slate-800">Our Journey: Over Four Decades of Community</h3>
                <p>The Assam Society of Bangalore (ASOB) was born in 1982 from the vision of a few prominent Assamese residents who sought to create a cultural anchor and a home away from home in a new city. Formally registered as a non-profit, non-political organization in 1999, our society has grown in lockstep with the burgeoning Assamese diaspora in Bangalore.</p>
                <p>From organizing our first Spring Festival in the year 2000 to hosting prestigious events like the Prag Cine Awards, ASOB has evolved from a small gathering into a formidable cultural institution. Our commitment to the community was etched into our history when we assisted the State Home Ministry during the mass exodus incident of 2012, reinforcing our role as a pillar of peace and social harmony. Today, we stand proud as a testament to the resilience and spirit of our people.</p>
            </div>
        </div>

         <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6 text-slate-700 md:order-2">
                <h3 className="text-2xl font-bold text-slate-800">Our Guiding Principles</h3>
                 <p><span className="font-bold text-slate-800">Our Vision:</span> To be a beacon of Assamese culture and a pillar of unwavering support for our community. We aspire to create a vibrant and inclusive 'home away from home' that not only preserves our rich heritage but also fosters cross-cultural understanding within the beautiful, diverse fabric of Bangalore.</p>
                <p><span className="font-bold text-slate-800">Our Mission:</span> As a non-political, not-for-profit socio-cultural organization, our mission is to celebrate, preserve, and promote the unique cultural identity of Assam. We achieve this by organizing authentic cultural festivals, providing a platform for social cohesion and youth welfare, and undertaking meaningful community service initiatives under our guiding motto: **Peace, Progress, and Prosperity.**</p>
            </div>
             <div className="gamosa-border mt-6 md:order-1">
                <h4 className="font-bold text-lg mb-2 text-red-700 text-center">Our Impact in Numbers</h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                    <div><p className="text-3xl font-bold text-slate-800">40+</p><p>Years of Service</p></div>
                    <div><p className="text-3xl font-bold text-slate-800">300K+</p><p>Assamese Diaspora</p></div>
                    <div><p className="text-3xl font-bold text-slate-800">40K+</p><p>Social Followers</p></div>
                    <div><p className="text-3xl font-bold text-slate-800">10K+</p><p>Event Footfall</p></div>
                </div>
            </div>
        </div>
        
        <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">The People Behind ASOB</h3>
            <p className="text-slate-500 max-w-2xl mx-auto mb-12">We are a passionate, volunteer-led organization. Meet the core team dedicated to serving our community.</p>
            <div className="grid md:grid-cols-3 gap-8">
                <TeamMember 
                    photo="https://placehold.co/128x128/EFEFEF/333333?text=SG"
                    name="Samarjeet Ghosh"
                    title="Organizing President, 25th Silver Jubilee Celebrations"
                    contact="+91 9845094517 | samarjeetghosh@gmail.com"
                />
                 <TeamMember 
                    photo="https://placehold.co/128x128/EFEFEF/333333?text=DT"
                    name="Dhiraj Talukdar"
                    title="Organizing Secretary, 25th Silver Jubilee Celebrations"
                    contact="+91 97403 25000 | dhiraj06@gmail.com"
                />
                 <TeamMember 
                    photo="https://placehold.co/128x128/EFEFEF/333333?text=PM"
                    name="Pranjal Medhi"
                    title="President, Assam Society of Bangalore"
                    contact="+91 98450 52192 | pranz.m@gmail.com"
                />
            </div>
        </div>
      </div>
    </section>
  );
}