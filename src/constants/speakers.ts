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
        name: 'Prof. Aymen El-Refaie',
        role: 'IEEE IAS President',
        image: '/images/speakers/aymen.jpg',
        alt: 'Prof. Aymen El-Refaie - IEEE IAS President and Opening Keynote Speaker at IASTAM 5',
        social: {
            linkedin: 'https://linkedin.com/in/aymen-el-refaie',
            twitter: 'https://twitter.com/aymen_elrefaie',
        },
    },
    {
        name: 'Mr. Srikanth Pillai',
        role: 'IAS CMD Chair',
        image: '/images/speakers/srikanth.jpg',
        alt: 'Mr. Srikanth Pillai - IAS CMD Chair and Keynote Speaker at IASTAM 5',
        social: {
            linkedin: 'https://linkedin.com/in/srikanth-pillai',
            twitter: 'https://twitter.com/srikanth_pillai',
        },
    },
    {
        name: 'Mr. Nehad El-Sherif',
        role: 'IAS Global Representative',
        image: '/images/speakers/nehad.jpg',
        alt: 'Mr. Nehad El-Sherif - IAS Global Representative at IASTAM 5',
        social: {
            linkedin: 'https://linkedin.com/in/nehad-elsherif',
            twitter: 'https://twitter.com/nehad_elsherif',
        },
    },
    {
        name: 'Wajih Letaief',
        role: 'Workshop Speaker',
        image: '/images/speakers/wajih.jpg',
        alt: 'Wajih Letaief - Workshop Speaker at IASTAM 5',
        social: {
            linkedin: 'https://linkedin.com/in/wajih-letaief',
            twitter: 'https://twitter.com/wajih_letaief',
        },
    },
    {
        name: 'Ms. Yesmine',
        role: 'IASTAM Chair',
        image: '/images/board/yesmine.png',
        alt: 'Ms. Yesmine - IASTAM Chair at IASTAM 5',
        social: {
            linkedin: 'https://linkedin.com/in/yesmine',
            twitter: 'https://twitter.com/yesmine',
        },
    },
    {
        name: 'Mr. Adam Lassidi',
        role: 'IEEE ESPRIT SB Chairperson',
        image: '/images/board/adam_lassidi.png',
        alt: 'Mr. Adam Lassidi - IEEE ESPRIT SB Chairperson at IASTAM 5',
        social: {
            linkedin: 'https://linkedin.com/in/adam-lassidi',
            twitter: 'https://twitter.com/adam_lassidi',
        },
    },
];
