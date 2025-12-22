"use client";

export default function PhotoUploader({
  onUpload
}: {
  onUpload: (file: string) => void;
}) {
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => onUpload(reader.result as string);
    reader.onerror = () => {
      console.error("Failed to read file");
    };
    reader.readAsDataURL(file);
  };

  return (
    <input
      type='file'
      accept='image/*'
      onChange={handleUpload}
      className='block mx-auto border border-gray-300 px-8 py-4 text-gray-100'
    />
  );
}
