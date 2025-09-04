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
        title: 'Modern Facilities',
        description:
            'Conference venue will be equipped with state-of-the-art facilities',
    },
    {
        icon: <UsersRound className="h-5 w-5" />,
        title: 'Capacity',
        description:
            'Venue will accommodate all attendees comfortably with dedicated spaces for sessions',
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
        "IASTAM 5 will take place at the beautiful Hammamet Garden Resort & Spa, located in the heart of Tunisia's premier tourist destination. This luxury resort offers state-of-the-art conference facilities combined with world-class amenities and Mediterranean beachfront access.",
    mapUrl: 'https://maps.app.goo.gl/924UD32CvhESvPYe9',
    googleMapsEmbed:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3211.3403526309594!2d10.56497127550969!3d36.40095989010357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd61fc0da7e8ef%3A0x585d4ef88350afa8!2sHammamet%20Garden!5e0!3m2!1sen!2stn!4v1756925912432!5m2!1sen!2stn',
};
