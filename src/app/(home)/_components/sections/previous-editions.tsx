'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Calendar, MapPin } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import DecorativeLines from '@/components/ui/decorative-lines';

interface Edition {
    year: string;
    images: string[];
    description: string;
    location: string;
    date: string;
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
        date: 'March 15-17, 2024',
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
        date: 'April 10-12, 2023',
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
        date: 'May 5-7, 2022',
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
        date: 'October 15-17, 2021',
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
        <section
            ref={sectionRef}
            className="py-32 relative bg-background overflow-hidden"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden z-0">
                <DecorativeLines
                    variant="grid"
                    inView={inView}
                    opacity={0.12}
                    color="var(--primary)"
                />
            </div>

            {/* Animated gradient blobs */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 right-12 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse" />
                <div
                    className="absolute bottom-1/3 left-12 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl animate-pulse"
                    style={{ animationDelay: '1s' }}
                />
            </div>

            <div className="container max-w-6xl px-4 mx-auto relative z-10">
                {/* Section header */}
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
                            Look Back
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                        Previous <span className="text-primary">Editions</span>
                    </h2>
                </motion.div>

                <Tabs defaultValue="2024" className="w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                            inView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 20 }
                        }
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex justify-center mb-12"
                    >
                        <TabsList className="inline-flex p-1 bg-background border border-primary/20 rounded-full">
                            {editions.map(edition => (
                                <TabsTrigger
                                    key={edition.year}
                                    value={edition.year}
                                    className="rounded-full px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-white"
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
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="space-y-10"
                                >
                                    {/* Edition details card */}
                                    <div className="bg-primary/5 rounded-2xl p-6 md:p-8 mb-8">
                                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                            <div>
                                                <h3 className="text-2xl font-bold mb-2">
                                                    {edition.year} Edition
                                                </h3>
                                                <p className="text-muted-foreground">
                                                    {edition.description}
                                                </p>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <div className="flex items-center gap-2 text-sm">
                                                    <MapPin className="h-4 w-4 text-primary" />
                                                    <span>
                                                        {edition.location}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm">
                                                    <Calendar className="h-4 w-4 text-primary" />
                                                    <span>{edition.date}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Gallery */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {edition.images.map((image, idx) => (
                                            <motion.div
                                                key={image}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{
                                                    delay: 0.1 * idx,
                                                    duration: 0.4,
                                                }}
                                                whileHover={{ y: -5 }}
                                                className="relative group"
                                            >
                                                <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                                                    <Image
                                                        src={image}
                                                        alt={`IASTAM ${edition.year}`}
                                                        fill
                                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                    />

                                                    {/* Overlay with expand button */}
                                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                                        <button
                                                            onClick={() =>
                                                                setSelectedImage(
                                                                    image,
                                                                )
                                                            }
                                                            className="bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300"
                                                        >
                                                            <ArrowUpRight className="w-5 h-5 text-primary" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </TabsContent>
                        ))}
                    </AnimatePresence>
                </Tabs>
            </div>

            {/* Image Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 p-4 flex items-center justify-center"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-6 right-6 z-50 bg-white/10 rounded-full p-2 hover:bg-white/20 transition-colors"
                        >
                            <X className="w-6 h-6 text-white" />
                        </button>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="relative max-w-5xl max-h-[80vh] w-full"
                            onClick={e => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage}
                                alt="Gallery image"
                                width={1200}
                                height={800}
                                className="object-contain w-full h-full"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
