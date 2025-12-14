import GiftCard from "./GiftCard";

interface Props {
  gifts: string[];
}

export default function GiftResults({ gifts }: Props) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-gray-800'>
      {gifts.map((gift, index) => (
        <GiftCard key={index} gift={gift} />
      ))}
    </div>
  );
}
