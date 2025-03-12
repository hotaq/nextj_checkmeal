"use client";

import React, { useCallback, useEffect, useState, memo } from "react";
import { useDropzone } from "react-dropzone";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

interface SingleImageDropzoneProps {
  width?: number;
  height?: number;
  value?: File | string;
  className?: string;
  disabled?: boolean;
  dropzoneOptions?: Record<string, any>;
  onChange?: (file?: File) => void | Promise<void>;
}

const SingleImageDropzone = memo(({
  width,
  height,
  value,
  className,
  disabled,
  dropzoneOptions,
  onChange,
}: SingleImageDropzoneProps) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file) {
        // Check file size (5MB limit)
        if (file.size > 5 * 1024 * 1024) {
          setError("File size exceeds 5MB limit");
          return;
        }
        
        // Check file type
        if (!file.type.startsWith('image/')) {
          setError("Only image files are allowed");
          return;
        }
        
        setError(null);
        void onChange?.(file);
      }
    },
    [onChange]
  );

  const { getRootProps, getInputProps, acceptedFiles, fileRejections } =
    useDropzone({
      accept: { "image/*": [] },
      multiple: false,
      disabled,
      onDrop,
      ...dropzoneOptions,
    });

  // Clean up preview URL when component unmounts
  useEffect(() => {
    return () => {
      if (preview && preview.startsWith('blob:')) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  // Update preview when value changes
  useEffect(() => {
    if (typeof value === "string") {
      setPreview(value);
    } else if (value instanceof File) {
      const objectUrl = URL.createObjectURL(value);
      setPreview(objectUrl);
      
      // Clean up the previous objectUrl when it changes
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [value]);

  // Show error message if file is rejected
  useEffect(() => {
    if (fileRejections.length > 0) {
      setError(fileRejections[0].errors[0].message);
    }
  }, [fileRejections]);

  return (
    <div className="relative">
      <div
        {...getRootProps({
          className: twMerge(
            "relative flex cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-gray-400 bg-gray-50 p-6 text-center hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
            disabled && "pointer-events-none opacity-60",
            className
          ),
          style: {
            width: width ?? "100%",
            height: height ?? "auto",
          },
        })}
      >
        <input {...getInputProps()} />
        {preview ? (
          <div className="relative h-full w-full">
            <Image
              src={preview}
              alt="Preview"
              fill
              style={{ objectFit: "contain" }}
              loading="lazy"
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-1 text-sm text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>Drag and drop or click to upload</span>
          </div>
        )}
      </div>
      {error && (
        <div className="mt-1 text-xs text-red-500">{error}</div>
      )}
    </div>
  );
});

SingleImageDropzone.displayName = "SingleImageDropzone";

export { SingleImageDropzone };