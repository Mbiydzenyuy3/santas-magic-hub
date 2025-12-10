// storyTemplates.ts
export function generateStory(
  character: string,
  setting: string,
  conflict: string
) {
  return [
    `
    **Chapter 1 – A Christmas Beginning 🎄**

    Once upon a snowy December night, ${character} wandered through ${setting}. 
    Everything seemed peaceful… until they discovered that ${conflict}! 
    The entire North Pole trembled with worry.
    `,

    `
    **Chapter 2 – The Magical Search ✨**

    Determined to help, ${character} set off on a brave adventure.  
    They met glittering snow spirits, solved peppermint puzzles, 
    and followed clues hidden beneath frosty footprints.
    `,

    `
    **Chapter 3 – Saving Christmas 🎁**

    At last, ${character} uncovered the source of the trouble.  
    With courage and Christmas kindness, they restored the magic.
    The North Pole cheered — Christmas was saved!
    `
  ]
}
