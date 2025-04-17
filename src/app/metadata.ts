export const defaultMetadata = {
    title: {
        default: 'IASTAM 5 | IEEE IAS Tunisia Annual Meeting 2025',
        template: '%s | IASTAM 5',
    },
    description:
        'IEEE IAS Tunisia Annual Meeting (IASTAM 5) - October 4-6, 2025 at Hotel Royal, Hammamet. Join industry professionals, academics, and researchers in industrial applications technology.',
    keywords: [
        'IEEE',
        'IAS',
        'Tunisia',
        'Annual Meeting',
        'IASTAM',
        'Industrial Applications',
        'Conference',
        'Engineering',
        'Technology',
        'Hammamet',
        'Tunisia',
    ],
    authors: [{ name: 'IEEE IAS Tunisia' }],
    creator: 'IEEE IAS Tunisia',
    metadataBase: new URL('https://ias-am.ieee.tn'),
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://ias-am.ieee.tn',
        title: 'IASTAM 5 | IEEE IAS Tunisia Annual Meeting 2025',
        description:
            'Join us for the 5th IEEE IAS Tunisia Annual Meeting (IASTAM) - A premier conference on industrial applications technology featuring keynotes, technical sessions, and workshops.',
        siteName: 'IASTAM 5',
        images: [
            {
                url: '/images/logos/iastam.png',
                width: 1200,
                height: 630,
                alt: 'IASTAM 5 - IEEE IAS Tunisia Annual Meeting',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'IASTAM 5 | IEEE IAS Tunisia Annual Meeting 2025',
        description:
            'Join us for the 5th IEEE IAS Tunisia Annual Meeting (IASTAM) - October 4-6, 2025 at Hotel Royal, Hammamet.',
        images: ['/images/logos/iastam.png'],
        creator: '@IEEEIASTunisia',
    },
    robots: {
        index: true,
        follow: true,
    },
};
