import {
    VenueSection,
    ScheduleSection,
    KeynoteSpeakers,
    WorkshopsSection,
    PanelDiscussionsSection,
    ProgramsHero,
} from './_components';

export default function ProgramPage() {
    return (
        <div className="bg-background min-h-screen">
            <ProgramsHero />
            {/* Main Program Content */}
            <div className="relative">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />

                <div className="relative z-10 space-y-16 md:space-y-24">
                    <ScheduleSection />

                    {/* Divider */}
                    <div className="container mx-auto px-4">
                        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                    </div>

                    <KeynoteSpeakers />

                    {/* Divider */}
                    <div className="container mx-auto px-4">
                        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                    </div>

                    <WorkshopsSection />

                    {/* Divider */}
                    <div className="container mx-auto px-4">
                        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                    </div>

                    <PanelDiscussionsSection />

                    {/* Divider */}
                    <div className="container mx-auto px-4">
                        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                    </div>

                    <VenueSection />
                </div>
            </div>
        </div>
    );
}
