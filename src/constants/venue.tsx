import { ReactNode } from 'react';
import { Building2, Users, Wifi, Waves, Car, Utensils } from 'lucide-react';

export interface VenueFeature {
    icon: ReactNode;
    title: string;
    description: string;
    highlight?: boolean;
}

export const venueFeatures: VenueFeature[] = [
    {
        icon: <Building2 className="h-5 w-5" />,
        title: 'Premium Conference Halls',
        description:
            'State-of-the-art auditoriums with cutting-edge AV technology',
        highlight: true,
    },
    {
        icon: <Users className="h-5 w-5" />,
        title: '500+ Attendee Capacity',
        description:
            'Spacious venues with multiple breakout rooms and networking areas',
        highlight: true,
    },
    {
        icon: <Wifi className="h-5 w-5" />,
        title: 'High-Speed Connectivity',
        description: 'Enterprise-grade WiFi and live streaming capabilities',
    },
    {
        icon: <Waves className="h-5 w-5" />,
        title: 'Mediterranean Beachfront',
        description: 'Direct beach access with stunning sea views',
    },
    {
        icon: <Utensils className="h-5 w-5" />,
        title: 'Gourmet Dining',
        description:
            'Multiple restaurants with international and Tunisian cuisine',
    },
    {
        icon: <Car className="h-5 w-5" />,
        title: 'Convenient Access',
        description: '45 minutes from Tunis airport with shuttle service',
    },
];

export const venueInfo = {
    name: 'Hammamet Garden Resort & Spa',
    description:
        'Experience IASTAM 5.0 at the prestigious Hammamet Garden Resort & Spa, a luxury 4-star destination that perfectly blends professional conference facilities with Mediterranean elegance.',
    address: 'Zone Touristique, 8050 Hammamet, Tunisia',
    date: 'October 3-5, 2025',
    mapUrl: 'https://maps.app.goo.gl/924UD32CvhESvPYe9',
    googleMapsEmbed:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3211.3403526309594!2d10.56497127550969!3d36.40095989010357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd61fc0da7e8ef%3A0x585d4ef88350afa8!2sHammamet%20Garden!5e0!3m2!1sen!2stn!4v1756925912432!5m2!1sen!2stn',
    rating: 4.0,
    reviews: 2847,
};
