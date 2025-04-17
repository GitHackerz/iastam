'use client';

import { MapPin, Mail, Phone, Calendar } from 'lucide-react';

export const ContactInfo = () => {
    return (
        <div className="space-y-6">
            <div className="flex items-start gap-4 group hover:bg-primary/5 p-3 rounded-lg transition-colors">
                <div className="p-3 rounded-full bg-primary/10 text-primary mt-0.5">
                    <MapPin className="w-5 h-5" />
                </div>
                <div>
                    <h4 className="font-medium mb-1">Venue Address</h4>
                    <p className="text-muted-foreground">
                        Hotel Royal
                        <br />
                        9GHX+Q8H، Yasmine Hammamet B.P 237
                        <br />
                        8050, Yasmine Hammamet
                        <br />
                        Tunisia
                    </p>
                </div>
            </div>

            <div className="flex items-start gap-4 group hover:bg-primary/5 p-3 rounded-lg transition-colors">
                <div className="p-3 rounded-full bg-primary/10 text-primary mt-0.5">
                    <Calendar className="w-5 h-5" />
                </div>
                <div>
                    <h4 className="font-medium mb-1">Event Dates</h4>
                    <p className="text-muted-foreground">October 4-6, 2025</p>
                </div>
            </div>

            <div className="flex items-start gap-4 group hover:bg-primary/5 p-3 rounded-lg transition-colors">
                <div className="p-3 rounded-full bg-primary/10 text-primary mt-0.5">
                    <Mail className="w-5 h-5" />
                </div>
                <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-muted-foreground">
                        landolsi.selim@ieee.org
                    </p>
                </div>
            </div>

            <div className="flex items-start gap-4 group hover:bg-primary/5 p-3 rounded-lg transition-colors">
                <div className="p-3 rounded-full bg-primary/10 text-primary mt-0.5">
                    <Phone className="w-5 h-5" />
                </div>
                <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-muted-foreground">+216 55 176 296</p>
                </div>
            </div>
        </div>
    );
};
