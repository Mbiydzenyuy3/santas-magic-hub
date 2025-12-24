export default function Loading() {
  return (
    <div className='h-screen max-w-4xl mx-auto py-20 text-center bg-gradient-to-br from-red-500 to-red-800 min-h-screen flex items-center justify-center'>
      <div className='text-white'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4'></div>
        <p>Loading Magic Hub...</p>
      </div>
    </div>
  );
}
