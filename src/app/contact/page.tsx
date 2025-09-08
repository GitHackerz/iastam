'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ContactInfo } from '@/app/contact/_components/contact-info';
import { ContactHero } from './_components/contact-hero';
import { Faq } from './_components/faq';

export default function ContactPage() {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    return (
        <div className="bg-gradient-to-br from-background via-background/98 to-primary/5 min-h-screen">
            <ContactHero />
            <section
                ref={ref}
                className="relative w-full py-24 overflow-hidden"
            >
                <div className="absolute inset-0 bg-dots opacity-20 -z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -z-10" />

                <div className="absolute inset-0 -z-10">
                    <motion.div
                        className="absolute top-20 right-12 w-96 h-96 bg-gradient-to-br from-primary/15 to-accent/15 rounded-full filter blur-3xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                    <motion.div
                        className="absolute bottom-20 left-12 w-96 h-96 bg-gradient-to-br from-accent/15 to-secondary/15 rounded-full filter blur-3xl"
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: 2,
                        }}
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
                        className="text-center space-y-6 max-w-3xl mx-auto mb-20"
                    >
                        <motion.div
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 backdrop-blur-sm rounded-full mx-auto border border-primary/20"
                            animate={{
                                scale: [1, 1.02, 1],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        >
                            <motion.span
                                className="w-2 h-2 rounded-full bg-primary"
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            />
                            <span className="text-primary font-medium tracking-wider uppercase text-sm">
                                Get in Touch
                            </span>
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                            Connect with{' '}
                            <span className="text-gradient-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                                IASTAM 2025
                            </span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Have questions about the conference? Want to get
                            involved? We&apos;re here to help and excited to
                            connect with you. Reach out to us for inquiries,
                            collaborations, or any information about IASTAM.
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={
                                inView
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 30 }
                            }
                            transition={{ duration: 0.7 }}
                            className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 shadow-xl"
                        >
                            <ContactInfo />
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* <ContactMap /> */}
            <Faq />
        </div>
    );
}
