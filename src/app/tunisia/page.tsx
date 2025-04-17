'use client';

import { CurrencySection } from './_components/CurrencySection';
import { HeroSection } from './_components/HeroSection';
import { IntroSection } from './_components/IntroSection';
import { RegionsSection } from './_components/RegionsSection';

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
