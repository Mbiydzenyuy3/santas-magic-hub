"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ShareCard from "@/components/share/ShareCard";
import ShareActions from "@/components/share/ShareActions";
import Link from "next/link";

function ShareContent() {
  const params = useSearchParams();
  const type = params.get("type");
  const content = params.get("content");

  const renderContent = () => {
    switch (type) {
      case "story":
        return <pre className='whitespace-pre-wrap text-left'>{content}</pre>;

      case "palette":
        return (
          <div className='text-center'>
            <p className='mb-4 text-gray-700'>Color Palette:</p>
            <div className='flex flex-wrap justify-center gap-2 mb-4'>
              {content?.split(", ").map((color, index) => (
                <div key={index} className='flex flex-col items-center gap-2'>
                  <div
                    className='w-12 h-12 rounded-lg shadow-md border'
                    style={{ backgroundColor: color.trim() }}
                  />
                  <span className='text-xs font-mono text-gray-600'>
                    {color.trim()}
                  </span>
                </div>
              ))}
            </div>
            <code className='bg-gray-100 px-3 py-2 rounded text-sm'>
              {content}
            </code>
          </div>
        );

      case "quiz":
        return (
          <div className='text-center'>
            <h2 className='text-xl font-bold mb-4'>🎄 Christmas Quiz Result</h2>
            <p className='text-lg'>{content}</p>
          </div>
        );

      case "gifts":
        return (
          <div className='text-center'>
            <h2 className='text-xl font-bold mb-4'>🎁 Gift Recommendations</h2>
            <ul className='text-left space-y-2'>
              {content?.split(", ").map((gift, index) => (
                <li key={index} className='flex items-center gap-2'>
                  <span className='text-green-600'>•</span>
                  <span>{gift}</span>
                </li>
              ))}
            </ul>
          </div>
        );

      case "secret-santa":
        return (
          <div className='text-center'>
            <h2 className='text-xl font-bold mb-4'>
              🎄 Secret Santa Assignments
            </h2>
            <div className='space-y-2'>
              {content?.split(", ").map((assignment, index) => {
                const [giver, receiver] = assignment.split(" → ");
                return (
                  <div
                    key={index}
                    className='flex justify-between items-center p-2 bg-gray-50 rounded'
                  >
                    <span className='font-semibold'>{giver}</span>
                    <span className='text-red-500'>🎄 → 🎁</span>
                    <span className='text-red-600 font-semibold'>
                      {receiver}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        );

      case "rating":
        return (
          <div className='text-center'>
            <h2 className='text-xl font-bold mb-4'>
              🎅 Naughty or Nice Result
            </h2>
            <p className='text-lg'>{content}</p>
          </div>
        );

      case "card":
        return <p className='text-center'>{content}</p>;

      case "quote":
        return (
          <blockquote className='italic text-center'>“{content}”</blockquote>
        );

      default:
        return (
          <p className='text-center'>{content || "No content to display"}</p>
        );
    }
  };

  return (
    <>
      <ShareCard>{renderContent()}</ShareCard>
      <ShareActions />
    </>
  );
}

export default function SharePage() {
  return (
    <div className='relative min-h-screen bg-gray-50 py-16 px-4'>
      <div className='absolute top-6 left-6 z-20'>
        <Link
          href='/magic'
          className='inline-flex items-center gap-2 px-4 py-2 bg-red-700 backdrop-blur-md hover:bg-red-600 border border-white/20 text-white rounded-full transition-all duration-300 font-medium group shadow-lg'
        >
          <span className='group-hover:-translate-x-1 transition-transform'>
            ←
          </span>{" "}
          Back
        </Link>
      </div>
      <h1 className='text-3xl font-bold text-center mb-8'>Share Your Magic</h1>

      <Suspense fallback={<div className='text-center py-8'>Loading...</div>}>
        <ShareContent />
      </Suspense>
    </div>
  );
}
