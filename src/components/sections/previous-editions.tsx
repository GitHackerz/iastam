'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import BlurFade from '@/components/ui/blur-fade';
import { ArrowUpRight, X } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface Edition {
    year: string;
    images: string[];
    description: string;
    location: string;
}

const editions: Edition[] = [
    {
        year: '2024',
        images: [
            '/images/editions/2024-1.jpg',
            '/images/editions/2024-2.jpg',
            '/images/editions/2024-3.jpg',
            '/images/editions/2024-4.jpg',
            '/images/editions/2024-5.jpg',
            '/images/editions/2024-6.jpg',
        ],
        description:
            'The 4th edition brought together experts from around the world...',
        location: 'Hammamet, Tunisia',
    },
    {
        year: '2023',
        images: [
            '/images/editions/2023-1.jpg',
            '/images/editions/2023-2.jpg',
            '/images/editions/2023-3.jpg',
            '/images/editions/2023-4.jpg',
            '/images/editions/2023-5.jpg',
            '/images/editions/2023-6.jpg',
        ],
        description:
            'Focusing on renewable energy and sustainable solutions...',
        location: 'Sousse, Tunisia',
    },
    {
        year: '2022',
        images: [
            '/images/editions/2022-1.jpg',
            '/images/editions/2022-2.jpg',
            '/images/editions/2022-3.jpg',
            '/images/editions/2022-4.jpg',
            '/images/editions/2022-5.jpg',
            '/images/editions/2022-6.jpg',
        ],
        description: 'Highlighting innovations in industrial automation...',
        location: 'Tunis, Tunisia',
    },
    {
        year: '2021',
        images: [
            '/images/editions/2021-1.jpg',
            '/images/editions/2021-2.jpg',
            '/images/editions/2021-3.jpg',
            '/images/editions/2021-4.jpg',
            '/images/editions/2021-5.jpg',
        ],
        description: 'The inaugural edition that started it all...',
        location: 'Virtual Event',
    },
];

export default function PreviousEditions() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [sectionRef, inView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
        rootMargin: '-100px 0px',
    });

    return (
        <section ref={sectionRef} className="py-24 relative overflow-hidden">
            {/* Modern gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />

            <div className="container max-w-6xl px-4 mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={
                        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                    }
                    transition={{ duration: 0.6 }}
                    className="text-center space-y-3 mb-16"
                >
                    <span className="text-primary text-sm tracking-wider uppercase">
                        Gallery
                    </span>
                    <h2 className="text-4xl font-bold">Previous Editions</h2>
                </motion.div>

                <Tabs defaultValue="2023" className="w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={
                            inView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -50 }
                        }
                        transition={{ duration: 0.6 }}
                    >
                        <TabsList className="flex justify-center gap-2 bg-transparent mb-16">
                            {editions.map(edition => (
                                <TabsTrigger
                                    key={edition.year}
                                    value={edition.year}
                                    className="px-6 py-2 rounded-full data-[state=active]:bg-primary/10 
                                             data-[state=active]:text-primary transition-all duration-300 
                                             hover:bg-primary/5"
                                >
                                    {edition.year}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </motion.div>

                    <AnimatePresence mode="wait">
                        {editions.map(edition => (
                            <TabsContent
                                key={edition.year}
                                value={edition.year}
                            >
                                <div className="space-y-8">
                                    {/* Floating year indicator */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={
                                            inView
                                                ? { opacity: 1, x: 0 }
                                                : { opacity: 0, x: -50 }
                                        }
                                        transition={{ duration: 0.6 }}
                                        className="sticky top-4 z-30 flex justify-between items-center 
                                                      bg-background/80 backdrop-blur-lg rounded-full p-4 mb-8 
                                                      border border-primary/10"
                                    >
                                        <h3 className="text-xl font-medium">
                                            {edition.location}
                                        </h3>
                                        <span className="text-primary font-bold">
                                            {edition.year}
                                        </span>
                                    </motion.div>

                                    {/* Masonry grid */}
                                    <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
                                        {edition.images.map((image, idx) => (
                                            <BlurFade
                                                key={image}
                                                delay={0.4 + idx * 0.1}
                                            >
                                                <div className="break-inside-avoid mb-4">
                                                    <motion.div
                                                        whileHover={{
                                                            scale: 1.02,
                                                            y: -5,
                                                        }}
                                                        className="relative group rounded-2xl overflow-hidden"
                                                    >
                                                        <div
                                                            className="absolute inset-0 bg-gradient-to-b from-transparent 
                                                                      via-transparent to-black/50 z-10 opacity-0 
                                                                      group-hover:opacity-100 transition-opacity duration-300"
                                                        />
                                                        <Image
                                                            src={image}
                                                            alt={`IAS TAM ${edition.year}`}
                                                            width={800}
                                                            height={600}
                                                            className="rounded-2xl"
                                                        />
                                                        <button
                                                            onClick={() =>
                                                                setSelectedImage(
                                                                    image,
                                                                )
                                                            }
                                                            className="absolute bottom-4 right-4 z-20 p-2 
                                                                     bg-white/10 backdrop-blur rounded-full 
                                                                     opacity-0 group-hover:opacity-100 
                                                                     transition-all duration-300 
                                                                     hover:bg-white/20"
                                                        >
                                                            <ArrowUpRight className="w-5 h-5 text-white" />
                                                        </button>
                                                    </motion.div>
                                                </div>
                                            </BlurFade>
                                        ))}
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={
                                            inView
                                                ? { opacity: 1, x: 0 }
                                                : { opacity: 0, x: -50 }
                                        }
                                        transition={{ duration: 0.6 }}
                                        className="text-muted-foreground text-center italic"
                                    >
                                        {edition.description}
                                    </motion.div>
                                </div>
                            </TabsContent>
                        ))}
                    </AnimatePresence>
                </Tabs>
            </div>

            {/* Modern Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 p-4 flex items-center justify-center"
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                        >
                            <X className="w-6 h-6 text-white" />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-5xl w-full aspect-video rounded-2xl overflow-hidden"
                        >
                            <Image
                                src={selectedImage}
                                alt="Enlarged view"
                                fill
                                className="object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
