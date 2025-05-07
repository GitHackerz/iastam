import { ReactNode } from 'react';
import { Building, UsersRound, Wifi, Coffee } from 'lucide-react';

export interface VenueFeature {
    icon: ReactNode;
    title: string;
    description: string;
}

export const venueFeatures: VenueFeature[] = [
    {
        icon: <Building className="h-5 w-5" />,
        title: 'Luxury Facilities',
        description:
            'Elegant conference rooms with state-of-the-art equipment and services',
    },
    {
        icon: <UsersRound className="h-5 w-5" />,
        title: 'Capacity',
        description:
            'Main conference hall seats 600 with additional breakout spaces',
    },
    {
        icon: <Wifi className="h-5 w-5" />,
        title: 'Connectivity',
        description: 'High-speed WiFi throughout the venue for all attendees',
    },
    {
        icon: <Coffee className="h-5 w-5" />,
        title: 'Amenities',
        description:
            'Luxury accommodations, dining, spa, and Mediterranean beachfront',
    },
];

export const venueInfo = {
    description:
        "Located on the stunning Mediterranean coast of Hammamet, Hotel Royal combines luxury amenities with sophisticated conference facilities. The venue provides an inspiring and comfortable setting for IASTAM's sessions, networking, and social events.",
    mapUrl: 'https://maps.google.com',
    googleMapsEmbed:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3212.1755169150883!2d10.545418075467596!3d36.38074487236963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd63eb6cbfcdcb%3A0x879a5c87a51db003!2sLe%20Royal%20Hotels%20and%20Resorts%20-%20Hammamet!5e0!3m2!1sen!2stn!4v1744906735507!5m2!1sen!2stn',
};
