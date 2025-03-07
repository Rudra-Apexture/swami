'use client';
import Image from 'next/image';

export default function RishikeshInfo() {
    return (
        <section className="bg-gray-50 py-5">
            <div className="container mx-auto px-4 ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 rounded-2xl overflow-hidden shadow-md border border-slate-300/50">

                    {/* Image Section */}
                    <div className="relative group overflow-hidden shadow-lg">
                        <Image
                            src="/assets/image/RishikeshRiver.jpg" // Replace with your actual image
                            alt="Rishikesh Landscape"
                            width={700}  //Adjust as needed
                            height={500} //Adjust as needed
                            className="object-cover w-full h-full rounded-none transform transition-transform duration-500 group-hover:scale-110"
                            style={{ objectFit: "cover", width: "100%", height: "100%" }}
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-500"></div>

                        <div className="absolute bottom-5 left-5 text-white">
                            <h3 className="lg:text-2xl text-xl  font-semibold">The Holy Land of Rishikesh</h3>
                            <p className="text-sm opacity-80">A gateway to the Himalayas and a spiritual paradise</p>
                        </div>

                    </div>

                    {/* Text Section */}
                    <div className="bg-white p-4 pb-5 flex flex-col justify-center">
                        <h2 className="lg:text-3xl/10 text-xl font-medium text-prime mb-4 capitalize">
                            Rishikesh is known as the <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">spiritual center of Uttarakhand</span>
                        </h2>

                        <p className="text-gray-700 leading-normal text-sm md:text-lg">
                            Rishikesh, known as the spiritual hub of Uttarakhand, sits gracefully on the
                            banks of the sacred Ma Ganga, drawing millions of seekers from across the
                            globe in search of divine enlightenment. The revered river, stretching from the
                            Himalayan peaks to the Indian plains, embodies purity and spirituality. The
                            majestic Himalayas, adorning the northern landscape of India, serve as a
                            breathtaking testament to the splendor of nature. These towering peaks, lush
                            valleys, and diverse flora and fauna have enchanted travelers, adventurers,
                            and spiritual aspirants for centuries.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

