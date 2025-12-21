"use client";

import { useState } from "react";
import { Filters } from "@/lib/filters";

export default function DownloadButton({
  image,
  filters,
  filename = "photo.png"
}: {
  image: string;
  filters: Filters;
  filename?: string;
}) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);

    try {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = document.createElement("img");

      img.onload = async () => {
        if (!ctx) {
          console.error("Canvas context not available");
          setIsDownloading(false);
          return;
        }

        // Set canvas size to image size
        canvas.width = img.width;
        canvas.height = img.height;

        // Clear with white background
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Apply filters manually
        if (filters.glow) {
          ctx.filter = `contrast(${filters.contrast}%) brightness(1.4) saturate(1.8) hue-rotate(15deg)`;
        } else {
          ctx.filter = `contrast(${filters.contrast}%)`;
        }

        // Draw the filtered image
        ctx.drawImage(img, 0, 0);

        // TODO: Future 3D effects implementation
        // if (filters.rotation3d !== 0 || filters.depth) {
        //   // Apply 3D transformations using canvas transforms
        //   const rotationRad = (filters.rotation3d * Math.PI) / 180;
        //   ctx.translate(canvas.width / 2, canvas.height / 2);
        //   ctx.rotate(rotationRad);
        //   ctx.translate(-canvas.width / 2, -canvas.height / 2);
        // }

        // Convert to blob and download
        canvas.toBlob((blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.download = filename;
            link.href = url;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
          }
          setIsDownloading(false);
        }, "image/png");
      };

      img.onerror = () => {
        console.error("Failed to load image for download");
        setIsDownloading(false);
        alert("Failed to download image. Please try again.");
      };

      img.crossOrigin = "anonymous";
      img.src = image;
    } catch (error) {
      console.error("Error generating image:", error);
      alert("Failed to download image. Please try again.");
      setIsDownloading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className='group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 disabled:hover:scale-100 transition-all duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-green-300 disabled:cursor-not-allowed'
    >
      <DownloadIcon
        className={`w-5 h-5 ${
          isDownloading ? "" : "group-hover:animate-bounce"
        }`}
      />
      <span>{isDownloading ? "Generating..." : "Download Photo"}</span>
    </button>
  );
}

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
      />
    </svg>
  );
}
