import {
    VenueSection,
    ScheduleSection,
    KeynoteSpeakers,
    WorkshopsSection,
} from './_components';
import { ProgramsHero } from './_components/ProgramsHero';

export default function ProgramsPage() {
    return (
        <div className="bg-background min-h-screen ">
            <ProgramsHero />
            <VenueSection />
            <ScheduleSection />
            <KeynoteSpeakers />
            <WorkshopsSection />
        </div>
    );
}
