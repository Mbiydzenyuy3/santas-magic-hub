import { giftCategories, GiftCategory } from "./giftCategories";

interface GiftInput {
  age: number;
  relationship: string;
  personality: GiftCategory[];
}

export function getGiftRecommendations({
  age,
  relationship,
  personality
}: GiftInput): string[] {
  const selectedCategories: GiftCategory[] = [...personality];

  // Add age-based category
  if (age < 12) selectedCategories.push("Kids");

  // Add relationship-based categories
  if (relationship.includes("partner")) selectedCategories.push("Fashion");
  if (relationship.includes("friend")) selectedCategories.push("Experience");

  // Remove duplicates and ensure we have at least one category
  const uniqueCategories = [...new Set(selectedCategories)];

  if (uniqueCategories.length === 0) {
    uniqueCategories.push("Food");
  }

  return uniqueCategories.flatMap((category) => giftCategories[category]);
}
