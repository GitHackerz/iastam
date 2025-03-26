'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ContactForm } from '@/app/contact/_components/contact-form';
import { ContactInfo } from '@/app/contact/_components/contact-info';
import { ContactHero } from './_components/contact-hero';
import { ContactMap } from './_components/contact-map';
import { Faq } from './_components/faq';

export default function ContactPage() {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <ContactHero />

            {/* Contact Form Section */}
            <section
                ref={ref}
                className="relative w-full py-24 overflow-hidden"
            >
                {/* Background patterns */}
                <div className="absolute inset-0 bg-grid-small-black/[0.2] -z-10 dark:bg-grid-small-white/[0.2]" />

                {/* Abstract shapes */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-20 right-12 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse" />
                    <div
                        className="absolute bottom-20 left-12 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse"
                        style={{ animationDelay: '1s' }}
                    />
                </div>

                <div className="container max-w-6xl px-4 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                            inView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 20 }
                        }
                        transition={{ duration: 0.7 }}
                        className="text-center space-y-6 max-w-3xl mx-auto mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mx-auto">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-primary font-medium tracking-wider uppercase text-sm">
                                Get in Touch
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                            Let&apos;s Start a Conversation
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Reach out to us for inquiries, collaborations, or
                            any other information about IASTAM
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={
                                inView
                                    ? { opacity: 1, x: 0 }
                                    : { opacity: 0, x: -50 }
                            }
                            transition={{ duration: 0.7 }}
                        >
                            <ContactInfo />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={
                                inView
                                    ? { opacity: 1, x: 0 }
                                    : { opacity: 0, x: 50 }
                            }
                            transition={{ duration: 0.7 }}
                            className="bg-card border rounded-lg p-6 shadow-md"
                        >
                            <ContactForm />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <ContactMap />

            {/* FAQ Section */}
            <Faq />
        </div>
    );
}
