import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';

export default function Contact() {
  return (
    <section id="contact" className="container py-12 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl font-headline">
          Questions? We're Here to Help
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          If you have any questions before joining, feel free to reach out to us.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" variant="outline">
            <a href="mailto:oringotrader.info@gmail.com">
              <Mail className="mr-2 size-5" />
              Email Support
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="https://wa.me/910000000000" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="mr-2 size-5" />
              WhatsApp Support
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
