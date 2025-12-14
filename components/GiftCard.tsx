interface Props {
  gift: string;
}

export default function GiftCard({ gift }: Props) {
  return (
    <div className='p-4 bg-white rounded-lg shadow text-center'>
      <p className='font-medium mt-2'>{gift}</p>
    </div>
  );
}
