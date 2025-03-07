// src/app/(public)/page.js
import HeroSection from './components/Hero-section';
import Serving from './components/Serving';
import Wellness from './components/Wellness';
import Ashram from './components/Ashram';
import Slider from './components/Slider';
import Review from './components/Review';
import Ganga from './components/Ganga';
import Roomsection from './components/Roomsection';


// Home_Pages
export default function Home() {


  return (
    <>
      <HeroSection />
      <Serving />
      <Roomsection />
      <Wellness />
      <Ashram />
      <Slider />
      <Review />
      <Ganga />
    </>
  );
}