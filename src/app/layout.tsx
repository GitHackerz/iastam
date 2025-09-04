import type { Metadata } from 'next';
import { defaultMetadata } from './metadata';
import { ThemeProvider } from '@/providers/theme-provider';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: 'IEEE IAS Tunisia Annual Meeting (IASTAM 5)',
        description:
            'The 5th IEEE IAS Tunisia Annual Meeting featuring keynote speeches, technical sessions, workshops, and networking opportunities in industrial applications technology.',
        startDate: '2025-01-01T00:00',
        endDate: '2025-12-31T23:59',
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        location: {
            '@type': 'Place',
            name: 'To be announced',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'To be announced',
                addressCountry: 'TN',
            },
        },
        organizer: {
            '@type': 'Organization',
            name: 'IEEE IAS Tunisia',
            url: 'https://ias-am.ieee.tn',
        },
        offers: {
            '@type': 'Offer',
            url: 'https://ias-am.ieee.tn/register',
            availability: 'https://schema.org/InStock',
        },
        image: ['./images/logos/iastam.png'],
        performer: {
            '@type': 'Organization',
            name: 'IEEE ESPRIT Student Branch & Joint Chapter',
        },
    };

    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <link rel="icon" href="./favicon.ico" sizes="any" />
                <link
                    rel="apple-touch-icon"
                    href="./apple-touch-icon.png"
                    type="image/png"
                    sizes="180x180"
                />
                <meta name="theme-color" content="#22c55e" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </head>
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    forcedTheme="light"
                >
                    <Navbar />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
