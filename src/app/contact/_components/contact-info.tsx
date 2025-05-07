'use client';

import { MapPin, Mail, Phone, Calendar } from 'lucide-react';
import {
    hotelName,
    hotelAddress,
    eventDate,
    chairEmail,
    chairPhone,
} from '@/constants/info';

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
                        {hotelName}
                        <br />
                        {hotelAddress.line1}
                        <br />
                        {hotelAddress.postalCode}, {hotelAddress.city}
                        <br />
                        {hotelAddress.country}
                    </p>
                </div>
            </div>

            <div className="flex items-start gap-4 group hover:bg-primary/5 p-3 rounded-lg transition-colors">
                <div className="p-3 rounded-full bg-primary/10 text-primary mt-0.5">
                    <Calendar className="w-5 h-5" />
                </div>
                <div>
                    <h4 className="font-medium mb-1">Event Dates</h4>
                    <p className="text-muted-foreground">{eventDate}</p>
                </div>
            </div>

            <div className="flex items-start gap-4 group hover:bg-primary/5 p-3 rounded-lg transition-colors">
                <div className="p-3 rounded-full bg-primary/10 text-primary mt-0.5">
                    <Mail className="w-5 h-5" />
                </div>
                <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-muted-foreground">{chairEmail}</p>
                </div>
            </div>

            <div className="flex items-start gap-4 group hover:bg-primary/5 p-3 rounded-lg transition-colors">
                <div className="p-3 rounded-full bg-primary/10 text-primary mt-0.5">
                    <Phone className="w-5 h-5" />
                </div>
                <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-muted-foreground">{chairPhone}</p>
                </div>
            </div>
        </div>
    );
};
