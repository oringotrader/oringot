'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#who-is-it-for' },
  { name: 'Features', href: '#features' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollTo = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <a href="#hero" onClick={(e) => { e.preventDefault(); handleScrollTo('#hero'); }} className="text-xl font-bold text-foreground">
          OringoTrader<span className="text-primary">.info</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo(link.href);
              }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </a>
          ))}
          <Button onClick={() => handleScrollTo('#pricing')} size="sm">
            Join Now
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="size-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-full max-w-xs flex-col p-6">
              <a href="#hero" onClick={(e) => { e.preventDefault(); handleScrollTo('#hero'); }} className="text-xl font-bold text-foreground">
                  OringoTrader<span className="text-primary">.info</span>
              </a>
              <nav className="mt-12 flex flex-1 flex-col gap-8">
                  {navLinks.map((link) => (
                      <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                          e.preventDefault();
                          handleScrollTo(link.href);
                      }}
                      className="text-xl font-medium text-foreground"
                      >
                      {link.name}
                      </a>
                  ))}
              </nav>
              <Button onClick={() => handleScrollTo('#pricing')} size="lg" className="w-full">
                  Join Now
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
