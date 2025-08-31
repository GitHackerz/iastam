import { AboutHero } from './_components/AboutHero';
import TechChallengeTimeline from './_components/TechChallengeTimeline';

export default function TechChallengePage() {
    return (
        <div className="bg-background min-h-screen">
            <AboutHero />
            <TechChallengeTimeline />
        </div>
    );
}
