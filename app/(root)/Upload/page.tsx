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
    
    return (
        <motion.div 
            className="text-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.h2 
                className="text-3xl font-bold text-white "
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
            >
                {formattedTime}
            </motion.h2>
            <motion.p 
                className="text-lg text-white/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                {formattedDate}
            </motion.p>
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
                <Suspense fallback={<div className="w-full h-full bg-neutral-950"></div>}>
                    <BackgroundBeamsDemo />
                </Suspense>
            </div>
            
            {/* Content layer */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-4">
                <motion.div 
                    className="w-full max-w-md mx-auto bg-regal-blue bg-opacity-50 p-6 rounded-lg shadow-xl backdrop-blur-sm"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >   
                    <motion.div variants={itemVariants}>
                        <Clock />
                    </motion.div>
                    <div className="flex flex-col items-center">
                        <motion.div 
                            className="mb-6"
                            variants={itemVariants}
                        >
                            <h1 className="text-2xl font-bold text-center text-white mb-2">Upload Your Meal</h1>
                            <p className="text-gray-300 text-center text-sm">
                                Get instant nutritional analysis of your food
                            </p>
                    </motion.div>
                    </div>
                    <motion.div 
                        variants={itemVariants}
                        className="mb-6"
                    >
                        <SingleImageDropzone
                            width={400}
                            height={200}
                            value={file}
                            onChange={(file) => {
                                setFile(file);
                                setUploadedUrl('');
                            }}
                        />
                    </motion.div>
                    
                    {file && (
                        <motion.div
                            variants={itemVariants}
                            className="mb-4"
                        >
                            {progress > 0 && progress < 100 ? (
                                <div className="w-full bg-gray-700 rounded-full h-2.5">
                                    <div 
                                        className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" 
                                        style={{ width: `${progress}%` }}
                                    ></div>
                                </div>
                            ) : (
                                <button
                                    onClick={handleFileUpload}
                                    disabled={isLoading}
                                    className={`w-full py-2 px-4 rounded-md text-white font-medium transition-colors ${
                                        isLoading ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                                    }`}
                                >
                                    {isLoading ? 'Uploading...' : 'Upload Image'}
                                </button>
                            )}
                        </motion.div>
                    )}
                    
                    {uploadedUrl && (
                        <motion.div
                            variants={itemVariants}
                            className="mt-4 p-3 bg-green-900 bg-opacity-30 rounded-md"
                        >
                            <p className="text-green-400 text-sm mb-2">Upload successful!</p>
                            <p className="text-gray-300 text-xs break-all">{uploadedUrl}</p>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </div>
    )
}

export default Upload