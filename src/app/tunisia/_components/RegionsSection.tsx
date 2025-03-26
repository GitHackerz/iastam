'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import DecorativeLines from '@/components/ui/decorative-lines';

export const RegionsSection = () => {
    const [sectionRef, inView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    return (
        <section ref={sectionRef} className="py-24 bg-primary/5 relative">
            <div className="absolute inset-0 overflow-hidden z-0">
                <DecorativeLines
                    variant="grid"
                    inView={inView}
                    opacity={0.08}
                    color="var(--primary)"
                />
            </div>

            <div className="container max-w-6xl px-4 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
                    }
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mx-auto mb-4">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-primary font-medium tracking-wider uppercase text-sm">
                            Explore
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Regions of <span className="text-primary">Tunisia</span>
                    </h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        We are delighted to introduce you to these regions by
                        breaking them down in this video.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                    }
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="aspect-video rounded-2xl overflow-hidden shadow-xl shadow-primary/10 bg-black"
                >
                    <div className="relative h-full w-full">
                        <iframe
                            src="https://www.youtube.com/embed/cR8mH08xNVw?si=WOwVqnEA5YIDNkix"
                            title="Regions of Tunisia"
                            className="absolute inset-0 w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={
                            inView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 30 }
                        }
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-background rounded-xl p-6 shadow-lg"
                    >
                        <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <span className="text-primary">●</span> Coastal
                            Regions
                        </h3>
                        <p className="text-muted-foreground">
                            From Tabarka to Djerba, discover pristine beaches,
                            blue waters, and charming seaside towns with
                            Mediterranean flair.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={
                            inView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 30 }
                        }
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-background rounded-xl p-6 shadow-lg"
                    >
                        <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <span className="text-primary">●</span> Historical
                            Sites
                        </h3>
                        <p className="text-muted-foreground">
                            Explore ancient Carthage, El Djem&apos;s Roman
                            amphitheater, and the holy city of Kairouan with its
                            stunning Great Mosque.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={
                            inView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 30 }
                        }
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="bg-background rounded-xl p-6 shadow-lg"
                    >
                        <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <span className="text-primary">●</span> Desert
                            Landscapes
                        </h3>
                        <p className="text-muted-foreground">
                            Journey to the Sahara&apos;s edge to experience the
                            breathtaking dunes, oases, and unique desert
                            architecture of southern Tunisia.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
