import { AboutHero } from './_components/AboutHero';
import TechChallengeTimeline from './_components/TechChallengeTimeline';

export default function TechChallengePage() {
    return (
        <div className="bg-background min-h-screen">
            <AboutHero />
            <TechChallengeTimeline />
            {/* Spec Book PDF Link */}
            <div className="container mx-auto max-w-4xl py-10 px-4">
                <div className="mb-8 flex justify-center">
                    <a
                        href="https://drive.google.com/file/d/1tUXOzqZNjcSz0BTLG-CoCrDhIwdS4hrI/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-primary/80 transition"
                    >
                        Specification Book (PDF)
                    </a>
                </div>
            </div>
        </div>
    );
}
