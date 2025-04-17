import AboutSection from '@/app/(home)/_components/sections/about';
import HeroSection from '@/app/(home)/_components/sections/hero';
import HostSection from '@/app/(home)/_components/sections/host';
import LocationSection from '@/app/(home)/_components/sections/location';
import PartnersSection from '@/app/(home)/_components/sections/partners';
import PreviousEditions from '@/app/(home)/_components/sections/previous-editions';
import SpeakersSection from '@/app/(home)/_components/sections/speakers';
import SponsorsSection from '@/app/(home)/_components/sections/sponsors';
import TimeLeftSection from '@/app/(home)/_components/sections/time-left';

export default function Home() {
    return (
        <main className="min-h-screen">
            <HeroSection />
            <AboutSection />
            <TimeLeftSection />
            <HostSection />
            <SpeakersSection />
            <PreviousEditions />
            <PartnersSection />
            <SponsorsSection />
            <LocationSection />
        </main>
    );
}
