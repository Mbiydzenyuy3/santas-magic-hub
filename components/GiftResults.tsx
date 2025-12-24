"use client";

import GiftCard from "./GiftCard";
import ShareButton from "./ShareButton";

interface Props {
  gifts: string[];
}

export default function GiftResults({ gifts }: Props) {
  const giftList = gifts.join(", ");

  return (
    <div className='space-y-6'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800'>
        {gifts.map((gift, index) => (
          <GiftCard key={index} gift={gift} />
        ))}
      </div>

      <div className='text-center'>
        <ShareButton type='gifts' content={giftList} />
      </div>
    </div>
  );
}
