"use client";
import { useState, useRef, useEffect } from "react";
import { BackgroundBeamsDemo } from "@/component/ui/BackgroundBeamsDemo";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useDropzone } from "react-dropzone";
import { FaUpload } from "react-icons/fa";
import { IoMdCloudUpload } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { FaTree } from "react-icons/fa";
import { FaMountain } from "react-icons/fa";

export default function Upload() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState(false);
  const [time, setTime] = useState(new Date());
  const router = useRouter();

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif"],
    },
    maxFiles: 1,
  });

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    setUploadSuccess(false);
    setUploadError(false);

    try {
      // Simulate upload delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setUploadSuccess(true);
      // Redirect to home after successful upload
      setTimeout(() => {
        router.push("/");
      }, 1500);
    } catch (error) {
      console.error("Upload failed:", error);
      setUploadError(true);
    } finally {
      setUploading(false);
    }
  };

  // Format time for the clock
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const formattedHours = hours % 12 || 12;
  const ampm = hours >= 12 ? "PM" : "AM";

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-abyss-dark text-white">
      <BackgroundBeamsDemo />

      {/* Ancient forest decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 1000 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0 80 Q 250 20, 500 80 Q 750 140, 1000 80 L 1000 0 L 0 0 Z" 
            fill="rgba(6, 90, 96, 0.3)" 
          />
          <path 
            d="M0 60 Q 250 0, 500 60 Q 750 120, 1000 60" 
            stroke="rgba(161, 124, 56, 0.5)" 
            strokeWidth="1" 
            fill="none" 
          />
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-full h-20 opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 1000 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0 20 Q 250 80, 500 20 Q 750 -40, 1000 20 L 1000 100 L 0 100 Z" 
            fill="rgba(6, 90, 96, 0.3)" 
          />
          <path 
            d="M0 40 Q 250 100, 500 40 Q 750 -20, 1000 40" 
            stroke="rgba(161, 124, 56, 0.5)" 
            strokeWidth="1" 
            fill="none" 
          />
        </svg>
      </div>

      {/* Ancient symbols */}
      <div className="absolute top-10 left-10 opacity-20">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="rgba(161, 124, 56, 0.8)" strokeWidth="0.5" fill="none" />
          <path d="M12 2V22M2 12H22" stroke="rgba(161, 124, 56, 0.8)" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="absolute bottom-10 right-10 opacity-20">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L22 12L12 22L2 12L12 2Z" stroke="rgba(161, 124, 56, 0.8)" strokeWidth="0.5" fill="none" />
          <path d="M12 6L18 12L12 18L6 12L12 6Z" stroke="rgba(161, 124, 56, 0.8)" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Clock component with ancient forest theme */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              {/* Clock face */}
              <div className="w-32 h-32 rounded-full border-2 border-ancient-gold/40 flex items-center justify-center relative overflow-hidden bg-deep-blue/30 backdrop-blur-sm shadow-ancient-glow">
                {/* Clock pattern */}
                <div className="absolute inset-0 opacity-10">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="45" stroke="rgba(161, 124, 56, 0.8)" strokeWidth="0.5" fill="none" />
                    <circle cx="50" cy="50" r="40" stroke="rgba(161, 124, 56, 0.8)" strokeWidth="0.5" fill="none" />
                    <path d="M50 5V95M5 50H95" stroke="rgba(161, 124, 56, 0.8)" strokeWidth="0.5" />
                    <path d="M26.5 26.5L73.5 73.5M26.5 73.5L73.5 26.5" stroke="rgba(161, 124, 56, 0.8)" strokeWidth="0.5" />
                  </svg>
                </div>
                
                {/* Clock time */}
                <div className="text-center z-10">
                  <div className="text-xl font-serif text-ancient-gold">
                    {formattedHours}:{minutes.toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs text-ancient-gold/70">
                    {seconds.toString().padStart(2, "0")} {ampm}
                  </div>
                </div>

                {/* Clock hands */}
                <div 
                  className="absolute w-[1px] h-14 bg-ancient-gold/70 origin-bottom" 
                  style={{ 
                    transform: `translateX(-50%) rotate(${(hours % 12) * 30 + minutes * 0.5}deg)`,
                    bottom: '50%',
                    left: '50%'
                  }}
                />
                <div 
                  className="absolute w-[1px] h-16 bg-ancient-gold/80 origin-bottom" 
                  style={{ 
                    transform: `translateX(-50%) rotate(${minutes * 6}deg)`,
                    bottom: '50%',
                    left: '50%'
                  }}
                />
                <div 
                  className="absolute w-[0.5px] h-16 bg-ocean-teal origin-bottom" 
                  style={{ 
                    transform: `translateX(-50%) rotate(${seconds * 6}deg)`,
                    bottom: '50%',
                    left: '50%'
                  }}
                />
                <div className="absolute w-2 h-2 rounded-full bg-ancient-gold/80 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>

              {/* Decorative vines around clock */}
              <svg className="absolute -top-4 -left-4 w-40 h-40 opacity-60" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M80 0 C 60 20, 20 60, 0 80 C 20 100, 60 140, 80 160 C 100 140, 140 100, 160 80 C 140 60, 100 20, 80 0 Z" 
                  stroke="rgba(6, 90, 96, 0.6)" 
                  strokeWidth="0.5" 
                  fill="none" 
                  strokeDasharray="4 2"
                />
                <path 
                  d="M80 20 C 65 35, 35 65, 20 80 C 35 95, 65 125, 80 140 C 95 125, 125 95, 140 80 C 125 65, 95 35, 80 20 Z" 
                  stroke="rgba(6, 90, 96, 0.6)" 
                  strokeWidth="0.5" 
                  fill="none" 
                  strokeDasharray="4 2"
                />
                
                {/* Small leaves */}
                <circle cx="80" cy="0" r="2" fill="rgba(6, 90, 96, 0.6)" />
                <circle cx="0" cy="80" r="2" fill="rgba(6, 90, 96, 0.6)" />
                <circle cx="80" cy="160" r="2" fill="rgba(6, 90, 96, 0.6)" />
                <circle cx="160" cy="80" r="2" fill="rgba(6, 90, 96, 0.6)" />
                
                {/* Ancient symbols at cardinal points */}
                <path d="M80 5 L80 15 M75 10 L85 10" stroke="rgba(161, 124, 56, 0.8)" strokeWidth="0.5" />
                <path d="M5 80 L15 80 M10 75 L10 85" stroke="rgba(161, 124, 56, 0.8)" strokeWidth="0.5" />
                <path d="M80 145 L80 155 M75 150 L85 150" stroke="rgba(161, 124, 56, 0.8)" strokeWidth="0.5" />
                <path d="M145 80 L155 80 M150 75 L150 85" stroke="rgba(161, 124, 56, 0.8)" strokeWidth="0.5" />
              </svg>

              {/* Deer silhouette */}
              <motion.div 
                className="absolute -bottom-6 -right-10 opacity-30"
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 25 L10 15 L15 10 L20 5 L25 10 L30 5 L32 10 L35 8 L38 12 L35 15 L38 20 L35 25 L30 20 L25 25 L20 20 L15 25 L10 20 L5 25 Z" fill="rgba(161, 124, 56, 0.8)" />
                </svg>
              </motion.div>

              {/* Forest mist */}
              <motion.div 
                className="absolute -bottom-4 -left-4 w-40 h-8 bg-gradient-to-t from-ocean-teal/10 to-transparent blur-sm"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                  y: [0, -2, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>

          {/* Main content card with ancient forest theme */}
          <div className="bg-deep-blue/30 backdrop-blur-md rounded-lg border border-ocean-teal/30 shadow-forest overflow-hidden">
            {/* Ancient pattern border */}
            <div className="h-2 w-full bg-gradient-to-r from-deep-teal via-ancient-gold/40 to-deep-teal"></div>
            
            <div className="p-8">
              <h1 className="text-3xl font-ancient text-center mb-6 text-ancient-gold shadow-forest-text">
                Ancient Forest Upload
              </h1>
              
              {/* Ancient symbols divider */}
              <div className="flex items-center justify-center mb-8">
                <div className="h-[1px] w-16 bg-ocean-teal/40"></div>
                <FaLeaf className="mx-2 text-ocean-teal/70" />
                <div className="h-[1px] w-32 bg-ocean-teal/40"></div>
                <FaTree className="mx-2 text-ocean-teal/70" />
                <div className="h-[1px] w-32 bg-ocean-teal/40"></div>
                <FaMountain className="mx-2 text-ocean-teal/70" />
                <div className="h-[1px] w-16 bg-ocean-teal/40"></div>
              </div>

              {/* Upload area */}
              <div 
                {...getRootProps()} 
                className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-all cursor-pointer
                  ${isDragActive ? 'border-ancient-gold bg-deep-teal/20' : 'border-ocean-teal/40 hover:border-ancient-gold/60 hover:bg-deep-teal/10'}`}
              >
                <input {...getInputProps()} />
                
                <div className="flex flex-col items-center">
                  <div className="mb-4 text-5xl text-ocean-teal">
                    <IoMdCloudUpload className="animate-forest-pulse" />
                  </div>
                  
                  {file ? (
                    <div className="text-ancient-gold">
                      <p className="text-lg font-ancient">{file.name}</p>
                      <p className="text-sm text-ocean-teal/80 mt-1">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-lg font-ancient text-ancient-gold">
                        Drag & drop your image here
                      </p>
                      <p className="text-sm text-ocean-teal/80 mt-1">
                        or click to select a file
                      </p>
                    </div>
                  )}
                </div>
                
                {/* Ancient forest decorative elements */}
                <div className="absolute bottom-2 left-2 opacity-10">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L12 22M2 12H22" stroke="rgba(161, 124, 56, 0.8)" strokeWidth="0.5" />
                  </svg>
                </div>
                <div className="absolute top-2 right-2 opacity-10">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="rgba(161, 124, 56, 0.8)" strokeWidth="0.5" fill="none" />
                  </svg>
                </div>
              </div>

              {/* Upload button */}
              {file && !uploadSuccess && (
                <div className="mt-6 flex justify-center">
                  <button
                    onClick={handleUpload}
                    disabled={uploading}
                    className={`px-6 py-3 rounded-md flex items-center justify-center transition-all
                      ${uploading 
                        ? 'bg-deep-teal/50 cursor-not-allowed' 
                        : 'bg-deep-teal hover:bg-ocean-teal text-white shadow-forest hover:shadow-ancient-glow'
                      }
                    `}
                  >
                    {uploading ? (
                      <>
                        <FaSpinner className="animate-spin mr-2" />
                        <span>Uploading...</span>
                      </>
                    ) : (
                      <>
                        <FaUpload className="mr-2" />
                        <span>Upload</span>
                      </>
                    )}
                  </button>
                </div>
              )}

              {/* Upload status */}
              {uploadSuccess && (
                <div className="mt-6 text-center text-ancient-gold">
                  <div className="flex items-center justify-center">
                    <FaRegCheckCircle className="text-2xl mr-2" />
                    <span>Upload successful!</span>
                  </div>
                  <p className="text-sm text-ocean-teal/80 mt-1">
                    Redirecting to home...
                  </p>
                </div>
              )}

              {uploadError && (
                <div className="mt-6 text-center text-red-500">
                  <div className="flex items-center justify-center">
                    <FaRegTimesCircle className="text-2xl mr-2" />
                    <span>Upload failed</span>
                  </div>
                  <p className="text-sm mt-1">
                    Please try again
                  </p>
                </div>
              )}
            </div>
            
            {/* Ancient pattern border */}
            <div className="h-2 w-full bg-gradient-to-r from-deep-teal via-ancient-gold/40 to-deep-teal"></div>
          </div>
        </div>
      </div>
    </div>
  );
} 