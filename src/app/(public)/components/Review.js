'use client';
import Image from 'next/image';
import { FaStar, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const reviews = [
  {
    id: 1,
    quote: "I have traveled all over the world and stayed in amazing places, but this is indeed in a category of its own. The tranquility and spiritual atmosphere are unmatched.",
    rating: 5,
    author: "Saurav Ranakoti",
    image: "/assets/image/whitemen.jpg", // Replace with actual path
  },
  {
    id: 2,
    quote: "An absolutely incredible experience! The service was impeccable and the surroundings breathtaking.  I felt a sense of peace I've never experienced before.",
    rating: 4,
    author: "Padmanabha Swamy",
    image: "/assets/image/swami.jpg",// Replace with actual path
  },
  {
    id: 3,
    quote: "A truly spiritual place that exceeded all expectations. I highly recommend this ashram to anyone seeking peace and rejuvenation.  The food was also amazing!",
    rating: 5,
    author: "Saurav Ranakoti",
    image: "/assets/image/shavrav.jpg", // Replace with actual path
  },
];

const ReviewCard = ({ review }) => {
  return (
    <div className="relative p-6 rounded-2xl shadow border borde-gray-300/50 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200">
      {/* Quote Icon */}
      <div className="absolute top-4 right-4 text-gray-400 dark:text-gray-600">
        <FaQuoteRight size={16} className='text-main/50' />
      </div>

      {/* Author and Image */}
      <div className="flex items-start space-x-4 mb-4">
        <div className="relative w-14 h-14 rounded-full overflow-hidden">
          <Image
            src={review.image}
            alt={review.author}
            width={350}
            height={150}
            style={{ objectFit: 'cover' }}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <p className="font-semibold text-lg text-prime">{review.author}</p>
          <div className="flex space-x-0.5 text-sm text-main">
            {[...Array(review.rating)].map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Quote Text */}
      <p className="text-gray-700 text-lg dark:text-gray-300 leading-relaxed">
        {review.quote}
      </p>

      {/* Subtle Background Element (Optional) */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-50 dark:from-gray-700 to-transparent opacity-20 rounded-b-2xl"></div>
    </div>
  );
};

const TestimonialList = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h1 className="md:text-4xl text-3xl font-medium text-center mb-10 text-gray-900 dark:text-white">
          Guest <span className='bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent'>
            Reviews
          </span>
        </h1>

        <div className="grid gap-6 md:grid-cols-3 grid-cols-1">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialList;
