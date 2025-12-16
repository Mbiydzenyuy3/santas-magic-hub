import { ornaments } from "@/lib/ornaments";
import DraggableOrnament from "./DraggableOrnament";

export default function OrnamentPalette() {
  return (
    <div className='flex gap-4 p-4 bg-white rounded-xl shadow'>
      {ornaments.map((o) => (
        <DraggableOrnament key={o.id} emoji={o.emoji} />
      ))}
    </div>
  );
}
