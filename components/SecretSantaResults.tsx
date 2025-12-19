export default function SecretSantaResults({
  results
}: {
  results: { giver: string; receiver: string }[];
}) {
  if (!results.length) return null;

  return (
    <div className='mt-8 space-y-3'>
      {results.map((pair, index) => (
        <div
          key={index}
          className='p-4 bg-white rounded-lg shadow flex justify-between'
        >
          <span className='font-semibold text-black'>{pair.giver}</span>
          <span>🎄 → 🎁</span>
          <span className='text-red-600 font-semibold'>{pair.receiver}</span>
        </div>
      ))}
    </div>
  );
}
