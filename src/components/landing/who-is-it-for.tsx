import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { XCircle, HelpCircle, UserX } from 'lucide-react';

const painPoints = [
  {
    icon: <XCircle className="size-8 text-destructive" />,
    title: 'Consistent Losses',
    description: 'Tired of seeing red in your portfolio? We help you understand why you\'re losing and how to stop.',
  },
  {
    icon: <HelpCircle className="size-8 text-primary" />,
    title: 'Market Confusion',
    description: 'Feeling overwhelmed by charts, news, and indicators? We provide clarity and focus on what truly matters.',
  },
  {
    icon: <UserX className="size-8 text-secondary" />,
    title: 'Lack of Mentorship',
    description: 'Trading alone can be tough. Get the guidance and support you need from experienced traders.',
  },
];

export default function WhoIsItFor() {
  return (
    <section id="who-is-it-for" className="py-12 md:py-24 bg-card">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl font-headline">
            Is This You?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our platform is designed specifically for beginners and traders who are struggling to find consistent profitability. If you're facing these challenges, you're in the right place.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {painPoints.map((point) => (
            <Card key={point.title} className="flex flex-col items-center text-center shadow-md transition-shadow hover:shadow-lg">
              <CardHeader className="items-center">
                {point.icon}
                <CardTitle>{point.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
