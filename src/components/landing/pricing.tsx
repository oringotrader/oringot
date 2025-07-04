'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const includedFeatures = [
    'Educational Videos',
    'Daily Zoom Counseling',
    'PDF Algo Strategies',
    'WhatsApp Group Access',
    'Private Community App',
    'Algo Trading Setup Guidance'
];

export default function Pricing() {
    const handlePayment = () => {
        // Placeholder for payment gateway integration
        alert('Redirecting to payment gateway...');
    }

  return (
    <section id="pricing" className="py-12 md:py-24 bg-card">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl font-headline">
            Simple, All-Inclusive Pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            One payment. Lifetime access. Everything you need to become a profitable trader.
          </p>
        </div>
        <div className="mt-12 flex justify-center">
          <Card className="w-full max-w-md shadow-2xl border-2 border-primary">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Launch Offer</CardTitle>
              <CardDescription>No tiers, no login needed. Just pure value.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <div className="mb-6">
                <span className="text-5xl font-bold text-accent">₹499</span>
                <span className="text-xl text-muted-foreground">/one-time</span>
              </div>
              <ul className="w-full space-y-2 text-sm">
                {includedFeatures.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                        <Check className="size-4 text-green-500" />
                        <span className="text-muted-foreground">{feature}</span>
                    </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button onClick={handlePayment} className="w-full" size="lg" variant="accent">
                Get All-Inclusive Access
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
