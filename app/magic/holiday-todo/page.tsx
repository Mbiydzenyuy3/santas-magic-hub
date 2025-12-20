"use client";
import HolidayTodo from "@/components/HolidayTodo";
import Link from "next/link";
import { useEffect } from "react";
import RealSnowfall from "@/components/Snow";

export default function HolidayTodoPage() {
  useEffect(() => {
    try {
      if (typeof window === "undefined" || !window.localStorage) {
        return;
      }

      const parsed = JSON.parse(localStorage.getItem("completedDays") || "[]");
      const stored: number[] = Array.isArray(parsed) ? parsed : [];
      if (!stored.includes(18)) {
        localStorage.setItem("completedDays", JSON.stringify([...stored, 18]));
      }
    } catch (error) {
      console.error("Failed to update completed days:", error);
    }
  }, []);

  return (
    <div className='min-h-screen mx-auto py-20 px-4 text-center relative bg-gradient-to-b from-red-800 via-red-700 to-red-900'>
      <div className='fixed inset-0 pointer-events-none z-0'>
        <RealSnowfall />
      </div>
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

      <h1 className='text-4xl font-bold text-center text-green-700 mb-4'>
        🎄 Holiday To-Do List
      </h1>
      <p className='text-center text-gray-100 mb-10'>
        Turn your holiday tasks into festive ornaments
      </p>

      <HolidayTodo />
    </div>
  );
}
