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
      <div>
        <label htmlFor="snow-speed" className="font-semibold">
          Snow Speed
        </label>
        <input
          id="snow-speed"
          type="range"
          min="2"
          max="15"
          value={speed}
          onChange={(e) => onSpeedChange(Number(e.target.value))}
          className="w-full border"
        />
      </div>

      <div>
        <label htmlFor="snow-density" className="font-semibold">
          Snow Density
        </label>
        <input
          id="snow-density"
          type="range"
          min="20"
          max="200"
          value={density}
          onChange={(e) => onDensityChange(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div>
        <label htmlFor="snow-shape" className="font-semibold">
          Snowflake Shape
        </label>{' '}
        <select
          id="snow-shape"
          value={shape}
          onChange={(e) => onShapeChange(e.target.value)}
          className="w-full p-2 border rounded"
        >
          {snowShapes.map((sh, i) => (
            <option key={`${sh}-${i}`} value={sh}>
              {sh}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
