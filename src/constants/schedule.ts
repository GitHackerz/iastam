export interface ScheduleEvent {
    time: string;
    title: string;
    description: string;
    type?:
        | 'workshop'
        | 'panel'
        | 'ceremony'
        | 'break'
        | 'technical'
        | 'networking'
        | 'social';
    speaker?: string;
    location?: string;
}

export interface DailySchedule {
    day1: ScheduleEvent[];
    day2: ScheduleEvent[];
    day3: ScheduleEvent[];
}

export const schedule: DailySchedule = {
    day1: [
        {
            time: '8:00 - 13:30',
            title: 'Check in, Registration',
            description:
                'Participants check in and receive event materials. Posters setup',
            type: 'ceremony',
        },
        {
            time: '14:00 - 15:25',
            title: 'Opening Ceremony',
            description:
                'Opening program with welcome remarks, IEEE leadership keynotes, and a cultural interlude.',
            type: 'ceremony',
        },
        {
            time: '15:25 - 16:05',
            title: 'Keynote & CMD Highlights',
            description: 'IAS Keynote By Mr.Srikanth - IAS CMD Chair',
            type: 'ceremony',
            speaker: 'Mr. Srikanth - IAS CMD Chair',
        },
        {
            time: '16:05 - 17:00',
            title: 'Pause',
            description: 'Break time',
            type: 'break',
        },
        {
            time: '17:00 - 19:00',
            title: 'Poster Gallery & Startup Forum',
            description:
                'Participants from various Student Branches will present their posters, while a Startup Forum will take place simultaneously.',
            type: 'networking',
        },
        {
            time: '19:00 - 20:00',
            title: 'Dinner',
            description: 'Evening dinner',
            type: 'break',
        },
        {
            time: '21:30 - 00:00',
            title: 'Networking Games',
            description: 'Networking games and social activities',
            type: 'social',
        },
    ],
    day2: [
        {
            time: '07:00 - 09:00',
            title: 'Breakfast',
            description: 'Breakfast at the venue restaurant.',
            type: 'break',
        },
        {
            time: '08:00 - 12:00',
            title: 'Industrial Visit',
            description:
                'A technical activity where we visit an industry to learn more about it.',
            type: 'technical',
        },
        {
            time: '09:00 - 10:30',
            title: 'Workshop: From Student To Professional',
            description:
                'Transform your journey with IAS — career development and professional insights. (Speaker: Mr. Srikanth Pillai)',
            type: 'workshop',
            speaker: 'Mr. Srikanth Pillai',
        },
        // {
        //     time: '09:00 - 10:30',
        //     title: 'Workshop: Wajih Letaief',
        //     description:
        //         'Interactive workshop led by Wajih Letaief — focused on practical skills and hands-on learning.',
        //     type: 'workshop',
        //     speaker: 'Wajih Letaief',
        // },
        {
            time: '10:30 - 12:00',
            title: 'Panel Discussion: From Idea to Impact',
            description:
                'From Idea to Impact — challenges and success stories from Tunisian startups and entrepreneurs.',
            type: 'panel',
        },
        {
            time: '10:30 - 12:00',
            title: 'Workshop: Emerging Industry Trends',
            description:
                'Digital transformation and XR adoption — industry trends and practical insights. (Speaker: Mr Nehad El-Sherif)',
            type: 'workshop',
            speaker: 'Mr Nehad El-Sherif',
        },
        {
            time: '12:00 - 14:00',
            title: 'Networking Lunch',
            description: 'Networking lunch with participants and guests.',
            type: 'break',
        },
        {
            time: '14:00 - 16:30',
            title: 'Pitch Technical Challenge',
            description:
                'Participants who participate in technical challenge need to pitch their ideas.',
            type: 'technical',
        },
        {
            time: '15:30 - 16:30',
            title: 'Round Table Sessions',
            description:
                'Dialogues in Motion: From Knowledge to Experience (By moving from table to another, participants will explore every theme in depth)',
            type: 'networking',
        },
        {
            time: '16:30 - 17:00',
            title: 'Networking Café',
            description: 'Coffee break and networking opportunities.',
            type: 'break',
        },
        {
            time: '17:00 - 20:00',
            title: 'Pitch Non-Technical Challenge',
            description:
                'Different Student Branches with an IAS chapter are invited to present and submit proposals to host the next edition of IASTAM.',
            type: 'technical',
        },
        {
            time: '20:00 - 21:00',
            title: 'Dinner',
            description: 'Evening dinner.',
            type: 'break',
        },
        {
            time: '21:00 - 00:00',
            title: 'Party',
            description: 'Evening party with music and entertainment.',
            type: 'social',
        },
    ],
    day3: [
        {
            time: '07:00 - 09:00',
            title: 'Breakfast',
            description: 'Breakfast at the venue restaurant.',
            type: 'break',
        },
        {
            time: '09:00 - 12:00',
            title: 'Closing Ceremony',
            description:
                'Closing ceremony with awards, announcements, and final remarks.',
            type: 'ceremony',
        },
        {
            time: '12:00 - 14:00',
            title: 'Lunch & Checkout',
            description: 'Final lunch and hotel checkout.',
            type: 'break',
        },
    ],
};

export const scheduleDateLabels = {
    day1: 'Day 1 - October 3, 2025',
    day2: 'Day 2 - October 4, 2025',
    day3: 'Day 3 - October 5, 2025',
};

export const dayLabels = {
    day1: {
        short: 'Oct 3',
        label: 'Day 1',
    },
    day2: {
        short: 'Oct 4',
        label: 'Day 2',
    },
    day3: {
        short: 'Oct 5',
        label: 'Day 3',
    },
};
