'use client';
import { Button } from '@/components/ui/button';

export default function Header() {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <a href="#" className="text-xl font-bold text-foreground">
          OringoTrader<span className="text-primary">.info</span>
        </a>
        <Button onClick={scrollToPricing} size="sm">
          Join Now
        </Button>
      </div>
    </header>
  );
}
