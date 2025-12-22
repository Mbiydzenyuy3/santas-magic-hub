export const baseColors = {
  red: ["#7B1E1E", "#B11226", "#D72638", "#FF4D4D"],
  green: ["#0B3D2E", "#146356", "#1F8A70", "#2ECC71"],
  gold: ["#7A5C00", "#B38E00", "#D4AF37", "#FFD700"],
  white: ["#FFFFFF", "#F7F7F7", "#ECECEC", "#E0E0E0"]
};

export function generatePalette() {
  return Object.values(baseColors).map(
    (colors) => colors[Math.floor(Math.random() * colors.length)]
  );
}
