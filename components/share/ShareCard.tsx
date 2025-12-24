"use client";

export default function ShareCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      id='share-content'
      className='bg-white p-6 rounded-xl shadow-lg max-w-xl mx-auto'
    >
      {children}
    </div>
  );
}
