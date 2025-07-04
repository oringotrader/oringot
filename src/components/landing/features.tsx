import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlayCircle, Users, FileText, Smartphone, Settings } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';

const features = [
  {
    icon: <PlayCircle className="size-10 text-primary" />,
    title: 'Educational Videos',
    description: 'Access a library of pre-recorded videos covering everything from basics to advanced strategies.',
  },
  {
    icon: <Users className="size-10 text-primary" />,
    title: 'Daily Zoom Counseling',
    description: 'Join daily 20-minute Zoom sessions for market analysis, Q&A, and direct mentorship.',
  },
  {
    icon: <FileText className="size-10 text-primary" />,
    title: 'PDF Algo Strategies',
    description: 'Download our library of profitable, back-tested algorithmic trading strategies in PDF format.',
  },
  {
    icon: <WhatsAppIcon className="size-10 text-primary" />,
    title: 'WhatsApp Group Access',
    description: 'Become part of our exclusive WhatsApp group for real-time updates and community discussion.',
  },
  {
    icon: <Smartphone className="size-10 text-primary" />,
    title: 'Private Community App',
    description: 'Connect with fellow traders, share insights, and grow together in our private community app.',
  },
  {
    icon: <Settings className="size-10 text-primary" />,
    title: 'Algo Trading Setup',
    description: 'Receive personalized Zoom guidance to help you set up your own algorithmic trading system.',
  },
];

export default function Features() {
  return (
    <section id="features" className="container py-12 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl font-headline">
          Everything You Need to Succeed
        </h2>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          We provide a comprehensive toolkit to support your trading journey from day one.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="transition-transform hover:scale-105 hover:shadow-lg">
            <CardHeader className="flex flex-col items-center gap-4 text-center md:flex-row md:items-start md:text-left">
              {feature.icon}
              <div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription className="mt-2">{feature.description}</CardDescription>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
