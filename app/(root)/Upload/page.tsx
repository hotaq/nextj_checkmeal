"use client"

import React, { useState, useEffect, useCallback, useMemo, lazy, Suspense } from 'react'
import { useEdgeStore } from '@/lib/edgestore'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

import { BackgroundBeamsDemo } from "@/component/ui/BackgroundBeamsDemo";
import { SingleImageDropzone } from '@/component/ui/SingleImageDropzone'

// Clock component with PascalCase naming following the memory guideline
const Clock = React.memo(() => {
    const [time, setTime] = useState(new Date());
    
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        
        return () => {
            clearInterval(timer);
        };
    }, []);
    
    // Format time as "09:22:54 PM"
    const formattedTime = useMemo(() => {
        return time.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit',
            hour12: true 
        });
    }, [time]);
    
    // Format date as "Wednesday, March 12, 2025"
    const formattedDate = useMemo(() => {
        return time.toLocaleDateString('th', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    }, [time]);
    
    // Generate leaves for the forest atmosphere
    const leaves = useMemo(() => {
        return Array.from({ length: 30 }, (_, i) => ({
            id: i,
            size: Math.random() * 8 + 3,
            top: Math.random() * 100,
            left: Math.random() * 100,
            rotation: Math.random() * 360,
            animationDuration: Math.random() * 15 + 10,
            animationDelay: Math.random() * 5,
            opacity: Math.random() * 0.5 + 0.2,
            type: Math.floor(Math.random() * 3) // 0, 1, or 2 for different leaf shapes
        }));
    }, []);
    
    return (
        <motion.div 
            className="text-center mb-6 relative overflow-hidden p-6 rounded-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Ancient forest background with texture */}
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-900 to-green-950 rounded-lg overflow-hidden">
                {/* Wood grain texture overlay */}
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cGF0aCBkPSJNMCAwIEMzMCAyMCA3MCA1MCAxMDAgMzAgTDEwMCAxMDAgTDAgMTAwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')]"></div>
                
                {/* Forest glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-900/5 to-transparent"></div>
                
                {/* Falling leaves */}
                {leaves.map((leaf) => (
                    <motion.div
                        key={leaf.id}
                        className={`absolute ${
                            leaf.type === 0 ? 'bg-amber-600/60' : 
                            leaf.type === 1 ? 'bg-yellow-700/60' : 'bg-emerald-700/60'
                        }`}
                        style={{
                            width: `${leaf.size}px`,
                            height: `${leaf.size}px`,
                            top: `${leaf.top}%`,
                            left: `${leaf.left}%`,
                            opacity: leaf.opacity,
                            borderRadius: leaf.type === 0 ? '50% 50% 50% 0' : 
                                         leaf.type === 1 ? '50% 0 50% 50%' : '0 50% 50% 50%',
                            transform: `rotate(${leaf.rotation}deg)`,
                        }}
                        animate={{
                            y: [0, 30],
                            x: [0, Math.random() * 10 - 5],
                            rotate: [leaf.rotation, leaf.rotation + 180],
                            opacity: [leaf.opacity, leaf.opacity * 0.7],
                        }}
                        transition={{
                            duration: leaf.animationDuration,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: leaf.animationDelay,
                        }}
                    />
                ))}
                
                {/* Decorative vines around the clock */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Left side vine */}
                    <path 
                        d="M0 100 C30 90, 40 70, 30 50 C20 30, 40 20, 60 30" 
                        stroke="rgba(101, 163, 13, 0.4)" 
                        strokeWidth="1.5" 
                        fill="none"
                    />
                    <path 
                        d="M30 50 C40 40, 50 45, 60 40" 
                        stroke="rgba(101, 163, 13, 0.4)" 
                        strokeWidth="1" 
                        fill="none"
                    />
                    <circle cx="60" cy="40" r="3" fill="rgba(101, 163, 13, 0.4)" />
                    <circle cx="40" cy="45" r="2" fill="rgba(101, 163, 13, 0.4)" />
                    
                    {/* Right side vine */}
                    <path 
                        d="M400 100 C370 90, 360 70, 370 50 C380 30, 360 20, 340 30" 
                        stroke="rgba(101, 163, 13, 0.4)" 
                        strokeWidth="1.5" 
                        fill="none"
                    />
                    <path 
                        d="M370 50 C360 40, 350 45, 340 40" 
                        stroke="rgba(101, 163, 13, 0.4)" 
                        strokeWidth="1" 
                        fill="none"
                    />
                    <circle cx="340" cy="40" r="3" fill="rgba(101, 163, 13, 0.4)" />
                    <circle cx="360" cy="45" r="2" fill="rgba(101, 163, 13, 0.4)" />
                    
                    {/* Bottom vine */}
                    <path 
                        d="M150 200 C170 180, 200 190, 230 180 C260 170, 280 180, 300 170" 
                        stroke="rgba(101, 163, 13, 0.4)" 
                        strokeWidth="1.5" 
                        fill="none"
                    />
                    <circle cx="200" cy="190" r="3" fill="rgba(101, 163, 13, 0.4)" />
                    <circle cx="230" cy="180" r="2" fill="rgba(101, 163, 13, 0.4)" />
                    <circle cx="260" cy="170" r="3" fill="rgba(101, 163, 13, 0.4)" />
                </svg>
                
                {/* Ancient civilization pattern border */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-amber-700/30 to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-amber-700/30 to-transparent"></div>
                <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-amber-700/30 to-transparent"></div>
                <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-amber-700/30 to-transparent"></div>
                
                {/* Corner decorations - ancient symbols */}
                <div className="absolute top-2 left-2 w-6 h-6">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12L12 4L20 12L12 20L4 12Z" stroke="rgba(217, 119, 6, 0.5)" strokeWidth="0.5" fill="none" />
                        <path d="M12 4L12 20" stroke="rgba(217, 119, 6, 0.5)" strokeWidth="0.5" />
                        <path d="M4 12L20 12" stroke="rgba(217, 119, 6, 0.5)" strokeWidth="0.5" />
                    </svg>
                </div>
                <div className="absolute top-2 right-2 w-6 h-6">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="8" stroke="rgba(217, 119, 6, 0.5)" strokeWidth="0.5" fill="none" />
                        <path d="M12 4L12 20" stroke="rgba(217, 119, 6, 0.5)" strokeWidth="0.5" />
                        <path d="M4 12L20 12" stroke="rgba(217, 119, 6, 0.5)" strokeWidth="0.5" />
                    </svg>
                </div>
                <div className="absolute bottom-2 left-2 w-6 h-6">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4L20 12L12 20L4 12L12 4Z" stroke="rgba(217, 119, 6, 0.5)" strokeWidth="0.5" fill="none" />
                    </svg>
                </div>
                <div className="absolute bottom-2 right-2 w-6 h-6">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 4L16 4L16 20L8 20Z" stroke="rgba(217, 119, 6, 0.5)" strokeWidth="0.5" fill="none" />
                        <path d="M8 12L16 12" stroke="rgba(217, 119, 6, 0.5)" strokeWidth="0.5" />
                    </svg>
                </div>
                
                {/* Forest vignette effect */}
                <div className="absolute inset-0 bg-gradient-radial from-transparent to-green-950/60 opacity-70"></div>
            </div>
            
            <motion.div 
                className="relative z-10"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
            >
                <motion.h2 
                    className="text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-amber-100 to-amber-300 drop-shadow-[0_0_8px_rgba(217,119,6,0.8)]"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    {formattedTime}
                </motion.h2>
                <motion.p 
                    className="text-lg text-amber-200/80 mt-2 font-serif"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    {formattedDate}
                </motion.p>
                
                {/* Ancient tree symbol */}
                <motion.div 
                    className="absolute w-10 h-10"
                    style={{ top: '10%', right: '15%' }}
                    animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.7, 0.9, 0.7],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <path d="M12 2L12 22" stroke="rgba(217, 119, 6, 0.8)" strokeWidth="0.5" />
                        <path d="M12 5L7 10M12 8L5 15M12 11L8 15M12 14L10 16" stroke="rgba(217, 119, 6, 0.8)" strokeWidth="0.5" />
                        <path d="M12 5L17 10M12 8L19 15M12 11L16 15M12 14L14 16" stroke="rgba(217, 119, 6, 0.8)" strokeWidth="0.5" />
                        <circle cx="12" cy="3" r="1" fill="rgba(217, 119, 6, 0.8)" />
                    </svg>
                </motion.div>
                
                {/* Small animal silhouette */}
                <motion.div 
                    className="absolute w-8 h-8"
                    style={{ bottom: '15%', left: '10%' }}
                    animate={{
                        x: [0, 10, 0],
                        y: [0, -5, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        {/* Deer silhouette */}
                        <path d="M12 18L12 12L8 8L6 4L8 6L10 4L12 6L14 4L16 6L18 4L16 8L12 12" stroke="rgba(217, 119, 6, 0.6)" strokeWidth="0.5" fill="none" />
                        <path d="M8 18L16 18" stroke="rgba(217, 119, 6, 0.6)" strokeWidth="0.5" />
                        <path d="M10 18L10 20" stroke="rgba(217, 119, 6, 0.6)" strokeWidth="0.5" />
                        <path d="M14 18L14 20" stroke="rgba(217, 119, 6, 0.6)" strokeWidth="0.5" />
                    </svg>
                </motion.div>
                
                {/* Forest mist effect */}
                <motion.div
                    className="absolute w-full h-[20px] bg-gradient-to-t from-green-200/5 to-transparent blur-[3px]"
                    style={{ bottom: '10%' }}
                    animate={{ 
                        opacity: [0.3, 0.5, 0.3],
                        y: [0, -5, 0]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </motion.div>
        </motion.div>
    );
});

Clock.displayName = "Clock";

// Main Upload component
const Upload = () => {
    const [file, setFile] = useState<File>()
    const [progress, setProgress] = useState(0)
    const [uploadedUrl, setUploadedUrl] = useState<string>('')
    const { edgestore } = useEdgeStore()
    const ref = React.useRef(null)
    const isInView = useInView(ref)
    const [isLoading, setIsLoading] = useState(false)

    // Memoized animation variants to prevent re-renders
    const containerVariants = useMemo(() => ({
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    }), []);

    const itemVariants = useMemo(() => ({
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { duration: 0.5 }
        }
    }), []);

    // Optimized file upload handler
    const handleFileUpload = useCallback(async () => {
        if (!file) return;
        
        try {
            setIsLoading(true);
            setProgress(0);
            
            const res = await edgestore.publicFiles.upload({
                file,
                onProgressChange: (progress) => {
                    // Update progress at most 10 times to reduce re-renders
                    const roundedProgress = Math.round(progress / 10) * 10;
                    setProgress(roundedProgress);
                },
            });
            
            setUploadedUrl(res.url);
        } catch (error) {
            console.error('Upload failed:', error);
        } finally {
            setIsLoading(false);
        }
    }, [file, edgestore.publicFiles]);

    return (
        <div className="flex flex-col min-h-screen relative">
            {/* Background component covering the entire page */}
            <div className="absolute inset-0 w-full h-full">
                <Suspense fallback={<div className="w-full h-full bg-green-950"></div>}>
                    <BackgroundBeamsDemo />
                </Suspense>
            </div>
            
            {/* Content layer */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-4">
                {/* Ancient civilization decorative elements */}
                <div className="absolute top-8 left-8 w-16 h-16 opacity-40">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="45" stroke="rgba(217, 119, 6, 0.8)" strokeWidth="1" />
                        <path d="M50 5V95M5 50H95" stroke="rgba(217, 119, 6, 0.8)" strokeWidth="1" />
                        <path d="M20 20L80 80M20 80L80 20" stroke="rgba(217, 119, 6, 0.8)" strokeWidth="1" />
                        <circle cx="50" cy="50" r="10" stroke="rgba(217, 119, 6, 0.8)" strokeWidth="1" />
                    </svg>
                </div>
                
                <div className="absolute top-8 right-8 w-16 h-16 opacity-40">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 90H90L50 10L10 90Z" stroke="rgba(217, 119, 6, 0.8)" strokeWidth="1" />
                        <path d="M30 90L50 30L70 90" stroke="rgba(217, 119, 6, 0.8)" strokeWidth="1" />
                        <path d="M40 90L50 50L60 90" stroke="rgba(217, 119, 6, 0.8)" strokeWidth="1" />
                    </svg>
                </div>
                
                <div className="absolute bottom-8 left-8 w-16 h-16 opacity-40">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="20" y="20" width="60" height="60" stroke="rgba(217, 119, 6, 0.8)" strokeWidth="1" />
                        <rect x="35" y="35" width="30" height="30" stroke="rgba(217, 119, 6, 0.8)" strokeWidth="1" />
                        <path d="M20 50H80M50 20V80" stroke="rgba(217, 119, 6, 0.8)" strokeWidth="1" />
                    </svg>
                </div>
                
                <div className="absolute bottom-8 right-8 w-16 h-16 opacity-40">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 50C20 33.4315 33.4315 20 50 20C66.5685 20 80 33.4315 80 50C80 66.5685 66.5685 80 50 80C33.4315 80 20 66.5685 20 50Z" stroke="rgba(217, 119, 6, 0.8)" strokeWidth="1" />
                        <path d="M50 20C58.2843 20 65 33.4315 65 50C65 66.5685 58.2843 80 50 80C41.7157 80 35 66.5685 35 50C35 33.4315 41.7157 20 50 20Z" stroke="rgba(217, 119, 6, 0.8)" strokeWidth="1" />
                        <path d="M20 50H80" stroke="rgba(217, 119, 6, 0.8)" strokeWidth="1" />
                    </svg>
                </div>
                
                {/* Decorative vines */}
                <svg className="absolute left-0 top-0 h-full w-24 opacity-30" viewBox="0 0 100 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                        d="M30 0 C60 100, 20 200, 50 300 C80 400, 40 500, 70 600 C100 700, 60 800, 30 800" 
                        stroke="rgba(101, 163, 13, 0.6)" 
                        strokeWidth="2" 
                        fill="none"
                        strokeDasharray="1000"
                        className="animate-vine-grow"
                    />
                    <path 
                        d="M50 100 C70 120, 90 110, 100 130" 
                        stroke="rgba(101, 163, 13, 0.6)" 
                        strokeWidth="1.5" 
                        fill="none"
                        strokeDasharray="1000"
                        className="animate-vine-grow"
                        style={{ animationDelay: '0.5s' }}
                    />
                    <path 
                        d="M20 200 C0 220, -10 240, -20 260" 
                        stroke="rgba(101, 163, 13, 0.6)" 
                        strokeWidth="1.5" 
                        fill="none"
                        strokeDasharray="1000"
                        className="animate-vine-grow"
                        style={{ animationDelay: '1s' }}
                    />
                    <path 
                        d="M50 400 C70 420, 90 410, 100 430" 
                        stroke="rgba(101, 163, 13, 0.6)" 
                        strokeWidth="1.5" 
                        fill="none"
                        strokeDasharray="1000"
                        className="animate-vine-grow"
                        style={{ animationDelay: '1.5s' }}
                    />
                    <path 
                        d="M70 600 C90 620, 110 610, 120 630" 
                        stroke="rgba(101, 163, 13, 0.6)" 
                        strokeWidth="1.5" 
                        fill="none"
                        strokeDasharray="1000"
                        className="animate-vine-grow"
                        style={{ animationDelay: '2s' }}
                    />
                    <circle cx="100" cy="130" r="3" fill="rgba(101, 163, 13, 0.6)" />
                    <circle cx="-20" cy="260" r="3" fill="rgba(101, 163, 13, 0.6)" />
                    <circle cx="100" cy="430" r="3" fill="rgba(101, 163, 13, 0.6)" />
                    <circle cx="120" cy="630" r="3" fill="rgba(101, 163, 13, 0.6)" />
                </svg>
                
                <svg className="absolute right-0 top-0 h-full w-24 opacity-30" viewBox="0 0 100 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                        d="M70 0 C40 100, 80 200, 50 300 C20 400, 60 500, 30 600 C0 700, 40 800, 70 800" 
                        stroke="rgba(101, 163, 13, 0.6)" 
                        strokeWidth="2" 
                        fill="none"
                        strokeDasharray="1000"
                        className="animate-vine-grow"
                        style={{ animationDelay: '0.3s' }}
                    />
                    <path 
                        d="M50 100 C30 120, 10 110, 0 130" 
                        stroke="rgba(101, 163, 13, 0.6)" 
                        strokeWidth="1.5" 
                        fill="none"
                        strokeDasharray="1000"
                        className="animate-vine-grow"
                        style={{ animationDelay: '0.8s' }}
                    />
                    <path 
                        d="M80 200 C100 220, 110 240, 120 260" 
                        stroke="rgba(101, 163, 13, 0.6)" 
                        strokeWidth="1.5" 
                        fill="none"
                        strokeDasharray="1000"
                        className="animate-vine-grow"
                        style={{ animationDelay: '1.3s' }}
                    />
                    <path 
                        d="M50 400 C30 420, 10 410, 0 430" 
                        stroke="rgba(101, 163, 13, 0.6)" 
                        strokeWidth="1.5" 
                        fill="none"
                        strokeDasharray="1000"
                        className="animate-vine-grow"
                        style={{ animationDelay: '1.8s' }}
                    />
                    <path 
                        d="M30 600 C10 620, -10 610, -20 630" 
                        stroke="rgba(101, 163, 13, 0.6)" 
                        strokeWidth="1.5" 
                        fill="none"
                        strokeDasharray="1000"
                        className="animate-vine-grow"
                        style={{ animationDelay: '2.3s' }}
                    />
                    <circle cx="0" cy="130" r="3" fill="rgba(101, 163, 13, 0.6)" />
                    <circle cx="120" cy="260" r="3" fill="rgba(101, 163, 13, 0.6)" />
                    <circle cx="0" cy="430" r="3" fill="rgba(101, 163, 13, 0.6)" />
                    <circle cx="-20" cy="630" r="3" fill="rgba(101, 163, 13, 0.6)" />
                </svg>
                
                {/* Main content card */}
                <motion.div 
                    className="w-full max-w-md mx-auto bg-green-950/80 p-6 rounded-lg shadow-xl backdrop-blur-md border border-amber-700/20 relative overflow-hidden"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >   
                    {/* Ancient pattern overlay */}
                    <div className="absolute inset-0 opacity-5 bg-ancient-pattern"></div>
                    
                    {/* Ancient civilization border decorations */}
                    <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-amber-700/40"></div>
                    <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-amber-700/40"></div>
                    <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-amber-700/40"></div>
                    <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-amber-700/40"></div>
                    
                    <motion.div variants={itemVariants}>
                        <Clock />
                    </motion.div>
                    <div className="flex flex-col items-center">
                        <motion.div 
                            className="mb-6"
                            variants={itemVariants}
                        >
                            <h1 className="text-3xl font-ancient text-transparent bg-clip-text bg-gradient-to-b from-amber-100 to-amber-300 mb-2 text-center drop-shadow-[0_0_8px_rgba(217,119,6,0.8)]">Upload Your Meal</h1>
                            <p className="text-amber-200/80 text-center text-sm font-serif">
                                Get instant nutritional analysis of your food
                            </p>
                        </motion.div>
                    </div>
                    <motion.div 
                        variants={itemVariants}
                        className="mb-6 relative"
                    >
                        {/* Ancient forest frame for the dropzone */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-amber-700/30 via-emerald-700/20 to-amber-700/30 rounded-lg opacity-75 blur-sm"></div>
                        
                        {/* Decorative corners */}
                        <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-amber-600/60 rounded-tl-md"></div>
                        <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-amber-600/60 rounded-tr-md"></div>
                        <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-amber-600/60 rounded-bl-md"></div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-amber-600/60 rounded-br-md"></div>
                        
                        <div className="relative">
                            <SingleImageDropzone
                                width={400}
                                height={200}
                                value={file}
                                onChange={(file) => {
                                    setFile(file);
                                    setUploadedUrl('');
                                }}
                            />
                        </div>
                    </motion.div>
                    
                    {file && (
                        <motion.div
                            variants={itemVariants}
                            className="mb-4"
                        >
                            {progress > 0 && progress < 100 ? (
                                <div className="w-full bg-emerald-900/50 rounded-full h-2.5 overflow-hidden">
                                    <div 
                                        className="h-2.5 rounded-full transition-all duration-300 bg-gradient-to-r from-amber-600 to-amber-400 shadow-[0_0_10px_rgba(217,119,6,0.7)]" 
                                        style={{ width: `${progress}%` }}
                                    ></div>
                                </div>
                            ) : (
                                <button
                                    onClick={handleFileUpload}
                                    disabled={isLoading}
                                    className={`w-full py-2 px-4 rounded-md text-white font-medium transition-all font-ancient relative overflow-hidden ${
                                        isLoading 
                                            ? 'bg-emerald-900/50 cursor-not-allowed' 
                                            : 'bg-gradient-to-r from-amber-700 to-amber-600 hover:shadow-lg hover:shadow-amber-700/30 hover:-translate-y-0.5 shadow-[0_0_10px_rgba(217,119,6,0.5)]'
                                    }`}
                                >
                                    {/* Button decorative elements */}
                                    <span className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-amber-300/80 to-transparent"></span>
                                    <span className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-amber-300/80 to-transparent"></span>
                                    <span className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-amber-300/80 to-transparent"></span>
                                    <span className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-amber-300/80 to-transparent"></span>
                                    
                                    <span className="relative z-10">
                                        {isLoading ? 'Uploading...' : 'Upload Image'}
                                    </span>
                                </button>
                            )}
                        </motion.div>
                    )}
                    
                    {uploadedUrl && (
                        <motion.div
                            variants={itemVariants}
                            className="mt-4 p-3 bg-gradient-to-r from-emerald-900/30 to-green-800/30 rounded-md backdrop-blur-sm border border-amber-700/20 relative"
                        >
                            {/* Success message decorative elements */}
                            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-amber-600/40"></div>
                            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-amber-600/40"></div>
                            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-amber-600/40"></div>
                            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-amber-600/40"></div>
                            
                            <p className="text-amber-300 text-sm mb-2 font-ancient">Upload successful!</p>
                            <p className="text-amber-200/70 text-xs break-all font-serif">{uploadedUrl}</p>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </div>
    )
}

export default Upload