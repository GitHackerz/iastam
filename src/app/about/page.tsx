'use client';

import type { Metadata } from 'next';
import { AboutHero, OrganizationsList } from './_components';

export const metadata: Metadata = {
    title: 'About IASTAM',
    description:
        'Learn about IASTAM 5, the IEEE IAS Tunisia Annual Meeting. Discover our mission, organizing committee, and the organizations working together to advance industrial applications technology.',
    openGraph: {
        title: 'About IASTAM 5',
        description:
            'Learn about the IEEE IAS Tunisia Annual Meeting, a premier conference bringing together industry professionals, academics, and researchers in industrial applications technology.',
    },
};

export default function AboutPage() {
    return (
        <div className="bg-background min-h-screen">
            <AboutHero />
            <OrganizationsList />
        </div>
    );
}
