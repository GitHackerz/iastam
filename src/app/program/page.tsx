import {
    VenueSection,
    ScheduleSection,
    KeynoteSpeakers,
    WorkshopsSection,
    ProgramsHero,
} from './_components';

export default function ProgramPage() {
    return (
        <div className="bg-background min-h-screen">
            <ProgramsHero />
            <VenueSection />
            <ScheduleSection />
            <KeynoteSpeakers />
            <WorkshopsSection />
        </div>
    );
}
