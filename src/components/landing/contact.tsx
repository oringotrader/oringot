import { Button } from '@/components/ui/button';
import { Mail, MapPin } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function Contact() {
  return (
    <section id="contact" className="container py-12 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-4xl font-headline">
          Questions? We're Here to Help
        </h2>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          If you have any questions before joining, feel free to reach out to us.
        </p>
        <TooltipProvider>
          <div className="mt-8 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
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
            <Tooltip>
              <TooltipTrigger asChild>
                <Button asChild size="lg" variant="outline">
                  <a href="https://g.co/kgs/qXmQwp2" target="_blank" rel="noopener noreferrer">
                    <MapPin className="mr-2 size-5" />
                    Visit Office
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Second Floor, 628, B1 Rd, beside Precious Moments, Block B1, Janakpuri, New Delhi, Delhi, 110058</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
}