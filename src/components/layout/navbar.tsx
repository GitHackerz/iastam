'use client';

import { useState } from 'react';
import Link from 'next/link';
import { navLinks, ctaButton } from '@/constants/navigation';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/theme-toggle';
import { useTheme } from 'next-themes';
import { useEffect, useState as useThemeState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useThemeState(false);

    // Ensure component is mounted to avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    // Get the appropriate logo based on theme
    const getLogoSrc = () => {
        if (!mounted) return '/images/logos/iastam.png'; // Default fallback
        const isDark = resolvedTheme === 'dark';
        return isDark
            ? '/images/logos/iastam-w.png'
            : '/images/logos/iastam.png';
    };

    // Create breadcrumb structured data
    const getBreadcrumbData = () => {
        const paths = pathname.split('/').filter(Boolean);
        const breadcrumbList = {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://ias-am.ieee.tn',
                },
            ],
        };

        paths.forEach((path, index) => {
            breadcrumbList.itemListElement.push({
                '@type': 'ListItem',
                position: index + 2,
                name: path.charAt(0).toUpperCase() + path.slice(1),
                item: `https://ias-am.ieee.tn/${paths.slice(0, index + 1).join('/')}`,
            });
        });

        return breadcrumbList;
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/40">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(getBreadcrumbData()),
                }}
            />
            <nav className="fixed w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Link href="/" className="font-bold text-xl group">
                            <div className="relative overflow-hidden rounded-lg p-1">
                                <Image
                                    src={getLogoSrc()}
                                    alt="IASTAM Logo"
                                    width={120}
                                    height={30}
                                    className="transition-transform duration-300 group-hover:scale-105"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                                {navLinks.map(link => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="hover:text-primary text-sm font-medium px-3 py-2 rounded-md transition-colors duration-200 relative group"
                                    >
                                        {link.label}
                                        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0" />
                                    </Link>
                                ))}
                            </div>
                            <Separator orientation="vertical" className="h-6" />
                            <ThemeToggle />
                            <Button
                                asChild
                                className={`bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 ${
                                    ctaButton.disabled
                                        ? 'opacity-70 cursor-not-allowed hover:bg-primary relative overflow-hidden'
                                        : ''
                                }`}
                                disabled={ctaButton.disabled}
                            >
                                <Link
                                    href={ctaButton.href}
                                    className={`${ctaButton.disabled ? 'pointer-events-none' : ''}`}
                                    onClick={e =>
                                        ctaButton.disabled && e.preventDefault()
                                    }
                                >
                                    {ctaButton.label}
                                </Link>
                            </Button>
                        </div>

                        {/* Mobile Menu */}
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild className="md:hidden">
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px]">
                                <SheetHeader>
                                    <SheetTitle>Navigation</SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col space-y-3 mt-4">
                                    {navLinks.map(link => (
                                        <Link
                                            href={link.href}
                                            key={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="px-3 py-2 rounded-md hover:bg-muted transition-colors duration-200"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                    <div className="flex items-center justify-between px-3 py-2">
                                        <span className="text-sm font-medium">
                                            Theme
                                        </span>
                                        <ThemeToggle />
                                    </div>
                                    <Separator className="my-2 mx-3" />
                                    <Button
                                        className={`w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-4 ${
                                            ctaButton.disabled
                                                ? 'opacity-70 cursor-not-allowed hover:bg-primary relative overflow-hidden'
                                                : ''
                                        }`}
                                        disabled={ctaButton.disabled}
                                        asChild
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <Link
                                            href={ctaButton.href}
                                            className={`${ctaButton.disabled ? 'pointer-events-none' : ''}`}
                                            onClick={e =>
                                                ctaButton.disabled &&
                                                e.preventDefault()
                                            }
                                        >
                                            {ctaButton.label}
                                        </Link>
                                    </Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>
        </header>
    );
}
