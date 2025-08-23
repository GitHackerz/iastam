import AboutSection from '@/app/(home)/_components/sections/about';
import HeroSection from '@/app/(home)/_components/sections/hero';
import HostSection from '@/app/(home)/_components/sections/host';
import PreviousEditions from '@/app/(home)/_components/sections/previous-editions';
import PartnersSection from './_components/sections/partners';

export default function Home() {
    return (
        <main className="min-h-screen">
            <HeroSection />
            <AboutSection />
            {/* <TimeLeftSection /> */}
            <HostSection />
            {/* <SpeakersSection /> */}
            <PreviousEditions />
            <PartnersSection />
            {/* <SponsorsSection /> */}
            {/* <LocationSection /> */}
        </main>
    );
}
