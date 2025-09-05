'use client';

import { MapPin, Mail, Phone, Calendar } from 'lucide-react';
import { eventInfo } from '@/constants/event';

export const ContactInfo = () => {
    return (
        <div className="space-y-6">
            <div className="flex items-start gap-4 group hover:bg-primary/5 p-3 rounded-lg transition-colors">
                <div className="p-3 rounded-full bg-primary/10 text-primary mt-0.5">
                    <MapPin className="w-5 h-5" />
                </div>
                <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-muted-foreground mt-1">
                        {eventInfo.venue.address}
                    </p>
                </div>
            </div>

            <div className="flex items-start gap-4 group hover:bg-primary/5 p-3 rounded-lg transition-colors">
                <div className="p-3 rounded-full bg-primary/10 text-primary mt-0.5">
                    <Calendar className="w-5 h-5" />
                </div>
                <div>
                    <h3 className="font-semibold">Date & Time</h3>
                    <p className="text-muted-foreground mt-1">
                        {eventInfo.date}
                    </p>
                </div>
            </div>

            <div className="flex items-start gap-4 group hover:bg-primary/5 p-3 rounded-lg transition-colors">
                <div className="p-3 rounded-full bg-primary/10 text-primary mt-0.5">
                    <Mail className="w-5 h-5" />
                </div>
                <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground mt-1">
                        {eventInfo.contact.chair.email}
                    </p>
                </div>
            </div>

            <div className="flex items-start gap-4 group hover:bg-primary/5 p-3 rounded-lg transition-colors">
                <div className="p-3 rounded-full bg-primary/10 text-primary mt-0.5">
                    <Phone className="w-5 h-5" />
                </div>
                <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground mt-1">
                        {eventInfo.contact.chair.phone}
                    </p>
                </div>
            </div>
        </div>
    );
};
