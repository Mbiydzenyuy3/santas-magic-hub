export function getSantaReaction(score: number, total: number) {
  const percentage = (score / total) * 100;

  if (percentage === 100) {
    return "Ho Ho Ho! Perfect score! Santa is VERY proud!";
  }

  if (percentage >= 70) {
    return "Great job! Santa approves!";
  }

  if (percentage >= 40) {
    return "Not bad! A little more Christmas spirit!";
  }

  return "Uh oh… Santa suggests more Christmas movies!";
}
