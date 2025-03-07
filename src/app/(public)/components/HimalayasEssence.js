'use client';

import Image from 'next/image';

export default function HimalayasEssence() {
    return (
        <section className="bg-gray-50 py-5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 rounded-2xl overflow-hidden shadow-md border border-slate-300/50">

                    <div className="bg-white p-4 pb-5 flex flex-col justify-center">
                        <h2 className="lg:text-3xl/10 text-xl font-medium text-prime mb-4 capitalize">
                            The Spiritual Essences for <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">of the Himalayas</span>
                        </h2>

                        <p className="text-gray-700 leading-relaxed text-sm md:text-lg">
                            As we marvel at their magnificence, let us also commit to preserving and
                            safeguarding these sacred mountains for future generations to cherish.
                            Among these peaks, one valley stands out, stirring a divine trance with its
                            blend of beauty, spirituality, poetry, and ancient Vedic legends stirring a divine trance with its
                            blend of beauty, spirituality, poetry, and ancient Vedic legends. From the
                            mythical penance of Prince Bhagirath to the poetic creations of Adi Shankara,
                            this valley resonates with a timeless aura of reverence and inspiration.
                        </p>

                    </div>

                    {/* Image Section (Right) */}
                    <div className="relative group overflow-hidden shadow-lg">
                        <Image
                            src="/assets/image/Rishikesh-scaled.jpg" // Replace with your actual image
                            alt="Himalayas Landscape"
                            width={700}  //Adjust as needed
                            height={200} //Adjust as needed
                            className="object-cover w-full h-full rounded-none transform transition-transform duration-500 group-hover:scale-110"
                            style={{ objectFit: "cover", width: "100%", height: "100%" }}
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-500"></div>


                        <div className="absolute bottom-5 right-5 text-white">
                            <h3 className="lg:text-2xl text-xl font-semibold">Things to do in Rishikesh</h3>
                            <p className="text-sm opacity-80">Rishikesh is perfect getaway for some spirituality</p>
                        </div>


                    </div>

                </div>
            </div>
        </section>
    );
}