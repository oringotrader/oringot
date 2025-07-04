'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Hero() {
    const scrollToPricing = () => {
        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <section id="hero" className="container grid items-center gap-8 py-16 md:grid-cols-2 md:py-24">
      <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl font-headline">
          Turn Your Trading Losses into Profits
        </h1>
        <p className="text-base text-muted-foreground md:text-xl">
          Learn Stock & Crypto Trading | Join a Community | Get Mentorship & Strategies That Work
        </p>
        <Button onClick={scrollToPricing} size="lg" variant="accent" className="mt-4 w-full sm:w-auto">
          Join Now – ₹4,999 Launch Offer
        </Button>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="/hero-image.png"
          alt="Luxury watch and money representing trading success"
          width={600}
          height={400}
          className="h-auto w-full rounded-xl shadow-2xl"
          data-ai-hint="finance watch"
        />
      </div>
    </section>
  );
}
