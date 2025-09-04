import { Metadata } from 'next';
import StartupsForumHero from './_components/StartupsForumHero';
import { ForumBenefits, InvestorsSection } from './_components';

const GOOGLE_FORM_URL = 'https://forms.gle/nAWaachAAWgybfPn8'; // <- replace with your real Form URL

export const metadata: Metadata = {
    title: 'Startups Forum | IASTAM 5',
    description:
        'Small startups forum at IASTAM 5 — connect with participants, incubators, and partner investors. First edition: simple, focused, and accessible.',
};

export default function StartupsForumPage() {
    return (
        <main className="min-h-screen">
            <StartupsForumHero />
            <ForumBenefits />
            <InvestorsSection />

            {/* Simple CTA to external Form (first edition) */}
            <section className="py-20 bg-primary/5">
                <div className="container max-w-4xl mx-auto px-4 text-center">
                    <h3 className="text-2xl font-bold mb-4">
                        Interested in participating?
                    </h3>
                    <p className="text-muted-foreground mb-6">
                        This is the first edition of our Startups Forum. If you
                        are a startup and would like to connect with attendees,
                        incubators, or partner investors, please complete the
                        short Form and we will contact selected applicants with
                        next steps.
                    </p>

                    <a
                        href={GOOGLE_FORM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 rounded-full bg-primary text-background font-semibold shadow hover:opacity-95"
                    >
                        Apply Now
                    </a>
                </div>
            </section>
        </main>
    );
}
