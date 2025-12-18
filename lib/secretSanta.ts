export function generateSecretSanta(names: string[]) {
  if (names.length < 2) return [];

  const shuffled = [...names];

  // Fisher–Yates shuffle
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Ensure no one gets themselves
  for (let i = 0; i < names.length; i++) {
    if (names[i] === shuffled[i]) {
      return generateSecretSanta(names);
    }
  }

  return names.map((giver, index) => ({
    giver,
    receiver: shuffled[index]
  }));
}
