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

  if (age < 13 && relationship !== "child" && relationship !== "teen") {
    selectedCategories.push("Kids");
  }
   if (relationship === "partner") selectedCategories.push("Fashion");
  if (relationship === "friend") selectedCategories.push("Experience");
  if (relationship === "child" || relationship === "teen")
    selectedCategories.push("Kids");
  if (relationship === "parent" || relationship === "grandparent")
    selectedCategories.push("Cozy");
  if (relationship === "colleague") selectedCategories.push("Tech");
  if (relationship === "sibling") selectedCategories.push("Fun");

  const uniqueCategories = [...new Set(selectedCategories)];

  if (uniqueCategories.length === 0) {
    uniqueCategories.push("Food");
  }

  return uniqueCategories.flatMap((category) => giftCategories[category]);
}
