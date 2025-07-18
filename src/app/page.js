import Hero from '@/components/Hero'; // or './Hero' if same folder
import CardSection from '@/components/CardSection';
import TestimonialSection from '@/components/TestimonialSection';

export default function Home() {



  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-all duration-300 fl">
    <Hero />
    <CardSection />
    <TestimonialSection />
    </div>
  );
}
