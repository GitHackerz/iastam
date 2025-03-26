import { Mail, MapPin, Phone } from 'lucide-react';

export function ContactInfo() {
    return (
        <div className="space-y-6">
            <h3 className="text-2xl font-semibold tracking-tight">
                Get in Touch
            </h3>
            <p className="text-muted-foreground">
                Have questions? We&apos;d love to hear from you. Send us a
                message and we&apos;ll respond as soon as possible.
            </p>
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>
                        L&apos;Orient Palace, Boulevard 14 Janvier, Sousse 4000,
                        Tunisia
                    </span>
                </div>
                <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a
                        href="mailto:contact@iastam.ieee.tn"
                        className="hover:text-primary"
                    >
                        contact@iastam.ieee.tn
                    </a>
                </div>
                <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <a href="tel:+21670685454" className="hover:text-primary">
                        +216 70 685 454
                    </a>
                </div>
            </div>
        </div>
    );
}
