import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import WhoIsItFor from '@/components/landing/who-is-it-for';
import Features from '@/components/landing/features';
import HowItWorks from '@/components/landing/how-it-works';
import Pricing from '@/components/landing/pricing';
import Contact from '@/components/landing/contact';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="bg-background">
      <Header />
      <Hero />
      <WhoIsItFor />
      <Features />
      <HowItWorks />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
