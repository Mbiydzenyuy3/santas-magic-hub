interface City {
  name: string
  x: number
  y: number
}

interface MapPathProps {
  cities: City[]
  visited: number
}

export default function MapPath({ cities, visited }: MapPathProps) {
  return (
    <>
      {cities.map((city: City, index: number) => (
        <div
          key={index}
          className={`w-3 h-3 rounded-full absolute ${
            visited >= index ? 'bg-red-500' : 'bg-gray-300'
          }`}
          style={{
            left: `${city.x}%`,
            top: `${city.y}%`,
            transform: 'translate(-50%, -50%)',
            transition: 'background 0.5s ease'
          }}
        />
      ))}
    </>
  )
}
