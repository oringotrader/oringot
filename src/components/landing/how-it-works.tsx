import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const steps = [
  {
    step: 1,
    title: 'Join the Program',
    description: 'Make a one-time payment to get full, lifetime access. No hidden fees, no subscriptions.',
  },
  {
    step: 2,
    title: 'Get Instant Access',
    description: 'Instantly receive your welcome email with links to WhatsApp, PDFs, and the Zoom schedule.',
  },
  {
    step: 3,
    title: 'Start Learning',
    description: 'Dive into the content, join the community, and start your journey to profitable trading.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 md:py-24 bg-card">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl font-headline">
            Get Started in 3 Simple Steps
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We've made it incredibly easy to join and begin transforming your trading results.
          </p>
        </div>
        <div className="relative mt-12">
            <div className="absolute left-1/2 top-1/2 hidden h-1 w-2/3 -translate-x-1/2 -translate-y-1/2 transform border-t-2 border-dashed border-primary md:block"></div>
            <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
                <Card key={step.step} className="relative z-10 text-center">
                <CardHeader>
                    <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    {step.step}
                    </div>
                </CardHeader>
                <CardContent>
                    <CardTitle className="mb-2">{step.title}</CardTitle>
                    <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
                </Card>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
}
