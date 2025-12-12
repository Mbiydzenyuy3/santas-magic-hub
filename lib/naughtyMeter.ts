export const naughtyRatings = [
  { label: 'Extremely Nice', score: 90 },
  { label: 'Very Nice', score: 80 },
  { label: 'Nice', score: 70 },
  { label: 'A Little Naughty', score: 50 },
  { label: 'Very Naughty', score: 30 },
  { label: 'North Pole Investigation Pending', score: 10 }
]

export function getRating(name: string) {
  const hash = [...name].reduce((acc, ch) => acc + ch.charCodeAt(0), 0)
  const index = hash % naughtyRatings.length
  return naughtyRatings[index]
}
