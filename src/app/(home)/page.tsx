import AboutSection from '@/app/(home)/_components/sections/about';
import HeroSection from '@/app/(home)/_components/sections/hero';
import HostSection from '@/app/(home)/_components/sections/host';
import PreviousEditions from '@/app/(home)/_components/sections/previous-editions';
import PartnersSection from './_components/sections/partners';
import LocationSection from './_components/sections/location';
import SponsorsSection from './_components/sections/sponsors';
import TechChallengeSection from './_components/sections/tech-challenge';
import StartupsForumSection from './_components/sections/startups-forum';

export default function Home() {
    return (
        <main className="min-h-screen">
            <HeroSection />
            <AboutSection />
            <TechChallengeSection />
            <StartupsForumSection />
            {/* <TimeLeftSection /> */}
            <HostSection />
            {/* <SpeakersSection /> */}
            <PreviousEditions />
            <PartnersSection />
            <SponsorsSection />
            <LocationSection />
        </main>
    );
}
