'use client';

import type { Metadata } from 'next';
import { CurrencySection } from './_components/CurrencySection';
import { HeroSection } from './_components/HeroSection';
import { IntroSection } from './_components/IntroSection';
import { RegionsSection } from './_components/RegionsSection';

export const metadata: Metadata = {
    title: 'Discover Tunisia',
    description:
        'Explore Tunisia, the host country of IASTAM 5. Learn about its rich culture, beautiful destinations, and practical information for conference attendees.',
    openGraph: {
        title: 'Discover Tunisia | IASTAM 5',
        description:
            'Plan your visit to Tunisia for IASTAM 5. Find information about accommodations, transportation, tourism, and local attractions.',
    },
};

export default function TunisiaPage() {
    return (
        <main className="bg-background min-h-screen">
            <HeroSection />
            <IntroSection />
            <RegionsSection />
            <CurrencySection />
        </main>
    );
}
