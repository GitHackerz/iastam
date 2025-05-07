export interface Speaker {
    name: string;
    role: string;
    image: string;
    alt: string;
    social: {
        linkedin: string;
        twitter: string;
    };
}

export const keynoteSpeakers: Speaker[] = [
    {
        name: 'Karim Akkari',
        role: 'AI Engineer',
        image: '/images/speakers/karim.jpg',
        alt: 'Karim Akkari - AI Engineer and Keynote Speaker at IASTAM 5',
        social: {
            linkedin: 'https://linkedin.com/in/johndoe',
            twitter: 'https://twitter.com/johndoe',
        },
    },
    {
        name: 'Mohamed El Hedi',
        role: 'AI Engineer',
        image: '/images/speakers/hedi.png',
        alt: 'Mohamed El Hedi - AI Engineer and Keynote Speaker at IASTAM 5',
        social: {
            linkedin: 'https://linkedin.com/in/johndoe',
            twitter: 'https://twitter.com/johndoe',
        },
    },
    {
        name: 'Hichem Fantar',
        role: 'AI Engineer',
        image: '/images/speakers/hichem.jpg',
        alt: 'Hichem Fantar - AI Engineer and Keynote Speaker at IASTAM 5',
        social: {
            linkedin: 'https://linkedin.com/in/johndoe',
            twitter: 'https://twitter.com/johndoe',
        },
    },
    {
        name: 'Mounir Frija',
        role: 'AI Engineer',
        image: '/images/speakers/mounir.png',
        alt: 'Mounir Frija - AI Engineer and Keynote Speaker at IASTAM 5',
        social: {
            linkedin: 'https://linkedin.com/in/johndoe',
            twitter: 'https://twitter.com/johndoe',
        },
    },
];
