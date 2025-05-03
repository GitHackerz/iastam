'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="bg-background min-h-screen flex flex-col items-center justify-center p-4">
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 right-12 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse" />
                <div
                    className="absolute bottom-20 left-12 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse"
                    style={{ animationDelay: '1s' }}
                />
            </div>

            <div className="absolute inset-0 bg-grid-small-black/[0.2] -z-10 dark:bg-grid-small-white/[0.2]" />

            <div className="max-w-3xl w-full text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mx-auto"
                >
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    <span className="text-primary font-medium tracking-wider uppercase text-sm">
                        404 Error
                    </span>
                </motion.div>

                <motion.h1
                    className="text-6xl md:text-8xl font-bold tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    Page Not Found
                </motion.h1>

                <motion.p
                    className="text-xl text-muted-foreground max-w-md mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    The page you are looking for doesn&apos;t exist or has been
                    moved.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                >
                    <Button asChild size="lg" className="gap-2">
                        <Link href="/">
                            <Home className="w-5 h-5" />
                            <span>Back to Home</span>
                        </Link>
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => window.history.back()}
                        size="lg"
                        className="gap-2"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span>Go Back</span>
                    </Button>
                </motion.div>
            </div>
        </div>
    );
}
