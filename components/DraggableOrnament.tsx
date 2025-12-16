"use client";

interface Props {
  emoji: string;
}

export default function DraggableOrnament({ emoji }: Props) {
  return (
    <div
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData("text/plain", emoji);
      }}
      className='text-3xl cursor-grab active:cursor-grabbing'
    >
      {emoji}
    </div>
  );
}
