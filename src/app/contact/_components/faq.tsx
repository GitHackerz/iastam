'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
    {
        question: 'What is IASTAM?',
        answer: 'The IEEE IAS Tunisia Annual Meeting (IASTAM) is the flagship event organized by the IEEE IAS & IES & PES ESPRIT Student Branch Joint Chapters in collaboration with the IAS Tunisia Section and IEEE ESPRIT Student Branch. It brings together industry professionals, academics, researchers, and students focused on power systems, industrial automation, and more.',
    },
    {
        question: 'How can I participate in IASTAM?',
        answer: "Participation options include attending as a delegate, submitting a paper for presentation, becoming a sponsor, or exhibiting at the event. Please contact us for specific details about the current year's registration process.",
    },
    {
        question: 'Where is IASTAM held?',
        answer: "IASTAM 5 will be held at L'Orient Palace, a luxury resort in Sousse, Tunisia. The venue offers excellent conference facilities along with accommodation and dining options for attendees.",
    },
    {
        question: 'Can I submit research papers for IASTAM?',
        answer: 'Yes, IASTAM welcomes research paper submissions in relevant fields. Call for papers is typically announced several months before the event. Please check our programs page for current submission deadlines and guidelines.',
    },
    {
        question: 'Are there accommodation options available?',
        answer: "Yes, as the conference is being held at L'Orient Palace Resort, special rates for accommodation are available for conference attendees. Please mention your participation in IASTAM 5 when booking to receive the conference discount.",
    },
];

export const Faq = () => {
    const [faqRef, faqInView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    return (
        <section ref={faqRef} className="py-24 bg-background relative">
            <div className="container max-w-4xl px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mx-auto mb-4">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-primary font-medium tracking-wider uppercase text-sm">
                            FAQ
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        Find answers to common questions about IASTAM
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                        faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                    }
                    transition={{ duration: 0.7 }}
                >
                    <Accordion type="single" collapsible className="w-full">
                        {faqItems.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
};
