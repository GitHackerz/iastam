import {
    AboutHero,
    OrganizationsList,
    OrganizingCommittee,
    TechChallengeTimeline,
} from './_components';

export default function AboutPage() {
    return (
        <div className="bg-background min-h-screen">
            <AboutHero />
            <TechChallengeTimeline />
            <OrganizationsList />
            <OrganizingCommittee />
        </div>
    );
}
