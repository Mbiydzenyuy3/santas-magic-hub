"use client";

import { useRouter } from "next/navigation";

interface ShareButtonProps {
  type: string;
  content: string;
  className?: string;
}

export default function ShareButton({
  type,
  content,
  className = ""
}: ShareButtonProps) {
  const router = useRouter();

  const handleShare = () => {
    const encodedContent = encodeURIComponent(content);
    router.push(`/magic/share?type=${type}&content=${encodedContent}`);
  };

  return (
    <button
      onClick={handleShare}
      className={`px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition ${className}`}
    >
      📤 Share
    </button>
  );
}
