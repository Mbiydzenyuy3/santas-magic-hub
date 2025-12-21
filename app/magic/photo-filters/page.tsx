"use client";

import { useState, useEffect } from "react";
import PhotoUploader from "@/components/PhotoUploader";
import PhotoEditor from "@/components/PhotoEditor";
import FilterControls from "@/components/FilterControls";
import DownloadButton from "@/components/DownloadButton";
import { defaultFilters, Filters } from "@/lib/filters";
import Link from "next/link";

export default function PhotoFiltersPage() {
  const [image, setImage] = useState<string | null>(null);
  const [filters, setFilters] = useState<Filters>(defaultFilters);

  useEffect(() => {
    try {
      if (typeof window === "undefined" || !window.localStorage) {
        return;
      }

      const parsed = JSON.parse(localStorage.getItem("completedDays") || "[]");
      const stored: number[] = Array.isArray(parsed) ? parsed : [];
      if (!stored.includes(19)) {
        localStorage.setItem("completedDays", JSON.stringify([...stored, 19]));
      }
    } catch (error) {
      console.error("Failed to update completed days:", error);
    }
  }, []);

  return (
    <div className='min-h-screen mx-auto py-20 px-4 text-center relative bg-gradient-to-b from-red-800 via-red-700 to-red-900'>
      <div className='absolute top-6 left-6 z-20'>
        <Link
          href='/magic'
          className='inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md hover:bg-white/20 border border-white/20 text-white rounded-full transition-all duration-300 font-medium group shadow-lg'
        >
          <span className='group-hover:-translate-x-1 transition-transform'>
            ←
          </span>{" "}
          Back
        </Link>
      </div>

      <h1 className='text-3xl font-bold mb-6 text-gray-100'>Photo Filters</h1>

      <PhotoUploader onUpload={setImage} />

      {image && (
        <>
          <div className='my-6'>
            <PhotoEditor image={image} filters={filters} />
          </div>

          <FilterControls filters={filters} setFilters={setFilters} />

          <div className='mt-6'>
            <DownloadButton
              image={image}
              filters={filters}
              filename='christmas-filtered-photo.png'
            />
          </div>
        </>
      )}
    </div>
  );
}
