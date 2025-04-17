'use client';

import type { Metadata } from 'next';

import {
    VenueSection,
    ScheduleSection,
    KeynoteSpeakers,
    WorkshopsSection,
} from './_components';
import { ProgramsHero } from './_components/ProgramsHero';

export const metadata: Metadata = {
    title: 'Program & Schedule',
    description:
        'Explore IASTAM 5 program including keynote speeches, technical sessions, workshops, and networking events. October 4-6, 2025 at Hotel Royal, Hammamet.',
    openGraph: {
        title: 'Program & Schedule | IASTAM 5',
        description:
            'View the complete schedule of IASTAM 5, featuring keynote speakers, technical sessions, and interactive workshops.',
    },
};

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
