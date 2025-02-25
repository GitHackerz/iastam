import AboutSection from '@/components/sections/about';
import HeroSection from '@/components/sections/hero';
import TimeLeftSection from '@/components/sections/time-left';

export default function Home() {
    return (
        <div className="">
            <HeroSection />
            <AboutSection />
            <TimeLeftSection />
        </div>
    );
}
