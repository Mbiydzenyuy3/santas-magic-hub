"use client";

import { useEffect, useState } from "react";
import { copyToClipboard, downloadElementAsImage } from "@/lib/shareUtils";

interface ShareActionsProps {
  title?: string;
  content?: string;
}

export default function ShareActions({
  title = "Magic Hub",
  content
}: ShareActionsProps) {
  const [isShareSupported, setIsShareSupported] = useState(false);
  const [copyStatus, setCopyStatus] = useState<
    "idle" | "copying" | "copied" | "error"
  >("idle");

  useEffect(() => {
    // Check if Web Share API is supported in browser environment
    const checkShareSupport = () => {
      if (typeof window !== "undefined") {
        const isSupported =
          "share" in navigator && typeof navigator.share === "function";
        setIsShareSupported(isSupported);
      }
    };

    checkShareSupport();
  }, []);

  const handleCopyLink = async () => {
    setCopyStatus("copying");
    try {
      const success = await copyToClipboard(window.location.href);
      if (success) {
        setCopyStatus("copied");
        setTimeout(() => setCopyStatus("idle"), 2000);
      } else {
        setCopyStatus("error");
        setTimeout(() => setCopyStatus("idle"), 2000);
      }
    } catch (error) {
      setCopyStatus("error");
      setTimeout(() => setCopyStatus("idle"), 2000);
    }
  };

  const handleDownload = () => {
    const el = document.getElementById("share-content");
    if (el) downloadElementAsImage(el, "magic-share.png");
  };

  const getCopyButtonText = () => {
    switch (copyStatus) {
      case "copying":
        return "⏳ Copying...";
      case "copied":
        return "✅ Copied!";
      case "error":
        return "❌ Failed";
      default:
        return "📋 Copy Link";
    }
  };

  const getCopyButtonClass = () => {
    switch (copyStatus) {
      case "copied":
        return "px-4 py-2 rounded-lg bg-green-200 text-green-800";
      case "error":
        return "px-4 py-2 rounded-lg bg-red-200 text-red-800";
      default:
        return "px-4 py-2 rounded-lg bg-green-100 hover:bg-green-200";
    }
  };

  return (
    <div className='flex gap-3 justify-center mt-6'>
      <button
        onClick={handleCopyLink}
        className={getCopyButtonClass()}
        disabled={copyStatus === "copying"}
      >
        {getCopyButtonText()}
      </button>

      <button
        onClick={handleDownload}
        className='px-4 py-2 rounded-lg bg-green-700 hover:bg-green-600 text-white'
      >
        ⬇️ Download
      </button>

      {isShareSupported && (
        <button
          onClick={() =>
            navigator.share({
              title: title,
              text: content || `Check out this ${title} from Magic Hub!`,
              url: window.location.href
            })
          }
          className='px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500'
        >
          📤 Share
        </button>
      )}
    </div>
  );
}
