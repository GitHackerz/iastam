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
        'The venue for IASTAM 5 will be announced soon. We are committed to providing a location that combines modern conference facilities with comfortable amenities for all attendees.',
    mapUrl: '',
    googleMapsEmbed: '',
};
