'use client'
import { snowShapes } from '@/lib/snowShapes'

type ControlsPanelProps = {
  speed: number
  density: number
  shape: string
  onSpeedChange: (value: number) => void
  onDensityChange: (value: number) => void
  onShapeChange: (value: string) => void
}

export default function ControlsPanel({
  speed,
  density,
  shape,
  onSpeedChange,
  onDensityChange,
  onShapeChange
}: ControlsPanelProps) {
  return (
    <div className="bg-white/80 backdrop-blur p-4 rounded-xl shadow-md space-y-4">
      {/* Snow Speed */}
      <div>
        <label className="font-semibold">Snow Speed</label>
        <input
          type="range"
          min="2"
          max="15"
          value={speed}
          onChange={(e) => onSpeedChange(Number(e.target.value))}
          className="w-full border"
        />
      </div>

      {/* Snow Density */}
      <div>
        <label className="font-semibold">Snow Density</label>
        <input
          type="range"
          min="20"
          max="200"
          value={density}
          onChange={(e) => onDensityChange(Number(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Snow Shape */}
      <div>
        <label className="font-semibold">Snowflake Shape</label>
        <select
          value={shape}
          onChange={(e) => onShapeChange(e.target.value)}
          className="w-full p-2 border rounded"
        >
          {snowShapes.map((sh, i) => (
            <option key={i} value={sh}>
              {sh}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
