'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function HostSection() {
    const [sectionRef, inView] = useInView({
        triggerOnce: false, // Changed to false to enable exit animations
        threshold: 0.2,
        // Add margin to trigger earlier
        rootMargin: '-100px 0px',
    });

    return (
        <section ref={sectionRef} className="py-24 bg-muted/50">
            <div className="container max-w-6xl px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={
                        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                    }
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-sm tracking-wider uppercase">
                        Host Institution
                    </span>
                    <h2 className="text-3xl font-bold mt-2">Hosted By</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={
                        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                    }
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col items-center justify-center space-y-6"
                >
                    <div className="relative w-64 h-32">
                        <Image
                            src="/images/host-logo.png"
                            alt="Host Institution"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="text-center max-w-2xl">
                        <h3 className="text-xl font-semibold mb-2">
                            ENIS - École Nationale d'Ingénieurs de Sfax
                        </h3>
                        <p className="text-muted-foreground">
                            Leading engineering school in Tunisia, committed to
                            excellence in education and research in the field of
                            engineering and technology.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
