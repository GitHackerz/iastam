'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const faqs = [
    {
        question: 'When and where is IASTAM 5 taking place?',
        answer: 'IASTAM 5 will be held from October 4-6, 2025, at Hotel Royal in Yasmine Hammamet, Tunisia. The venue is located at: 9GHX+Q8H، Yasmine Hammamet B.P 237 8050, Yasmine Hammamet.',
    },
    {
        question: 'How can I register for the event?',
        answer: 'You can register for IASTAM 5 through our online registration portal. Early bird registration will be available with special rates. Visit our registration page for more details and to secure your spot.',
    },
    {
        question: 'What is included in the registration fee?',
        answer: 'The registration fee includes access to all conference sessions, workshops, and networking events, conference materials, lunches and coffee breaks during the conference days, and the gala dinner.',
    },
    {
        question: 'Are there accommodation options at the conference venue?',
        answer: 'Yes, Hotel Royal Hammamet offers special rates for conference attendees. You can book your stay directly through the hotel mentioning IASTAM 5. We recommend booking early to secure the conference rate.',
    },
    {
        question: 'Can I submit a paper or research for presentation?',
        answer: 'Yes, we welcome paper submissions for technical sessions. Check our call for papers section for submission guidelines, important dates, and topics of interest.',
    },
    {
        question: 'Is there transportation available from the airport?',
        answer: 'The organizing committee will arrange shuttle services from Enfidha-Hammamet International Airport and Tunis-Carthage International Airport to the conference venue. Details will be provided closer to the event date.',
    },
    {
        question: 'What is the conference language?',
        answer: 'The official language of the conference is English. All presentations, materials, and communications will be in English.',
    },
    {
        question:
            'Are there opportunities for companies to sponsor or exhibit?',
        answer: 'Yes, we offer various sponsorship and exhibition opportunities. Please contact us at landolsi.selim@ieee.org for detailed information about available packages.',
    },
];

export const Faq = () => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    const faqStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };

    return (
        <section
            ref={ref}
            className="py-24 relative overflow-hidden bg-primary/5"
        >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqStructuredData),
                }}
            />
            <div className="container max-w-4xl px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.6 }}
                    className="text-center space-y-4 mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mx-auto">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-primary font-medium tracking-wider uppercase text-sm">
                            FAQ
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-muted-foreground">
                        Find answers to common questions about IASTAM 5
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                    }
                    transition={{ duration: 0.7 }}
                >
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger>
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent>
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
};
