'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    MapPin,
    Phone,
    Mail,
    ExternalLink,
    RefreshCw,
    ArrowLeftRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import DecorativeLines from '@/components/ui/decorative-lines';

export const CurrencySection = () => {
    const [sectionRef, inView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    const [amount, setAmount] = useState<number>(100);
    const [fromCurrency, setFromCurrency] = useState<'USD' | 'TND'>('USD');
    const [toCurrency, setToCurrency] = useState<'USD' | 'TND'>('TND');
    const [convertedAmount, setConvertedAmount] = useState<number>(309);
    const [isConverting, setIsConverting] = useState<boolean>(false);

    // Exchange rate: 1 USD = 3.09 TND (This would ideally come from an API)
    const exchangeRate = 3.09;

    useEffect(() => {
        if (fromCurrency === 'USD' && toCurrency === 'TND') {
            setConvertedAmount(Number((amount * exchangeRate).toFixed(2)));
        } else if (fromCurrency === 'TND' && toCurrency === 'USD') {
            setConvertedAmount(Number((amount / exchangeRate).toFixed(2)));
        }
    }, [amount, fromCurrency, toCurrency]);

    const handleSwapCurrencies = () => {
        setIsConverting(true);
        setTimeout(() => {
            setFromCurrency(toCurrency);
            setToCurrency(fromCurrency);
            setIsConverting(false);
        }, 500);
    };

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value === '' || value === '0') {
            setAmount(0);
            return;
        }

        const numValue = parseFloat(value);
        if (!isNaN(numValue)) {
            setAmount(numValue);
        }
    };

    return (
        <section ref={sectionRef} className="py-24 relative">
            <div className="absolute inset-0 overflow-hidden z-0">
                <DecorativeLines
                    variant="circuit"
                    inView={inView}
                    opacity={0.12}
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
                            Travel Information
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Practical{' '}
                        <span className="text-primary">Information</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Currency Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={
                            inView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -50 }
                        }
                        transition={{ duration: 0.7 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-semibold">Currency</h3>

                        <p className="text-muted-foreground">
                            The national currency is the Tunisian dinar (TND)
                            which is very friendly to foreign currencies. Use
                            our converter below to plan your budget.
                        </p>

                        <div className="bg-background rounded-xl overflow-hidden shadow-lg">
                            <div className="bg-primary/10 p-4 flex justify-between items-center">
                                <h4 className="font-medium">
                                    Currency Converter
                                </h4>
                                <div className="text-xs text-muted-foreground">
                                    Last updated:{' '}
                                    {new Date().toLocaleDateString()}
                                </div>
                            </div>
                            <div className="p-6 space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                                    <div className="md:col-span-2">
                                        <label
                                            htmlFor="amount"
                                            className="block text-sm font-medium mb-1"
                                        >
                                            Amount
                                        </label>
                                        <Input
                                            id="amount"
                                            type="number"
                                            value={amount}
                                            onChange={handleAmountChange}
                                            className="w-full"
                                        />
                                    </div>

                                    <div className="md:col-span-1 flex justify-center">
                                        <div className="flex items-center justify-center">
                                            <div
                                                className={`w-10 h-10 rounded-full flex items-center justify-center bg-${fromCurrency === 'USD' ? 'blue-100 text-blue-600' : 'primary/10 text-primary'} font-bold`}
                                            >
                                                {fromCurrency === 'USD'
                                                    ? '$'
                                                    : 'د.ت'}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="md:col-span-1 flex justify-center">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={handleSwapCurrencies}
                                            className="relative"
                                            disabled={isConverting}
                                        >
                                            <ArrowLeftRight
                                                className={`w-5 h-5 transition-all duration-500 ${isConverting ? 'rotate-180 opacity-0' : ''}`}
                                            />
                                            <RefreshCw
                                                className={`w-5 h-5 animate-spin absolute ${isConverting ? 'opacity-100' : 'opacity-0'}`}
                                            />
                                        </Button>
                                    </div>

                                    <div className="md:col-span-1 flex justify-center">
                                        <div className="flex items-center justify-center">
                                            <div
                                                className={`w-10 h-10 rounded-full flex items-center justify-center bg-${toCurrency === 'USD' ? 'blue-100 text-blue-600' : 'primary/10 text-primary'} font-bold`}
                                            >
                                                {toCurrency === 'USD'
                                                    ? '$'
                                                    : 'د.ت'}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="md:col-span-1 flex justify-center">
                                        <div className="flex flex-col items-center">
                                            <span className="text-2xl font-bold">
                                                {convertedAmount}
                                            </span>
                                            <span className="text-xs text-muted-foreground">
                                                {toCurrency}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-sm text-muted-foreground pt-2 border-t">
                                    <div className="flex justify-between items-center">
                                        <span>Exchange Rate:</span>
                                        <span>1 USD = {exchangeRate} TND</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <Button variant="outline" className="group" asChild>
                                <Link
                                    href="https://www.bct.gov.tn/bct/siteprod/index.jsp"
                                    target="_blank"
                                    className="flex items-center gap-2"
                                >
                                    Check Current Exchange Rates
                                    <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={
                            inView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: 50 }
                        }
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-semibold">Find us here</h3>

                        <div className="space-y-5">
                            <motion.div
                                className="flex items-start gap-4 group hover:bg-primary/5 p-3 rounded-lg transition-colors"
                                whileHover={{ x: 5 }}
                            >
                                <div className="p-3 rounded-full bg-primary/10 text-primary mt-0.5">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-medium mb-1">
                                        National Tourism Office
                                    </h4>
                                    <p className="text-muted-foreground">
                                        1 Avenue Mohamed V, Tunis 1002, Tunisia
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start gap-4 group hover:bg-primary/5 p-3 rounded-lg transition-colors"
                                whileHover={{ x: 5 }}
                            >
                                <div className="p-3 rounded-full bg-primary/10 text-primary mt-0.5">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-medium mb-1">
                                        Tourist Information
                                    </h4>
                                    <p className="text-muted-foreground">
                                        +216 71 341 077
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start gap-4 group hover:bg-primary/5 p-3 rounded-lg transition-colors"
                                whileHover={{ x: 5 }}
                            >
                                <div className="p-3 rounded-full bg-primary/10 text-primary mt-0.5">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-medium mb-1">Email</h4>
                                    <p className="text-muted-foreground">
                                        ontt@discovertunisia.com
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        <div className="pt-4">
                            <Button className="group" asChild>
                                <Link
                                    href="https://www.discovertunisia.com"
                                    target="_blank"
                                    className="flex items-center gap-2"
                                >
                                    Visit Official Tourism Website
                                    <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
