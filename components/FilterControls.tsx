"use client";
import { Filters } from "@/lib/filters";

export default function FilterControls({
  filters,
  setFilters
}: {
  filters: Filters;
  setFilters: (f: Filters) => void;
}) {
  return (
    <div className='space-y-4 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20'>
      <h3 className='text-white font-bold text-lg mb-4 text-center'>
        Photo Filters
      </h3>

      {/* Basic Filters */}
      <label className='text-gray-100 flex items-center gap-2 cursor-pointer'>
        <input
          type='checkbox'
          checked={filters.glow}
          onChange={() => setFilters({ ...filters, glow: !filters.glow })}
          className='w-4 h-4 rounded border-gray-300'
        />
        <span>Golden Glow Effect</span>
      </label>

      {/* Contrast Control */}
      <div className='flex items-center gap-3 justify-between'>
        <label className='text-gray-100 text-sm min-w-0'>Contrast</label>
        <input
          type='range'
          min='80'
          max='150'
          value={filters.contrast}
          onChange={(e) =>
            setFilters({ ...filters, contrast: Number(e.target.value) })
          }
          className='flex-1 max-w-32 accent-green-500'
        />
        <span className='text-gray-100 text-sm w-8 text-center'>
          {filters.contrast}%
        </span>
      </div>

      {/* TODO: Future 3D Effects Section
      <div className="border-t border-white/20 pt-4">
        <h4 className='text-white font-semibold mb-3'>3D Effects (Coming Soon)</h4>
        <p className='text-gray-300 text-sm'>3D rotation, perspective, and depth effects will be available in the next update.</p>
      </div>
      
      {/* TODO: Future Background Removal Section  
      <div className="border-t border-white/20 pt-4">
        <h4 className='text-white font-semibold mb-3'>Background Tools (Coming Soon)</h4>
        <p className='text-gray-300 text-sm'>Background removal and color replacement tools will be available in the next update.</p>
      </div>
      */}
    </div>
  );
}
