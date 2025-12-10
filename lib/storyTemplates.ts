export function generateStory(
  character: string,
  setting: string,
  conflict: string
) {
  const stories = [
    // -----------------------------------------------------------------------
    // STORY 1: The Romantic Comedy (Hallmark Style) 
    // Theme: Love Found, Serendipity
    // -----------------------------------------------------------------------
    [
      `
      Chapter 1 – The Snowbound Encounter ❄️

      The snow wasn't just falling in ${setting}; it was swirling like a snow globe shaken by a giant. 
      ${character} pulled their coat tighter, trying to reach the old lodge, but fate had other plans. 
      Specifically, ${conflict}! 
      Just as panic set in, a stranger with kind eyes stepped out of the blizzard, offering a hand.
      `,

      `
      Chapter 2 – Coffee and Confessions ☕

      Trapped by the storm, they shared stories by a crackling fire. 
      The stranger laughed at ${character}'s jokes and listened to their dreams. 
      Somewhere between the scent of pine and roasted chestnuts, the problem of ${conflict} began to feel less like a disaster and more like destiny.
      `,

      `
      Chapter 3 – Under the Mistletoe ❤️

      When the storm broke on Christmas morning, the world was glittering white. 
      ${character} realized they hadn't just survived the night; they had found a partner for all future storms. 
      They didn't just find a way home; they found a home in each other.
      `
    ],

    // -----------------------------------------------------------------------
    // STORY 2: The Whimsical Adventure (Pixar Style) 
    // Theme: Adventure, Magic, Imagination
    // -----------------------------------------------------------------------
    [
      `
      Chapter 1 – The Great North Pole Glitch ⚙️

      It was a crisis of epic proportions at ${setting}. 
      The elves were running in circles, clutching their hats, because ${conflict}! 
      "Impossible!" cried the Head Elf. 
      But ${character} stepped forward, adjusting their goggles. "Nothing is impossible on Christmas Eve."
      `,

      `
      Chapter 2 – The Skyward Journey 🚀

      Using a sled powered by stardust and determination, ${character} soared into the aurora borealis. 
      They had to navigate through clouds that tasted like cotton candy and dodge grumpy frost giants. 
      The mission? To fix the magic before the first child woke up.
      `,

      `
      Chapter 3 – The Golden Gear 🌟

      With seconds to spare, ${character} used a candy cane as a wrench and a sprinkle of belief. 
      With a loud *clink*, the machinery hummed back to life. 
      Santa winked as he took off, and ${character} knew this was a story for the history books.
      `
    ],

    // -----------------------------------------------------------------------
    // STORY 3: The Sorrowful to Hopeful (Classic Literature Style) 
    // Theme: Sadness, Redemption, Quiet Joy
    // -----------------------------------------------------------------------
    [
      `
      Chapter 1 – The Silent Night 🌑

      The city lights of ${setting} usually brought joy, but this year, they only cast long shadows. 
      ${character} walked alone, clutching a thin coat. 
      The weight in their heart was heavy because ${conflict}. 
      The carols sung by passersby felt distant, like a memory from a different life.
      `,

      `
      Chapter 2 – A Flicker of Light 🕯️

      Sitting on a cold bench, ${character} watched a single candle flicker in a window. 
      A stranger sat beside them—not to talk, but simply to share the silence. 
      They offered a small, wrapped gift. It wasn't much, but it was given with pure love.
      `,

      `
      Chapter 3 – The Warmth Returns 🕊️

      As the church bells rang midnight, ${character} realized that hope is not the absence of sorrow, but the presence of connection. 
      The problem of ${conflict} remained, but the loneliness was gone. 
      And sometimes, surviving the night is its own kind of Christmas miracle.
      `
    ],

    // -----------------------------------------------------------------------
    // STORY 4: The Chaos Comedy (Sitcom Style)
    // Theme: Funny, Chaotic, Family Drama
    // -----------------------------------------------------------------------
    [
      `
      Chapter 1 – The Holiday Disaster 🦃

      It was supposed to be the perfect dinner at ${setting}. 
      The table was set, the candles lit... until ${character} walked in and realized that ${conflict}! 
      Grandma shrieked, the dog barked, and the turkey looked suspiciously like it was plotting revenge.
      `,

      `
      Chapter 2 – Operation Damage Control 🧯

      ${character} tried to fix it. Really, they did. 
      But trying to solve the issue only led to a glitter explosion and an accidental call to the fire department. 
      The perfect Christmas was officially ruined.
      `,

      `
      Chapter 3 – The Best Worst Christmas 🍕

      Sitting on the floor eating takeout pizza amidst the wreckage, the whole family started laughing. 
      They laughed until their sides hurt. 
      "We'll never forget this," ${character} grinned. 
      It wasn't the Christmas they planned, but it was the one they needed.
      `
    ],

    // -----------------------------------------------------------------------
    // STORY 5: The Intriguing Mystery (Noir/Thriller Style) 
    // Theme: Mystery, Suspense, Revelation
    // -----------------------------------------------------------------------
    [
      `
      Chapter 1 – The Midnight Package 📦

      The clock struck twelve in ${setting}. 
      The house was silent, yet ${character} sensed something was wrong. 
      On the table lay a letter sealed with red wax, revealing that ${conflict}. 
      Who would do such a thing on Christmas Eve?
      `,

      `
      Chapter 2 – Tracks in the Snow 👣

      ${character} followed a trail of clues: a golden thread, a scent of cinnamon, and a strange set of footprints leading to the roof. 
      The mystery deepened. This wasn't a thief; it was someone trying to send a message.
      `,

      `
      Chapter 3 – The Unmasking 🎭

      At the top of the chimney, the truth was revealed. 
      The "culprit" was an old friend trying to surprise them. 
      The fear vanished, replaced by the thrill of the season. 
      It was a Christmas mystery solved with a hug.
      `
    ],

    // -----------------------------------------------------------------------
    // STORY 6: Real Life Nostalgia (Memoir Style) 
    // Theme: Real Life, Childhood Memories, Simplicity
    // -----------------------------------------------------------------------
    [
      `
      A Simple Christmas Memory 🍊

      Years ago, back in ${setting}, things were simpler. 
      We didn't have much money, and ${character} was worried because ${conflict}. 
      But that year, we learned that magic doesn't come from a store. 
      We made decorations out of popcorn, sang songs off-key, and laughed until we cried. 
      It remains the richest Christmas of my life.
      `
    ],

    // -----------------------------------------------------------------------
    // STORY 7: The Epic Fantasy (Tolkien-esque)
    // Theme: Heroism, Ancient Magic, Destiny
    // -----------------------------------------------------------------------
    [
      `
      Chapter 1 – The Frost Curse ❄️

      The Kingdom of ${setting} was under a spell. 
      The Eternal Winter had turned cruel, all because ${conflict}. 
      The ancient prophecy said only a heart of pure gold could break the ice. 
      ${character} picked up their lantern and stepped into the blizzard.
      `,

      `
      Chapter 2 – The Guardian of the Peak 🦅

      The journey was treacherous. 
      ${character} faced wind spirits and crossed the Bridge of Sighs. 
      At the summit, they met the Winter Guardian, who demanded a sacrifice of a precious memory to save the realm.
      `,

      `
      Chapter 3 – The Sun Returns ☀️

      ${character} offered not a memory, but a promise of future kindness. 
      The Guardian, moved by this selflessness, shattered the curse. 
      The sun rose over the kingdom for the first time in a century. 
      Christmas had returned.
      `
    ]
  ]

  // Randomly choose a full story template
  const random = Math.floor(Math.random() * stories.length)
  return stories[random]
}
