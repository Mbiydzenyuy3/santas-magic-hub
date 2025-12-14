export type GiftCategory =
  | "Tech"
  | "Cozy"
  | "Fun"
  | "Food"
  | "Fashion"
  | "Kids"
  | "Experience";

export const giftCategories: Record<GiftCategory, string[]> = {
  Tech: ["Wireless earbuds", "Smartwatch", "Bluetooth speaker"],
  Cozy: ["Fuzzy blanket", "Scented candles", "Warm slippers"],
  Fun: ["Board game", "Puzzle set", "Funny mug"],
  Food: ["Chocolate box", "Coffee sampler", "Holiday cookies"],
  Fashion: ["Scarf", "Beanie", "Leather wallet"],
  Kids: ["Toy train", "Lego set", "Storybook"],
  Experience: ["Movie night voucher", "Spa day", "Cooking class"]
};
