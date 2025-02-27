import AboutSection from '@/components/sections/about';
import HeroSection from '@/components/sections/hero';
import HostSection from '@/components/sections/host';
import LocationSection from '@/components/sections/location';
import PartnersSection from '@/components/sections/partners';
import PreviousEditions from '@/components/sections/previous-editions';
import SpeakersSection from '@/components/sections/speakers';
import SponsorsSection from '@/components/sections/sponsors';
import TimeLeftSection from '@/components/sections/time-left';

export default function Home() {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <TimeLeftSection />
            <HostSection />
            <SpeakersSection />
            <PreviousEditions />
            <PartnersSection />
            <SponsorsSection />
            <LocationSection />
        </div>
    );
}
