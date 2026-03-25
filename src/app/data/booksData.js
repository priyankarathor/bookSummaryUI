export const books = [
  {
    id: 1,
    slug: "the-midnight-echo",
    title: "The Midnight Echo",
    author: "Priyanka Sharma",
    genre: "Psychological Fiction",
    year: "2026",
    rating: "4.9",
    pages: 328,
    shortDescription:
      "A haunting journey through memory, silence, and the truths that refuse to stay buried.",
    description:
      "The Midnight Echo is a deeply immersive psychological fiction novel that explores grief, longing, and the quiet violence of memory. Set between dim hallways, old letters, and unfinished conversations, the story follows a woman who begins to hear fragments of her past returning in strange ways. The novel is layered with emotional intensity, visual depth, and an elegant darkness that makes every page feel cinematic.",
    accent: "#d4a574",
    cover:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=1000&q=80",
    bg:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1400&q=80",
    highlights: [
      "Emotionally layered narrative",
      "Cinematic psychological atmosphere",
      "Strong female protagonist",
    ],
  },
  {
    id: 2,
    slug: "whispers-of-ash",
    title: "Whispers of Ash",
    author: "Priyanka Sharma",
    genre: "Dark Literary Fiction",
    year: "2026",
    rating: "4.8",
    pages: 290,
    shortDescription:
      "A dark literary tale where broken love, old cities, and unspoken regrets burn slowly beneath the surface.",
    description:
      "Whispers of Ash is a dark and elegant literary fiction piece centered around loss, identity, and the invisible marks people leave on one another. The narrative unfolds like smoke—slow, hypnotic, and impossible to hold. With intimate prose and a deeply visual style, this book is crafted for readers who love emotional intensity and poetic storytelling.",
    accent: "#b8865b",
    cover:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=1000&q=80",
    bg:
      "https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&w=1400&q=80",
    highlights: [
      "Poetic dark writing",
      "Premium literary mood",
      "Beautiful character depth",
    ],
  },
  {
    id: 3,
    slug: "glass-heart-theory",
    title: "Glass Heart Theory",
    author: "Priyanka Sharma",
    genre: "Contemporary Drama",
    year: "2026",
    rating: "4.7",
    pages: 314,
    shortDescription:
      "A sharp and emotional story about fragile love, ambition, and the cost of being seen.",
    description:
      "Glass Heart Theory is a modern emotional drama that explores the fragile architecture of love and self-worth. Told with stylish depth and cinematic rhythm, the story balances vulnerability and ambition in a world where everyone wants to be understood but few know how to stay open.",
    accent: "#caa47b",
    cover:
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1000&q=80",
    bg:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1400&q=80",
    highlights: [
      "Modern emotional drama",
      "Luxury visual storytelling",
      "Strong relationship arc",
    ],
  },
  {
    id: 4,
    slug: "velvet-lines",
    title: "Velvet Lines",
    author: "Priyanka Sharma",
    genre: "Romantic Literary Fiction",
    year: "2026",
    rating: "4.8",
    pages: 276,
    shortDescription:
      "A rich, intimate novel where attraction, distance, and desire unfold in beautiful tension.",
    description:
      "Velvet Lines is soft on the surface and devastating underneath. The book is built on longing, emotional restraint, and the magnetic pull between two people who keep meeting at the wrong time. Elegant, mature, and stylish, it offers a deeply atmospheric reading experience.",
    accent: "#c69563",
    cover:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80",
    bg:
      "https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&w=1400&q=80",
    highlights: [
      "Elegant romantic tension",
      "Premium mature tone",
      "Deeply atmospheric scenes",
    ],
  },
  {
    id: 5,
    slug: "the-silent-chapter",
    title: "The Silent Chapter",
    author: "Priyanka Sharma",
    genre: "Mystery Drama",
    year: "2026",
    rating: "4.9",
    pages: 342,
    shortDescription:
      "A moody mystery wrapped in secrets, old manuscripts, and lives rewritten by truth.",
    description:
      "The Silent Chapter blends mystery and emotional drama into a visually rich experience. Built around hidden manuscripts, unresolved pasts, and the seductive danger of truth, the novel keeps its atmosphere dense, polished, and suspenseful until the very end.",
    accent: "#d0a06f",
    cover:
      "https://images.unsplash.com/photo-1511108690759-009324a90311?auto=format&fit=crop&w=1000&q=80",
    bg:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1400&q=80",
    highlights: [
      "Mystery with emotional weight",
      "Dark premium aesthetic",
      "Page-turning reveal structure",
    ],
  },
  {
    id: 6,
    slug: "after-the-last-page",
    title: "After the Last Page",
    author: "Priyanka Sharma",
    genre: "Emotional Fiction",
    year: "2026",
    rating: "5.0",
    pages: 301,
    shortDescription:
      "A reflective novel about endings, second chances, and the stories people carry forever.",
    description:
      "After the Last Page is an emotional fiction novel about endings that do not end, and the strange beauty of what lingers afterward. Thoughtful, layered, and visually intimate, it is written for readers who want a story that stays with them even after the final page.",
    accent: "#d9ae83",
    cover:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=1000&q=80",
    bg:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1400&q=80",
    highlights: [
      "Beautiful final-act emotion",
      "Strong reflective theme",
      "Luxury reading experience",
    ],
  },
];

export function getBookBySlug(slug) {
  return books.find((book) => book.slug === slug);
}

export const bookss = [
  {
    id: 1,
    slug: "the-midnight-echo",
    title: "The Midnight Echo",
    author: "Priyanka Sharma",
    genre: "Psychological Fiction",
    year: "2026",
    rating: "4.9",
    pages: 328,
    shortDescription: "A haunting journey through memory, silence, and truth.",
    description: "Full description here...",
    accent: "#d4a574",
    spineColor: "linear-gradient(180deg, #6e3b2a, #2b1712)",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=1000&q=80",
    bg: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1400&q=80",
    highlights: ["Emotionally layered", "Cinematic mood", "Strong protagonist"],
  },
  {
    id: 2,
    slug: "whispers-of-ash",
    title: "Whispers of Ash",
    author: "Priyanka Sharma",
    genre: "Dark Literary Fiction",
    year: "2026",
    rating: "4.8",
    pages: 290,
    shortDescription: "A dark literary tale of loss and identity.",
    description: "Full description here...",
    accent: "#b8865b",
    spineColor: "linear-gradient(180deg, #3c2a20, #17100d)",
    cover: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=1000&q=80",
    bg: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&w=1400&q=80",
    highlights: ["Poetic writing", "Premium literary mood", "Character depth"],
  },
];