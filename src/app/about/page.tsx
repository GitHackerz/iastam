import {
    AboutHero,
    OrganizationsList,
    OrganizingCommittee,
} from './_components';

export default function AboutPage() {
    return (
        <div className="bg-background min-h-screen">
            <AboutHero />
            <OrganizationsList />
            <OrganizingCommittee />
        </div>
    );
}
