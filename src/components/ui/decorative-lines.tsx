'use client';

import { motion } from 'framer-motion';
import { FC } from 'react';

interface DecorativeLinesProps {
    className?: string;
    variant?: 'grid' | 'circuit' | 'waves' | 'diagonal';
    color?: string;
    inView?: boolean;
    opacity?: number;
    animate?: boolean;
}

const DecorativeLines: FC<DecorativeLinesProps> = ({
    className = '',
    variant = 'grid',
    color = 'currentColor',
    inView = true,
    opacity = 0.1,
    animate = true,
}) => {
    // Different SVG patterns for different variants
    const renderLines = () => {
        switch (variant) {
            case 'circuit':
                return (
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 800 800"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`absolute inset-0 ${className} z-0`}
                        style={{ opacity: opacity * 2 }} // Double the opacity for better visibility
                    >
                        <g stroke={color} strokeWidth="2" fill="none">
                            {' '}
                            {/* Increased stroke width */}
                            <motion.path
                                d="M50,250 L750,250"
                                initial={{ pathLength: 0 }}
                                animate={
                                    inView && animate
                                        ? { pathLength: 1 }
                                        : { pathLength: 0 }
                                }
                                transition={{ duration: 1.5, delay: 0.2 }}
                            />
                            <motion.path
                                d="M250,50 L250,750"
                                initial={{ pathLength: 0 }}
                                animate={
                                    inView && animate
                                        ? { pathLength: 1 }
                                        : { pathLength: 0 }
                                }
                                transition={{ duration: 1.5, delay: 0.4 }}
                            />
                            <motion.path
                                d="M550,50 L550,750"
                                initial={{ pathLength: 0 }}
                                animate={
                                    inView && animate
                                        ? { pathLength: 1 }
                                        : { pathLength: 0 }
                                }
                                transition={{ duration: 1.5, delay: 0.6 }}
                            />
                            <motion.path
                                d="M50,550 L750,550"
                                initial={{ pathLength: 0 }}
                                animate={
                                    inView && animate
                                        ? { pathLength: 1 }
                                        : { pathLength: 0 }
                                }
                                transition={{ duration: 1.5, delay: 0.8 }}
                            />
                            <motion.path
                                d="M250,250 L550,250"
                                initial={{ pathLength: 0 }}
                                animate={
                                    inView && animate
                                        ? { pathLength: 1 }
                                        : { pathLength: 0 }
                                }
                                transition={{ duration: 1, delay: 1 }}
                            />
                            <motion.path
                                d="M250,550 L550,550"
                                initial={{ pathLength: 0 }}
                                animate={
                                    inView && animate
                                        ? { pathLength: 1 }
                                        : { pathLength: 0 }
                                }
                                transition={{ duration: 1, delay: 1.2 }}
                            />
                            <motion.path
                                d="M250,250 L250,550"
                                initial={{ pathLength: 0 }}
                                animate={
                                    inView && animate
                                        ? { pathLength: 1 }
                                        : { pathLength: 0 }
                                }
                                transition={{ duration: 1, delay: 1.4 }}
                            />
                            <motion.path
                                d="M550,250 L550,550"
                                initial={{ pathLength: 0 }}
                                animate={
                                    inView && animate
                                        ? { pathLength: 1 }
                                        : { pathLength: 0 }
                                }
                                transition={{ duration: 1, delay: 1.6 }}
                            />
                            {/* Circuit nodes */}
                            {[250, 550].map(x =>
                                [250, 550].map((y, i) => (
                                    <motion.circle
                                        key={`${x}-${y}`}
                                        cx={x}
                                        cy={y}
                                        r="6" // Larger radius
                                        fill={color}
                                        initial={{ scale: 0 }}
                                        animate={
                                            inView && animate
                                                ? { scale: 1 }
                                                : { scale: 0 }
                                        }
                                        transition={{
                                            duration: 0.5,
                                            delay: 1.8 + i * 0.1,
                                        }}
                                    />
                                )),
                            )}
                        </g>
                    </svg>
                );

            case 'waves':
                return (
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 800 800"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`absolute inset-0 ${className} z-0`}
                        style={{ opacity: opacity * 2 }} // Double the opacity
                    >
                        <g stroke={color} strokeWidth="2" fill="none">
                            {' '}
                            {/* Increased stroke width */}
                            {[0, 1, 2, 3, 4].map(i => (
                                <motion.path
                                    key={`wave-${i}`}
                                    d="M50,200 Q200,100 350,200 T650,200"
                                    transform={`translate(0, ${i * 100})`}
                                    initial={{ pathLength: 0 }}
                                    animate={
                                        inView && animate
                                            ? { pathLength: 1 }
                                            : { pathLength: 0 }
                                    }
                                    transition={{
                                        duration: 1.5,
                                        delay: 0.2 * i,
                                    }}
                                />
                            ))}
                        </g>
                    </svg>
                );

            case 'diagonal':
                return (
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 800 800"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`absolute inset-0 ${className} z-0`}
                        style={{ opacity: opacity * 2 }} // Double the opacity
                    >
                        <g stroke={color} strokeWidth="2" fill="none">
                            {' '}
                            {/* Increased stroke width */}
                            {[-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6].map(i => (
                                <motion.line
                                    key={`diag-${i}`}
                                    x1={i * 100 < 0 ? 0 : i * 100}
                                    y1="0"
                                    x2={
                                        i * 100 + 800 > 800
                                            ? 800
                                            : i * 100 + 800
                                    }
                                    y2="800"
                                    initial={{ pathLength: 0 }}
                                    animate={
                                        inView && animate
                                            ? { pathLength: 1 }
                                            : { pathLength: 0 }
                                    }
                                    transition={{
                                        duration: 1.5,
                                        delay: Math.abs(i) * 0.1,
                                    }}
                                />
                            ))}
                        </g>
                    </svg>
                );

            default: // grid pattern
                return (
                    <svg
                        width="100%"
                        height="100%"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`absolute inset-0 ${className} z-0`}
                        style={{ opacity: opacity * 2 }} // Double the opacity
                    >
                        <defs>
                            <pattern
                                id="smallGrid"
                                width="20"
                                height="20"
                                patternUnits="userSpaceOnUse"
                            >
                                <path
                                    d="M 20 0 L 0 0 0 20"
                                    fill="none"
                                    stroke={color}
                                    strokeWidth="0.8" // Increased stroke width
                                />
                            </pattern>
                            <pattern
                                id="grid"
                                width="100"
                                height="100"
                                patternUnits="userSpaceOnUse"
                            >
                                <rect
                                    width="100"
                                    height="100"
                                    fill="url(#smallGrid)"
                                />
                                <path
                                    d="M 100 0 L 0 0 0 100"
                                    fill="none"
                                    stroke={color}
                                    strokeWidth="1.5" // Increased stroke width
                                />
                            </pattern>
                        </defs>
                        <motion.rect
                            width="100%"
                            height="100%"
                            fill="url(#grid)"
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 1.5 }}
                        />
                    </svg>
                );
        }
    };

    return renderLines();
};

export default DecorativeLines;
